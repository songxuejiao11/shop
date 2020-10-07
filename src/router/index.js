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
    // beforeEnter(to, from, next) {
    //   console.log("进入Center了哦...");
    //   next();
    // },
  },
  {
    name: "detail",
    path: "/detail/:id", //路由动态传参
    component: Detail,
    props: true,
  },
  {
    path: "/login",
    component: () => import("@views/Login"),
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

//全局路由守卫
//全局路由的前置守卫
// to:Route即将进入的目标
// from:Route当前导航正要离开的路由
// router.beforeEach((to, from, next) => {
//   if (from.path === "/cinema") {
//     console.log("从影院这边过来的哦。。。");
//   }
//   next(); //一定需要调用next
// });

// 全局的后置路由守卫
// router.afterEach((to, from) => {
//   if (to.path === "/center") {
//     console.log("进入center了哦...");
//   }
// });

//判断每次路由切换的时候，是否有token令牌 全局拦截
// router.beforeEach((to, from, next) => {
//   if (to.path === "/center") {
//     if (localStorage.getItem("token")) {
//       //说明用户已经登录了
//       next();
//     } else {
//       next("/login"); //如果用户没有登录直接跳转到登录界面进行用户登录
//     }
//   } else {
//     next();
//   }
// });

export default router;
