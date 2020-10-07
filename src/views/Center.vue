<template>
  <div>个人中心</div>
</template>

<script>
export default {
  //进入center之前
  // beforeRouteEnter(to, from, next) {
  //   console.log("center---beforeRouteEnrer");
  //   next();
  // },
  //从Center离开的时候
  // beforeRouteLeave(to, from, next) {
  //   console.log("center---beforeRouteLeave");
  //   next();
  // },

  //局部拦截
  beforeRouteEnter(to, form, next) {
    if (localStorage.getItem("token")) {
      next();
    } else {
      next("/login");
    }
  },
};
</script>

<style></style>
