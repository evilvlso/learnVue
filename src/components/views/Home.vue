<template>
  <div>
      <Banner :banners="banners" :duration="2000" />
      <Channels @changeid="changeid" />
      <Loading v-show="isloading"  />
      <NewsList v-show="!isloading" :news="news"/>
  </div>
</template>

<script>
import Banner from "../Banner"
import Channels from "../news/Channels"
import NewsList from "../news/NewsList"
import Loading from "../Loading"
// import Center from "../Center"
import {newsDetail} from "../../services/getNews"
export default {
components :{
Banner,
Channels,
NewsList,
Loading ,
// Center ,
},
data() {return {
    banners : [
        {url:require("../../assets/banner/banner1.jpeg")},
        {url:require("../../assets/banner/banner2.jpeg")},
        {url:require("../../assets/banner/banner3.jpeg")},
    ],
    news : [],
    isloading : true,
}},
methods :{
    async changeid (newsId) {
        this.isloading=true;
        var resp = await newsDetail(newsId, 1, 10); //经过一段时间
      this.news = resp.contentlist;
        this.isloading=false;
    },
},
}
</script>
