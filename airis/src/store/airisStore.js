import Vuex from 'vuex'
import Vue from "vue";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    chatPartner: {
      name: '',
      image: '',
      initialPrompt: ''
    }
  },
  mutations: {
    setPartner(state, payload){
      state.chatPartner = payload
    }
  }
})

export default store;