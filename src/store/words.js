import { firestoreAction } from 'vuexfire'

import { db, Timestamp } from '../db'
import * as Filters from '../helpers/filters'

const wordCollection = db.collection('words')

export default {
  state: {
    words: [],
    filteredWords: [],
    filter: {
      search: '',
      familiarity: 'all',
      jlpt: 'all',
      order: {
        field: 'createdAt',
        mode: 'desc',
      }
    },
    error: "",
  },
  mutations: {
    setWords(state, words) { state.words = words },
    setFilteredWords(state, words) { state.filteredWords = words },

    setFilterFamiliarity(state, familiarity) { state.filter.familiarity = familiarity },
    setFilterJLPT(state, jlpt) { state.filter.jlpt = jlpt },
    setFilterSearch(state, search) { state.filter.search = search },
    setOrder(state, order) { state.filter.order = order },

    filterWords(state) {
      const words = [...state.words]
      state.filteredWords = words
      state.filteredWords = Filters.filterWords(state.filter, words)
    },
    orderWords(state) {
      const words = [...state.filteredWords]
      state.filteredWords = Filters.orderWords(state.filter.order, words)
    },

    setError(state, error) { state.error = error },
  },
  actions: {
    bindWordsRef: firestoreAction(({ bindFirestoreRef }) => {
      bindFirestoreRef('words', wordCollection)
    }),
    unbindWordsRef: firestoreAction(({ unbindFirestoreRef }) => {
      unbindFirestoreRef('words')
    }),
    loadWords: async ({ commit }, payload) => {
      await commit('setWords', payload)
      await commit('setFilteredWords', payload)
    },
    addWord: firestoreAction((context, payload) => {
      payload.createdAt = Timestamp.now()
      wordCollection.add(payload)
        .catch(err => context.commit('setError', err.toString()))
    }),
    updateWord: firestoreAction((context, payload) => {
      payload.updatedAt = Timestamp.now()
      wordCollection.doc(payload.id).update(payload.data)
        .catch(err => context.commit('setError', err.toString()))
    }),
    deleteWord: firestoreAction((context, payload) => {
      wordCollection.doc(payload.id).delete()
        .catch(err => context.commit('setError', err.toString()))
    }),
    // Si potrebbe usare updateWord...
    setPhrases: firestoreAction((context, payload) => {
      wordCollection.doc(payload.id).update({ phrases: payload.phrases })
        .catch(err => context.commit('setError', err.toString()))
    }),

    // Filter and Sort
    filterOrder: async ({ commit }, order) => {
      await commit('setOrder', order)
      await commit('orderWords')
    },
    filterSearch: async ({ commit, dispatch }, search) => {
      await commit('setFilterSearch', search)
      dispatch('filterWords')
    },
    filterFamiliarity: async ({ commit, dispatch }, familiarity) => {
      await commit('setFilterFamiliarity', familiarity)
      dispatch('filterWords')
    },
    filterJLPT: async ({ commit, dispatch }, jlpt) => {
      await commit('setFilterJLPT', jlpt)
      dispatch('filterWords')
    },
    filterWords: async ({ commit }) => {
      await commit('filterWords')
      await commit('orderWords')
    },

    dismissError: async ({ commit }) => {
      await commit('setError', "")
    }
  },
  getters: {
    wordsWithoutPhrases: state => state.filteredWords.filter(w => !w.phrases),
    wordsWithPhrases: state => state.filteredWords.filter(w => w.phrases && w.phrases.length > 0),
    words: state => state.words,
    filteredWords: state => state.filteredWords,
  },
}