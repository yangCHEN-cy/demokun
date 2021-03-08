<template>
  <div class="topqiehuan">
    <ul>
      <li>
        <div class="icon">
          <img src="../../assets/homeimg/home1_slices/youji@2x.png" alt="" />
        </div>
        <p>游记</p>
      </li>
     <router-link to="journey"> <li>
        <div class="icon">
          <img
            src="../../assets/homeimg/home1_slices/xingcheng@2x.png"
            alt=""
          />
        </div>
        行程
      </li>
     </router-link>
    <router-link to="hotelsearch">  <li>
        <div class="icon">
          <img src="../../assets/homeimg/home1_slices/feiji@2x.png" alt="" />
        </div>
        酒店
      </li>
    </router-link>
      <li>
        <div class="icon">
          <img src="../../assets/homeimg/home1_slices/huodong@2x.png" alt="" />
        </div>
        活动
      </li>
      <li>
        <div class="icon">
          <img src="../../assets/homeimg/home1_slices/meishi@2x.png" alt="" />
        </div>
        美食
      </li>
      <li>
        <div class="icon">
          <img src="../../assets/homeimg/home1_slices/tuangou@2x.png" alt="" />
        </div>
        团购
      </li>
      <li>
        <div class="icon">
          <img src="../../assets/homeimg/home1_slices/qinzi@2x.png" alt="" />
        </div>
        亲子游
      </li>
      <li>
        <div class="icon">
          <img src="../../assets/homeimg/home1_slices/zhibo@2x.png" alt="" />
        </div>
        直播
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
@import '../../components/common/import.scss';
.topqiehuan {
  width: 100%;
  background-color: gainsboro;
  padding: toREM(15) 0;
  ul {
    width:100%;
    height:toREM(240);
    background-color: white;
    border-radius:toREM(15);
    li {
      float: left;
      width: 25%;
      margin-top:toREM(15);
      text-align: center;
      list-style: none;
      color:black;
    }
    li:nth-of-type(1) .icon {
      width:toREM(75);
      height:toREM(75);
      background: url(../../assets/homeimg/home1_slices/youji.png) 0px 0px;
      background-size: contain;
      margin: 0 auto;
      border-radius: 50%;
      overflow: hidden;
      img {
        width:toREM(25);
        height:toREM(30);
        margin:toREM(16) auto;
      }
    }
    li:nth-of-type(2) .icon {
     width:toREM(75);
      height:toREM(75);
      background: url(../../assets/homeimg/home1_slices/xingcheng.png) 0px 0px;
      background-size: contain;
      margin: 0 auto;
      border-radius: 50%;
      overflow: hidden;
      img {
        width:toREM(25);
        height:toREM(30);
        margin:toREM(16) auto;
      }
    }
    li:nth-of-type(3) .icon {
      width:toREM(75);
      height:toREM(75);
      background: url(../../assets/homeimg/home1_slices/zhibo.png) 0px 0px;
      background-size: contain;
      margin: 0 auto;
      border-radius: 50%;
      overflow: hidden;
      img {
        width:toREM(25);
        height:toREM(30);
        margin:toREM(19) auto;
      }
    }
    li:nth-of-type(4) .icon {
      width:toREM(75);
      height:toREM(75);
      background: url(../../assets/homeimg/home1_slices/youji.png) 0px 0px;
      background-size: contain;
      margin: 0 auto;
      border-radius: 50%;
      overflow: hidden;
      img {
        width:toREM(25);
        height:toREM(30);
        margin:toREM(16) auto;
      }
    }
    li:nth-of-type(5) .icon {
     width:toREM(75);
      height:toREM(75);
      background: url(../../assets/homeimg/home1_slices/meishi.png) 0px 0px;
      background-size: contain;
      margin: 0 auto;
      border-radius: 50%;
      overflow: hidden;
      img {
        width:toREM(25);
        height:toREM(30);
        margin:toREM(13) auto;
      }
    }
    li:nth-of-type(6) .icon {
      width:toREM(75);
      height:toREM(75);
      background: url(../../assets/homeimg/home1_slices/youji.png) 0px 0px;
      background-size: contain;
      margin: 0 auto;
      border-radius: 50%;
      overflow: hidden;
      img {
        width:toREM(25);
        height:toREM(30);
        margin:toREM(16) auto;
      }
    }
    li:nth-of-type(7) .icon {
      width:toREM(75);
      height:toREM(75);
      background: url(../../assets/homeimg/home1_slices/xingcheng.png) 0px 0px;
      background-size: contain;
      margin: 0 auto;
      border-radius: 50%;
      overflow: hidden;
      img {
        width:toREM(25);
        height:toREM(30);
        margin:toREM(16) auto;
      }
    }
    li:nth-of-type(8) .icon {
     width:toREM(75);
      height:toREM(75);
      background: url(../../assets/homeimg/home1_slices/zhibo.png) 0px 0px;
      background-size: contain;
      margin: 0 auto;
      border-radius: 50%;
      overflow: hidden;
      img {
        width:toREM(25);
        height:toREM(30);
        margin:toREM(16) auto;
      }
    }
  }
}
</style>