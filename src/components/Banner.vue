<template>
    <div class="banner-container" @mouseenter="autoStop()" @mouseout="autoStart">
        <ul class="images" :style="{
    width: banners.length * 100 +'%',
    marginLeft : -index*100+'%',

    }">
            <li v-for="(item,i) in banners" :key="i">
                <a href="">
                    <img :src="item.url" alt="">
                </a>
            </li>

        </ul>
        <ul class="dots">
            <li v-for="(item,i) in banners" :key="i" :class="{
        active: i===index,
        }"
                @click="index=i"></li>

        </ul>
    </div>
</template>


<script scoped>
    export default {
        props: {
            banners: {
                type: Array,
                required: true,
            },
            duration:{
                type: Number,
                required:true,
                default: 1000,
            },
        },
        created (){this.autoStart()},
        destroyed (){this.autoStop()},
        data() {
            return {
                timer :null,
                index: 0,
            }
        },
        methods: {
            autoStart() {
                if (this.timer) {
                    return;
                }
                this.timer = setInterval(() => {
                    this.index = (this.index + 1) % this.banners.length;
                }, this.duration)
            },
            autoStop() {
                clearTimeout(this.timer);
                this.timer=null;
            },
        },
    };

</script>


<style scoped>
   .banner-container {
  height: 350px;
  position: relative;
  overflow: hidden;
}
.banner-container li {
  display: block;
  width: 1080px;
  height: 100%;
  float: left;
}
.images {
  height: 100%;
  transition: 0.5s;
}
.banner-container img{
    width: 1080px;
    height: 100%;
}
.dots {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
}
.dots li {
  width: 10px;
  cursor: pointer;
  height: 10px;
  margin: 0 3px;
  border-radius: 50%;
  border: 1px solid;
  color: #fff;
}
.dots li.active {
  background: #fff;
}
</style>