<template>
<div>
    <h1>{{$route.params.id}}</h1>
    <Loading v-if="isLoading" />
    <NewsList v-if="!isLoading" :news="news" />
    <Pager :page="page" :total="total" :limit="limit" :paneNumber="9" @switchPage="switchPage" />
  </div>
</template>

<script>
import NewsList from "@/components/news/NewsList";
import Pager from "@/components/Pager";
import Loading from "@/components/Loading";
import {newsDetail} from "@/services/getNews";
export default {
  components: { 
      Pager,
     NewsList,
     Loading },
  data(){return {
    //   page : 1,
      total:80,
      limit : 10,
      news:[],
      isLoading:true,

  }},
  computed:{
      page(){
        return + this.$route.query.page || 1;
      },
  },
  created(){
    //    this.setNewsList(); //因为有watch属性中的immediate所以不需要啦 
  },
  methods :{
      switchPage(newpage){
          //因为使用了 查询参数方式所以不能直接赋值 需要使用代码式导航
        //   this.page= newpage;
        //代码式导航 router
        this.$router.push({
                //可以省略  
                // name:"ChannelNews",
                // params:{id: this.$route.params.id},
                query: {page:newpage},

        });
        this.setNewsList();
      },
      async setNewsList(){
          this.isLoading=true
        var resp = await newsDetail(this.$route.params.id, this.page, this.limit); //经过一段时间
        this.news = resp.contentlist;
        this.total= resp.allNum;
        this.isLoading=false;
      },
  },
  watch :{
      "$route.params.id":{
          immediate:true,
          handler(){
              this.setNewsList();
          }
      }
  },
};
</script>

<style></style>
