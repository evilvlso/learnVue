import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

var router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name:"Home",
      component: () => import("@/components/views/Home"),
    },
    {
      path: "/login",
      name:"Login",
      component: () => import("@/components/views/Login"),
    },
    {
      path: "/reg",
      name:"Reg",
      component: () => import("@/components/views/Reg"),
    },
    {
      path: "/channel/:id",
      name:"ChannelNews",
      component: () => import("@/components/views/ChannelNews"),
    },
    {
      path: "*",
      component: () => import("@/components/views/NotFound"),
    },
  ],
});

export default router;
