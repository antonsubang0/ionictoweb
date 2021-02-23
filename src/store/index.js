import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "../config"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	user : null,
  },
  mutations: {
  	setUser(state, payload) {
  		state.user = payload;
  	}
  },
  getters : {
  	user (state) {
  		return state.user;
  	}
  },
  actions: {
  	auth ({commit} , payload) {
  		commit('setUser', payload);
  	},
  },
  modules: {
  }
})
