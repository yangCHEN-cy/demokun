<template>
  <div class="box">
    <homeswiper></homeswiper>
    <topqiehuan></topqiehuan>
    <banner></banner>
  </div>
</template>

<script>
import homeswiper from "../homepage/swiper.vue";
import topqiehuan from "../homepage/topqiehuan.vue";
import banner from "./banner.vue";
export default {
  components: {
    homeswiper,
    topqiehuan,
    banner,
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