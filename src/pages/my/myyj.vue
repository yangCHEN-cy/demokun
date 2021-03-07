<template>
  <div>
    <div class="box">
      <!-- <ul> -->
      <!-- <li class="myli" v-for="(item,index) in myyj" :key="index"> -->
      <!-- <img src="" alt="" />
     <div class="swiper-container">
 
</div> -->
      <ul>
        <li>
            <img src="" alt="">
          <van-swipe @change="onChange">
            <van-swipe-item><img src="../../assets/images/my/lbu1.png"></van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
          </van-swipe>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
// import "swiper/swiper-bundle.css";
import { Toast } from "vant";
export default {
  methods: {
    onChange(index) {
      // Toast("当前 Swipe 索引：" + index);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../components/common/import.scss";
.van-swipe {
  height: toREM(200);
  // background-size: 100% 1005;
  width: 100%;
  img {
    height: toREM(200);
    width: 100%;
  }
}
.box {
  // margin-top: 20px;
  height: toREM(500);
  background-color: white;
}
</style>