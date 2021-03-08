<template>
  <div class="swiper">
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img
          src="../../assets/homeimg/home1_slices/utah-5641320_1920.png"
          alt=""
        />
      </mt-swipe-item>
      <mt-swipe-item>
        <img
          src="../../assets/homeimg/home1_slices/utah-5641320_1920.png"
          alt=""
        />
      </mt-swipe-item>
      <mt-swipe-item>
        <img
          src="../../assets/homeimg/home1_slices/utah-5641320_1920.png"
          alt=""
        />
      </mt-swipe-item>
       <mt-swipe-item>
        <img
          src="../../assets/homeimg/home1_slices/utah-5641320_1920.png"
          alt=""
        />
      </mt-swipe-item>
    </mt-swipe>
    <div class="tianqi">
      <ul>
        <li>
          <span></span>
           <a href="#">马尔代夫</a>
        </li>
       <li>
          <span></span>
           <a href="#">10.15</a>
        </li>
       <li>
          <span></span>
           <a href="#">明天</a>
        </li>
       <li>
          <span></span>
           <a href="#">30°</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {};
</script>

<style scoped lang="scss">
@import '../../components/common/import.scss';
.swiper {
  width:100%;
  // margin-top: toREM(50);
  .mint-swipe{
    height:toREM(164);
    position: relative;
    .mint-swipe-items-wrap{
      .mint-swipe-item{
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .tianqi{
    position: absolute;
    top: 0;
    left: 0;
    ul{
      width:toREM(120);
      padding:toREM(7);
      background-color: rgba(27, 65,75, .7);
      li{
        height:toREM(37.5);
        span{
          display: inline-block;
          width:toREM(45);
          height:toREM(40);
          background-color:skyblue;
          position: absolute;
        }
        a{
          text-decoration: none;
          display: inline-block;
           height:toREM(35);
           line-height:toREM(35);
          color:white;
          margin-left:toREM(45);
          margin-top:toREM(7);
        }
      }
      li:nth-of-type(1) span{
        background:url(../../assets/homeimg/home1_slices/address@2x.png) 6px 6px  no-repeat;
        background-size:toREM(23) toREM(24);
      }
       li:nth-of-type(2) span{
        background:url(../../assets/homeimg/home1_slices/calendar@2x.png) 6px 6px  no-repeat;
        background-size:toREM(23) toREM(24);
      }
       li:nth-of-type(3) span{
        background:url(../../assets/homeimg/home1_slices/weaher@2x.png) 3px 8px  no-repeat;
        background-size:toREM(28) toREM(24);
      }
        li:nth-of-type(4) span{
        background:url(../../assets/homeimg/home1_slices/temperature@2x.png) 5px 8px  no-repeat;
         background-size:toREM(23) toREM(24);
      }
    }
  }
}
</style>