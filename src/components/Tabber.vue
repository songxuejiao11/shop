<template>
  <nav>
    <ul>
      <!-- <router-link to="/films" tag="li" active-class="active"
          >电影</router-link
        >
        <router-link to="/cinema" tag="li" active-class="active"
          >影院</router-link
        >
        <router-link to="/center" tag="li" active-class="active"
          >个人</router-link
        > -->

      <!-- router-link 声名式导航 通过属性to进行导航 -->
      <router-link
        v-for="nav in navlist"
        :key="nav.id"
        :to="nav.path"
        tag="li"
        active-class="active"
        >{{ nav.title }}</router-link
      >
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navlist: [
        { id: 1, title: "电影", path: "/films" },
        { id: 2, title: "影院", path: "/cinema" },
        { id: 3, title: "个人", path: "/center" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.active {
  color: pink;
}
nav {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 30px;
  ul {
    display: flex;
    text-align: center;
    li {
      flex: 1;
    }
  }
}
</style>
