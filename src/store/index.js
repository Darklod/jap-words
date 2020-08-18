import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'

import words from './words'
import reviews from './reviews'

Vue.use(Vuex)

export default new Vuex.Store({
  mutations: {
    ...vuexfireMutations,
  },
  modules: {
    words,
    reviews,
  }
})
