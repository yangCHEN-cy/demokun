<template>
  <div class="box">
    <headernormal mytitle="行程"></headernormal>
    <div class="banner">
      <!-- banner图片 -->
      <div class="banner_hua">
        <img src="../../assets/images/journey/banner.png" alt="" />
      </div>
      <div class="banner_info">
          <div class="banner_h1">快速规划出行</div>
          <div class="banner_h2"><router-link to="addjourney">+添加行程</router-link></div>
          <div class="banner_tips">
            <p>未决定日期，可加入我的心愿池</p>
          </div>
      </div>
    </div>
    <boring></boring>
    <guess></guess>
  </div>
</template>

<script>
import boring from './boring'
import guess from './guess'
import headernormal from '../../components/header/header-normal'
export default {
    components:{
        boring,
        guess,
        headernormal
    },
}
</script>

<style scoped lang='scss'>
@import '../../components/common/import.scss';
.box{
  background-color: #e7e7e7;
}
.banner{
  position: relative;
  overflow: hidden;
  .banner_hua{
    margin-left: toREM(-8);
    img{
      width: 100%;
    }
  }
  .banner_info{
    position: absolute;
    top: 0;
    left: 0;
    width: toREM(375);
    z-index: 50;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.1);
    margin-top: toREM(20);
    text-align: center;
    .banner_h1{
      font-size: toREM(24);
    }
    .banner_h2{ 
      width: toREM(100);
      line-height: toREM(30);
      margin-top: toREM(10);
      border-radius: toREM(39);
      padding: 2px 6px;
      margin-left: toREM(135);
      background: #278fbb;
      a{
        color: #fff;
      }
    } 
    .banner_tips{
      margin-top: toREM(10);
      margin-left: toREM(-15);
    p{
      display: inline-block;
      width: toREM(400);
      margin: 0 auto;
      font-size: 16px;
      position: relative;
      } 
    }
  }
}
</style>