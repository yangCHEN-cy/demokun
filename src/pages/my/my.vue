<template>
  <div class="box">
      <div class="bjt">
          <div class="myser">
               <img src="../../assets/images/my/touxiang.png" alt="">
               <div class="right"><a href="#">编辑资料</a></div>
               <p class="p1">user.name<span></span></p>
               <p class="p2">介绍自己更容易获得关注哦</p>
               <ul>
                   <li>
                       <span>0</span>
                       <p>国家</p>
                   </li>
                   <li>
                       <span>1</span>
                       <p>关注</p>
                   </li>
                   <li>
                       <span>0</span>
                       <p>粉丝</p>
                   </li>
                   <li>
                       <span>0</span>
                       <p>获赞与收藏</p>
                   </li>
               </ul>
          </div>
      </div>
      <ul class="search">
         <li>  
            <router-link to="/myorder"><img src="../../assets/images/my/my1.png" alt=""><p>我的订单</p></router-link>
         </li>
         <li>  
            <router-link to="/myjourney"><img src="../../assets/images/my/my2.png" alt=""><p>我的行程</p></router-link>
         </li>
         <li>  
            <router-link to="/set"><img src="../../assets/images/my/my3.png" alt=""><p>我的设置</p></router-link>
         </li>
         <li>  
            <a href="#"><img src="../../assets/images/my/my4.png" alt=""><p>我的钱包</p></a>
         </li>
         <li>  
            <a href="#"><img src="../../assets/images/my/my5.png" alt=""><p>客服中心</p></a>
         </li>
      </ul>
    <div id="mybox">
    <div class="nav">
    <span :class="{active:currIndex==0}" @click="currIndex=0"><router-link to="/my/myyj">我的游记</router-link></span>
     <span :class="{active:currIndex==1}" @click="currIndex=1"><router-link to="/my/mysp">我的视频</router-link></span>
      <span :class="{active:currIndex==2}" @click="currIndex=2"><router-link to="/my/mywd">我的问答</router-link></span>
      </div>
      <div class="dibu">
      <div class="bon">
          <img src="../../assets/images/my/dingwei.png" alt="">
          <a href="#" class="mya1">打开定位解锁游趣更多功能</a>
          <a href="#" class="mya2">立即打开></a>
      </div>
      <router-view></router-view>
      </div>
    </div>
    <myfoot></myfoot>
  </div>
</template>

<script>
// import Vuex from 'vuex'
// import Vant from 'vant';
// import MintUI from 'mint-ui'
// Vue.use(Vant);
// Vue.use(Vuex)
// Vue.use(MintUI)
import myfoot from '../../components/footer/tabbar'
export default {
    components:{myfoot},
data(){
    return{
      currIndex:0
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../components/common/import.scss';
// toREM()

a{
    text-decoration: none;
}
.box{
    background-color: #E0E0E0;
    // height: 100rem;
    height:toREM(1000) ;
    .bjt{
    // height: 20rem;
    height:toREM(300);
    width: 100%;
    background: url(../../assets/images/my/bjt.png) no-repeat;
    background-size: 100% 100%;
    position: relative;
    .myser{
        position: absolute;
        // height: 8rem;
        height:toREM(100) ;
        width: 100%;
        background-color: white;
        border-radius: 10px 10px 0px 0px;
        bottom: 0px;
        text-align: center;
         img{
             width: toREM(50);
        position: absolute;
        top: toREM(-30);
        left: toREM(150);   
    }
        .right{
            width: toREM(60);
            height: toREM(20);
            font-size: toREM(10);
            line-height: toREM(20);
            text-align: center;
            border: 1px solid #449DCD;
            border-radius: 10rem;
            position: absolute;
            right: toREM(20);
            top: toREM(10);
            a{
                color: #509FCE;
            }
        }
         .p1{
           margin-top: toREM(22);
           font-size: toREM(14);
           span{
               display:inline-block;
               height:toREM(10);
               width: toREM(10);
               background: url(../../assets/images/my/name.png);
               background-size: 100% 100%;
               margin-top: -10px;   
               
           }
       }
       .p2{
           font-size: toREM(1);
           line-height: toREM(10);
       }
       ul{
           margin-left: toREM(20);
           li{
               float: left;
               margin-left: toREM(30);
               list-style: none;
               font-weight: bold;
           }
       }
    }
}
    .search{
        margin-top: toREM(10);
        height: toREM(50);
        width: 100%;
        background-color: white;
        li{
            float: left;
            text-align: center;
            list-style: none;
          margin-left: toREM(20);
          margin-top: toREM(10);
           img{
               width: toREM(15);
               height: toREM(15);
           }
           p{
               font-size: toREM(1);
               color:#278EC5 ;
           }
        }
    }
    .active{
//   background-color:#07D614;
    border-bottom:3px solid #0876B7 ;
  a{
   color: white;
  }
  
}
#mybox{
    padding: 0px 10px;
    .nav{
  width: 100%;
//   margin-left: 5%;
  height: toREM(50);
  color: white;
  border-bottom:1px solid #258DC5;
  span{
    float: left;
    font-size: 20px;
    height: toREM(48);
    // display: inline-block;
    text-align: center;
    width:33.33%;
    line-height: toREM(50);
    color: #A9A9A9;
  }
  a{
    color: #000000;
  }
}
.dibu{
    width: 100%;
    height:toREM(100) ;
    // padding: 0px 12px;
    // background-color: #fff;
.bon{
    
    width: 100%;
    height:toREM(20);
    float: left;
    background-color: #E0E0E0;
    // background-color: #000000;
    img{
        height:toREM(10) ;
    }
    .mya1{
        font-size:toREM(10) ;
        color: #626262;
    }
    .mya2{
        font-size:toREM(10) ;
        float: right;
        color: #2798D6;
    }
}
}
}
}

</style>