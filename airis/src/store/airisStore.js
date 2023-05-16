import Vuex from 'vuex'
import Vue from "vue";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    chatPartner: {
      name: '',
      subtitle: '',
      image: '',
      initialPrompt: '',
      infoHeader: '',
      infoBody: ''
    }
  },
  mutations: {
    setPartner(state, payload){
      state.chatPartner = payload
    }
  }
})

export default store;