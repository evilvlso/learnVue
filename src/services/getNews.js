var appcode=""

import axios from "axios"
export async function getNews() {
    var res = await axios.get("http://ali-news.showapi.com/channelList",{
        headers:{
            Authorization:'APPCODE ' + appcode,
        }
    });
    // console.log(res.data.showapi_res_body.channelList);
    return res.data.showapi_res_body.channelList
}

export async  function newsDetail(channelId,page=1,limit=10){
    var resp =  await axios.get("http://ali-news.showapi.com/newsList",{headers:{
        Authorization:'APPCODE ' + appcode,
    },params:{
        channelId,
        page,
        maxResult:limit,
        needAllList: false,
        needContent :1 ,
    }});
    console.log(resp.data.showapi_res_body.pagebean)
    return resp.data.showapi_res_body.pagebean}

