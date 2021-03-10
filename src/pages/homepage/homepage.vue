<template>
  <div class="box">
    <myhead value="this.$store.state.valhotellist">
       <template v-slot:leftimg>
        <img
          src="../../assets/homeimg/home1_slices/address@2x.png"
          class="img left"
          alt=""
        />
      </template>
      <template v-slot:rightimg>
        <img
          src="../../assets/images/hotelsearch/hanbao.png"
          class="img right"
          alt=""
        />
      </template>
    </myhead>
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

<style scoped lang="scss">
@import "../../components/common/import.scss";
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 100%;
  background-color: gainsboro;
  margin-top: toREM(50);

}
.left{
  width: toREM(30);
  height: toREM(30);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left:toREM(15);
}
.right{
  width: toREM(25);
  height: toREM(25);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right:toREM(15);
}
</style>