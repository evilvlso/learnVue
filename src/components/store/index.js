import Vuex from "vuex"
import Vue from "vue"
import newsChannels from "./newsChannels"
import newsList from "./newsList"
import userLogin from "./userLogin"
Vue.use(Vuex)

var store =  new Vuex.Store(
    {
        modules : {newsChannels,newsList,userLogin,}
    }
        
)

export default store;