<template>
  <div class="nowplaying">
    正在热映
    <!-- 声明式 -->
    <!-- <ul>
      <li v-for="data in datalist" :key="data" @click="toDetal(data)">
        {{ data }}
      </li>
    </ul> -->
    <!-- 编程式 -->
    <!-- <ul>
      <router-link
        v-for="data in datalist"
        :key="data"
        :to="`/detail/` + data"
        tag="li"
      >
        {{ data }}
      </router-link>
    </ul> -->
    <!-- 根据name -->
    <!-- <ul>
      <router-link
        v-for="data in datalist"
        :key="data"
        :to="{
          name: 'detail',
          params: { id: data },
        }"
        tag="li"
      >
        {{ data }}
      </router-link>
    </ul> -->

    <!-- <ul>
      <router-link
        v-for="data in datalist"
        :key="data"
        :to="`/detail/` + data + '?title=文章'"
        tag="li"
      >
        {{ data }}
      </router-link>
    </ul> -->

    <ul>
      <router-link
        v-for="data in datalist"
        :key="data"
        :to="{
          name: 'detail',
          params: { id: data },
          query: { title: '文章二' },
        }"
        tag="li"
      >
        {{ data }}
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datalist: ["111", "222", "333"],
    };
  },
  methods: {
    toDetal(id) {
      // console.log(this);
      // 组件的$router上面提供了很多的跳转方法。把这些跳转的方法称之为编程式跳转
      // this.$router.push("/center");
      // alert(id);
      this.$router.push(`/detail/${id}`);
    },
  },
};
</script>

<style></style>
