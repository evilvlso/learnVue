import {getNews} from "@/services/getNews"

export default {
    state:{
        data:[1,23],
        isLoading:true,
    },
    namespaced:true,
    mutations:{
        setisLoading(state,payload){
            state.isLoading=payload
        },
        setData(state,payload){
            state.data=payload
        }
    },
    actions:{
        async fetchNews(context){
            context.commit("setisLoading",true);
            var channels = await getNews();
            context.commit("setData",channels);
            context.commit("setisLoading",false);

        }
    },
}