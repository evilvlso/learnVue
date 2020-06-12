<template>
  <div v-if="total>0" class="pager">
    <a :class="{
      disabled: page===1,
    }" class="pager-item"
    @click.prevent="changePage(1)">首页</a>
    <a :class="{
      disabled: page===1,
    }" class="pager-item"
    @click.prevent="changePage(page-1)">上一页</a>

    <a v-for="item in pages" :key="item"  class="pager-item"
    @click.prevent="changePage(item)" 
    :class="{
      active: page===item
    }"
    href="">{{item}}</a>

    <a :class="{
      disabled: page===pageCount,
    }" class="pager-item"
    @click.prevent="changePage(page+1)">下一页</a>

    <a :class="{
      disabled: page===pageCount,
    }" class="pager-item"
    @click.prevent="changePage(pageCount)">尾页</a>

    <span class="pager-text">
      <i>{{page}}</i>
      /
      <i>{{pageCount}}</i>
    </span>

  </div>
</template>

<script>
export default {
  props : {
    page:{
      type:Number,
      require :true,
      default :1,},
    paneNumber :  //奇数
      {type:Number,
      require:true,
      default:9},
    total :{
      type:Number,
      require:true,
      },
    limit :
      {type:Number,
      require:true,
      default:10},
  },
  data(){
    return {
    }
  },
  methods : {
    changePage(page){
      if(page<1||page > this.pageCount){return } 
      this.$emit("switchPage",page);
    },
  },
  computed :{
  pageCount(){
    return Math.ceil(this.total/this.limit);
    },
    pages(){
        let dis = (this.paneNumber-1)/2;
        let minpage=this.page-dis;
        // let maxpage=this.page+dis;
        let maxpage=minpage+this.paneNumber-1;
        let array=[];
        if(minpage<1){minpage=1}
        if(maxpage>this.pageCount){maxpage=this.pageCount}
        for(;minpage<=maxpage;minpage++){array.push(minpage)}
        return array
    },
  },
}
</script>

<style scoped>
.pager {
  text-align: center;
  margin: 20px 0;
}

.pager .pager-item {
  display: inline-block;
  padding: 5px 7px;
  border: 1px solid #ccc;
  margin: 8px;
  cursor: pointer;
  color: rgb(96, 96, 224);
}

.pager .pager-item.disabled {
  color: #ccc;
  cursor: not-allowed;
}

.pager .pager-item.active {
  color: rgb(167, 47, 236);
  border: none;
  cursor: auto;
}
</style>
