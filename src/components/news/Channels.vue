<template>
  <div class="news-types" v-show="showChaneels.length > 0">
    <div
      v-for="item in showChaneels"
      :key="item.channelId"
      class="item"
      @click="switchActive(item.channelId)"
      :class="{
        active: isActive === item.channelId,
      }"
    >
      <span class="name">{{ item.name }}</span>
    </div>
    <div @click.prevent="isCollapse = !isCollapse" class="item">
      <a>{{ isCollapse ? "展开" : "收起" }}</a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  // 使用数据库，换成watch
  // created() {
  //   getNews().then((resp) => {
  //     this.da = resp;
  //     this.switchActive(resp[0].channelId);
  //   });
  // },
  watch: {
    data: {
      immediate: true,
      handler() {
        if (this.data.length > 0) {
          this.switchActive(this.data[0].channelId);
        }
      },
    },
  },
  computed: {
    ...mapState("newsChannels", ["data"]),

    showChaneels() {
      if (this.isCollapse) {
        // 折叠状态
        return this.data.slice(0, 7); //折叠状态只需要显示8个数据
      } else {
        // 展开状态
        return this.data;
      }
    },
  },
  methods: {
    switchActive(channelid) {
      this.isActive = channelid;
      this.$emit("changeid", this.isActive);
    },
  },
  data() {
    return {
      // channels: [],  用数据库中的data
      isCollapse: true,
      isActive: 0,
    };
  },
};
</script>

<style scoped>
.news-types {
  margin: 30px 0;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  padding-bottom: 15px;
}
.item {
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 15px;
  margin: 7px 15px 7px 0;
  cursor: pointer;
  position: relative;
}
.item:hover {
  background: #ccc;
}
.item.active {
  background: #000;
  color: #fff;
}
.news-types a {
  align-self: flex-end;
  margin-bottom: 20px;
  color: #409eff;
}
</style>
