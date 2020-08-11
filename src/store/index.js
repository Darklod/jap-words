import Vue from 'vue'
import Vuex from 'vuex'

import { vuexfireMutations } from 'vuexfire'
import { firestoreAction } from 'vuexfire'

import { db, Timestamp } from '../db'

Vue.use(Vuex)

const wordCollection = db.collection('words')

export default new Vuex.Store({
    state: {
        words: [],
    },
    mutations: {
        ...vuexfireMutations,
    },
    actions: {
        loadWords: firestoreAction(context => {
            context.bindFirestoreRef('words', wordCollection)
        }),
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
            wordCollection.doc(payload.id).set({phrases: payload})
                .catch(err => console.error(err))
        }),
        // ...
    },
})