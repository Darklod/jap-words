import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'
import { firestoreAction } from 'vuexfire'

import { db, Timestamp } from '../db'
import * as Filters from '../helpers/filters'

const wordCollection = db.collection('words')

Vue.use(Vuex)

export default new Vuex.Store({
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
    }
  },
  mutations: {
    ...vuexfireMutations,
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
    }
  },
  actions: {
    bindWordsRef: firestoreAction(({ bindFirestoreRef }) => {
      bindFirestoreRef('words', wordCollection)
    }),
    unbindWordsRef: firestoreAction(({ bindFirestoreRef }) => {
      bindFirestoreRef('words')
    }),
    loadWords: ({ commit }, payload) => {
      commit('setWords', payload)
      commit('setFilteredWords', payload)
    },
    addWord: firestoreAction((context, payload) => {
      payload.createdAt = Timestamp.now()
      wordCollection.add(payload)
        .catch(err => console.error(err)) // commit error
    }),
    updateWord: firestoreAction((context, payload) => {
      payload.updatedAt = Timestamp.now()
      wordCollection.doc(payload.id).set(payload.data)
        .catch(err => console.error(err))
    }),
    deleteWord: firestoreAction((context, payload) => {
      wordCollection.doc(payload.id).delete()
        .catch(err => console.error(err))
    }),
    // Si potrebbe usare updateWord...
    setPhrases: firestoreAction((context, payload) => {
      wordCollection.doc(payload.id).set({ phrases: payload })
        .catch(err => console.error(err))
    }),
    // ...

    // Filter and Sort
    async filterOrder({ commit }, order) {
      await commit('setOrder', order)
      await commit('orderWords')
    },
    async filterSearch({ commit, dispatch }, search) {
      await commit('setFilterSearch', search)
      dispatch('filterWords')
    },
    async filterFamiliarity({ commit, dispatch }, status) {
      await commit('setFilterFamiliarity', status)
      dispatch('filterWords')
    },
    async filterJLPT({ commit, dispatch }, status) {
      await commit('setFilterJLPT', status)
      dispatch('filterWords')
    },
    async filterWords({ commit }) {
      await commit('filterWords')
      await commit('orderWords')
    },
  },
  getters: {
    wordsWithoutPhrases: state => state.filteredWords.filter(w => !w.phrases),
    wordsWithPhrases: state => state.filteredWords.filter(w => w.phrases && w.phrases.length > 0)
  }
})
