<template>
  <div>详情页......{{ $route.params.id }}</div>
</template>

<script>
export default {
  props: ["id"],
  created() {
    //需要获取nowplaying这边传递来的每个电影的id /detail/：id
    // console.log(this.$route.params.id); //拿到动态id
    // console.log(this.$route.query.title);
    console.log(this.id);
  },
};
</script>

<style></style>
