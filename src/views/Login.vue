<template>
  <div>
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      setTimeout(() => {
        //前端登录成功后会获取后端传递来的token令牌
        localStorage.setItem(
          "token",
          "adljalkdjasljdsal.saldjlkajdal.ljaldkajdl"
        );
        //跳转到个人中心里面去
        this.$router.replace("/center");
      }, 1000);
    },
  },
};
</script>

<style>
</style>