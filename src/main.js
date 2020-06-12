import Vue from 'vue'
import App from './App.vue'
import "./assets/style/global.css"
import  "./assets/style/reset.css"
import router from "./components/route/index"
import  store from "./components/store/index"

store.dispatch("newsChannels/fetchNews");

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
