<template>
  <div class="box">
    <div class="banner">
      <!-- banner图片 -->
      <div class="banner_hua">
        <img src="../../assets/images/journey/banner.png" alt="" />
      </div>
      <div class="banner_info">
          <div class="banner_h1">快速规划出行</div>
          <div class="banner_h2">+添加行程</div>
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
import boring from './boring'
import guess from './guess'
export default {
    components:{
        boring,
        guess
    }
}
</script>

<style scoped lang='less'>
.box{
  height: 1300px;
  background-color: #e7e7e7;
}
.banner{
  position: relative;
  width: 100%;
  overflow: hidden;
  .banner_hua{
    margin-left: -8px;
    img{
      width: 100%
    }
  }
  .banner_info{
    position: absolute;
    top: 0;
    left: 0;
    width: 375px;
    z-index: 50;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    .banner_h1{
      font-size: 24px;
    }
    .banner_h2{ 
      width: 100px;
      line-height: 30px;
      margin-top: 10px;
      border-radius: 39px;
      padding: 2px 6px;
      margin-left: 125px;
      background: #278fbb;
    } 
    .banner_tips{
      margin-top: 10px;
    p{
      display: inline-block;
      width: 400px;
      margin: 0 auto;
      font-size: 16px;
      position: relative;
      } 
    }
  }
}
</style>