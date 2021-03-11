<template>
<!-- 我的行程 -->
  <div class="div">
    <div class="head">
      <img src="../../assets/images/my/back.png" alt="" class="left" @click="fn()">
      <span class="myspan1">我的收藏</span>
      <span  class="myspan2">全部城市</span>
      <img src="../../assets/images/my/daosan.png" alt="" class="right">
    </div>
    <div class="box">
    <div class="nav">
    <span :class="{active:currIndex==0}" @click="currIndex=0"><router-link to="/myjourney/didian">地点</router-link></span>
     <span :class="{active:currIndex==1}" @click="currIndex=1"><router-link to="/myjourney/zhuanti">专题</router-link></span>
      <span :class="{active:currIndex==2}" @click="currIndex=2"><router-link to="/myjourney/huodong">活动</router-link></span>
      <span :class="{active:currIndex==3}" @click="currIndex=3"><router-link to="/myjourney/xianlu">线路</router-link></span>
      </div> 
      
    </div>
     <div class="mydiv">
      <router-view></router-view>
      </div>
      
  </div>
  
</template>

<script>
export default {
    data(){
    return{
      currIndex:0
    }
  },
  methods:{
    fn(){
      this.$router.push("/my")
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../components/common/import.scss';
.div{
  width: 100%;
    background-color: #E3E3E3;
    .head{
      width: 100%;
      // background-color: aqua;
      background: linear-gradient(to right, #31978c, #288fb5);
      text-align: center;
      height: toREM(40);
      position:relative;
      .left{
        position: absolute;
        left: toREM(8);
        top:toREM(8) ;
      }
      .myspan1{
        line-height: toREM(40);
        color: white;
      }
      .myspan2{
        position: absolute;
        right:toREM(30) ;
        top:toREM(10) ;
        font-size: toREM(10);
        color:white ;
      }
      .right{
        position: absolute;
        right: toREM(10);
        top: toREM(14);
      }
    }
.box{
    background-color: #ffffff;
    width: 100%;
     padding: toREM(0) toREM(20);  
    .nav{
  width: 100%;
//   background-color:#0876B7;
//   margin-left: 5%;
  height: toREM(40);
  color: white;
//   border-bottom:1px solid #258DC5;
  .active{
//   background-color:#07D614;
    border-bottom:3px solid #0876B7 ;
    
} 
  span{
    float: left;
    font-size: 15px;
    height: toREM(36);
    // display: inline-block;
    text-align: center;
    width:15%;
    line-height: toREM(36);
    color: #A9A9A9;
    // border-bottom: 1px solid #258DC5;
    margin-right: toREM(35);
  }
  a{
    color: #000000;
  }
}

}
.mydiv{
    margin-top:toREM(10) ;
    height: toREM(200);
    background-color: #ffffff;
    border-radius: 20px 20px 0px 0px;
    padding:toREM(20) toREM(10);
}
}
</style>