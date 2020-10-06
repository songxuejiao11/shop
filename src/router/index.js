import Vue from "vue";
import VueRouter from "vue-router";

//这行代码如果注释掉，this上面就没有$router和$toute了
Vue.use(VueRouter); //让Vue使用VueRouter  内部的原理就是使用install实现的。

import Films from "@/views/Films";
// import Cinema from "@/views/Cinema";
import Center from "@/views/Center";
import Nowplaying from "@/views/films/Nowplaying";
import Cominasoon from "@/views/films/Cominasoon";
import Error from "@/views/Error";
import Detail from "@/views/Detail";
const routes = [
  {
    path: "/films",
    component: Films,
    // 二级路由
    children: [
      {
        path: "/films/nowplaying",
        component: Nowplaying,
      },
      {
        path: "/films/cominasoon",
        component: Cominasoon,
      },
      {
        path: "",
        redirect: "/films/nowplaying", //进行一级路由内部的重定向操作
      },
    ],
  },
  {
    path: "/cinema",
    component: () => import("@/views/Cinema"),
  },
  {
    path: "/center",
    component: Center,
  },
  {
    name: "detail",
    path: "/detail/:id", //路由动态传参
    component: Detail,
    props: true,
  },
  {
    path: "/",
    redirect: "/films", //重定向
  },
  {
    path: "*",
    component: Error, //前面的路由有没有匹配上，需要显示error页面
  },
];

const router = new VueRouter({
  mode: "history", //默认是hash模式
  routes,
});

export default router;
