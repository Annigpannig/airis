import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import routes from './routes.js';
import store from "@/store/airisStore";

Vue.config.productionTip = false
Vue.use(VueRouter);

new Vue({
  router: new VueRouter(routes),
  store: store,
  render: h => h(App),
}).$mount('#app')