import Vue from 'vue'
import App from './App.vue'
import "./assets/style/global.css"
import  "./assets/style/reset.css"
import router from "./components/route/index"


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
