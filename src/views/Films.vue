<template>
  <div class="flims">
    <Swiper>
      <div
        class="swiper-slide"
        v-for="banner in banners"
        :key="banner.bannerId"
      >
        <img :src="banner.imgUrl" alt="" />
      </div>
    </Swiper>

    <div>导航</div>

    <router-view></router-view>
  </div>
</template>

<script>
// 引入Swiper组件
import Swiper from "@/components/Swiper";
import axios from "axios";
import instance from "@/utils/http";
// import { inspect } from "util";
export default {
  components: {
    Swiper, //注册组件Swiper
  },
  created() {
    //请求数据
    instance
      .get("/gateway?type=2&cityId=310100&k=3419992", {
        headers: {
          "X-Host": "mall.cfg.common-banner",
        },
      })
      .then((res) => {
        console.log(res);
        this.banners = res.data.data;
        //必须要等到页面中出现了swiper-slide结构后，我们才能进行实例化的操作
        //人生*工作的结果 = 思维方式 * 热情 * 能力  + 40*60  -8100  +2400
        // this.$nextTick(() => {
        //   new Swip(".swiper-container");
        // });
      });
  },
};
</script>

<style lang="scss" scoped>
.swiper-slide {
  img {
    width: 100%;
  }
}
</style>
