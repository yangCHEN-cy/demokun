// <<<<<<< HEAD
<template>
  <div class="box">
    <headernormal mytitle="添加行程"></headernormal>
    <div class="numb">
      <div class="title">
        <img src="../../assets/images/journey/love.png" alt="" />猜你想去
      </div>
      <ul>
        <router-link to="journeylist">
          <cityadd myname="北京">
            <template #myimg>
              <img src="../../assets/images/journey/beijing.png" alt="" />
            </template>
          </cityadd>
          <cityadd myname="上海">
            <template #myimg>
              <img src="../../assets/images/journey/shanghai.png" alt="" />
            </template>
          </cityadd>
        </router-link>
      </ul>
      <div>
         <div class="title">
        <img src="../../assets/images/journey/map.png" alt="" />热门城市
      </div>
      <router-link to="journeylist">
        <hotcity mycity_h2="世界之窗" mycity_h3="世界之窗亲子探索">
          <template #myimg>
            <img src="../../assets/images/journey/shenzhen.png" alt="" />
          </template>
        </hotcity>
        <hotcity mycity_h2="惠州" mycity_h3="温泉度假西湖游船">
          <template #myimg>
            <img src="../../assets/images/journey/huizhou.png" alt="" />
          </template>
        </hotcity>
        <hotcity mycity_h2="桂林" mycity_h3="漓江游船油墨山水">
          <template #myimg>
            <img src="../../assets/images/journey/guilin.png" alt="" />
          </template>
        </hotcity>
        <hotcity mycity_h2="三亚" mycity_h3="蜈支洲岛潜水圣地">
          <template #myimg>
            <img src="../../assets/images/journey/sanya.png" alt="" />
          </template>
        </hotcity>
        <hotcity mycity_h2="厦门" mycity_h3="漓江夜游厦门|美食">
          <template #myimg>
            <img src="../../assets/images/journey/xiamen.png" alt="" />
          </template>
        </hotcity>
        <hotcity mycity_h2="清远" mycity_h3="峡谷漂流峡谷豪迈">
          <template #myimg>
            <img src="../../assets/images/journey/qingyuan.png" alt="" />
          </template>
        </hotcity>
      </router-link>
      </div>
      <establish></establish>
    </div>
  </div>
</template>

<script>
import hotcity from "./hotcity";
import establish from "./establish";
import cityadd from "./cityadd";
import headernormal from "../../components/header/header-normal";

export default {
  components: {
    hotcity,
    establish,
    headernormal,
    cityadd,
  },
  methods:{
    fn(){
        this.$router.push({name:'journeyinfor',params:{aaa:'111'}})
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log("sdad")
    // 获取本地存储中是否有用户名或密码 或token
    let uname =window.sessionStorage.getItem("userName");
    // let upwd =window.sessionStorage.getItem("mPwd");
    console.log(uname)
    if(uname){
      console.log("已经登录了");
      next();
    }else{
       console.log("未登录");
       next({path:'/register'});
    }
  }
};
</script>

<style scoped lang='scss'>
@import "../../components/common/import.scss";
.box {
  // height: toREM(1300);
  width: 100vw;
  overflow: hidden;
  background-color: #e7e7e7;
  .numb {
    height: toREM(625);
    border-radius: toREM(10);
    border: 1px solid #fff;
    background: #fff;
    margin-top: toREM(15);
    position: relative;
    .title {
      margin-top: toREM(15);
      text-align: left;
      margin-left: toREM(10);
      img {
        width: toREM(20);
        vertical-align: middle;
        margin-right: toREM(5);
      }
    }
    ul {
      height: toREM(128);
      border-bottom: 1px solid #eaeaea;
      margin: toREM(0) toREM(-10);
      margin-top: toREM(15);
      // li {
      //   width: 27%;
      //   float: left;
      //   list-style: none;
      //   padding-left: toREM(17);
      //   position: relative;
      //   .whatgo {
      //     margin-right: 0px;
      //     img {
      //       width:  toREM(112);
      //     }
      //   }
      //   .city {
      //     position: absolute;
      //     top: 0;
      //     left: 0;
      //     z-index: 50;
      //     color: #fff;
      //     margin-top:  toREM(20);
      //     .city_h1 {
      //       margin: -12px 105px;
      //       img {
      //         width:  toREM(15);
      //       }
      //     }
      //     .city_h2 {
      //       padding: 70px 25px;
      //       text-align: left;
      //     }
      //   }
      // }
    }
  }
}
// =======

// >>>>>>> a83de02d4d6edf054593c8ab2534aa83cfd7a6ad
</style>