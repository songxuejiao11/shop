import Vue from "vue";
import App from "./App.vue";
import router from "./router"; //引入index.js可以省略不写
import store from "./store";

//es-module里面的导入导出规范， import导入 export导出

Vue.config.productionTip = false;

new Vue({
  router, //为了让路由组件可以访问到this.$route （提供属性） 和 this.$router（提供方法）相关的api属性或方法
  store,
  //钩子函数 h传参
  render: (h) => h(App), //需要接收一个组件，然后内部就会将组件渲染到指定的app节点上
}).$mount("#app"); //挂载点
