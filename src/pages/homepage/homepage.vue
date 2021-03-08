<template>
  <div class="box">
    <!-- <myhead></myhead> -->
    <homeswiper></homeswiper>
    <topqiehuan></topqiehuan>
    <banner></banner>
    <myfooter></myfooter>
  </div>
</template>

<script>
import homeswiper from "../homepage/swiper.vue";
import topqiehuan from "../homepage/topqiehuan.vue";
import banner from "./banner.vue";
import myfooter from '../../components/footer/tabbar'
import myhead from '../../components/header/header-input'
export default {
  components: {
    homeswiper,
    topqiehuan,
    banner,
    myfooter,
    myhead
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 100%;
  background-color: gainsboro;
  overflow: hidden;
}
</style>