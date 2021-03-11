<template>
  <div>
    <div class="box">
      <!-- <ul> -->
      <!-- <li class="myli" v-for="(item,index) in myyj" :key="index"> -->
      <!-- <img src="" alt="" />
     <div class="swiper-container">
 
</div> -->
      <ul>
        <li v-for="(item,index) in arr" :key="index">
          <div class="div">
            <div class="mytop">
              <img :src="require('../../assets/images/my/'+item.touxiangimg)" alt="" />
              <span class="name">{{item.name}}</span>
              <span class="left">{{item.time}}</span>
              <button class="btn">关注</button>
            </div>
            <van-swipe @change="onChange">
              <van-swipe-item
                > <img :src="require('../../assets/images/my/'+item.img1)" alt="" /></van-swipe-item>
              <van-swipe-item> <img :src="require('../../assets/images/my/'+item.img2)" alt="" /></van-swipe-item>
              <van-swipe-item> <img :src="require('../../assets/images/my/'+item.img3)" alt="" /></van-swipe-item>
              <van-swipe-item> <img :src="require('../../assets/images/my/'+item.img4)" alt="" /></van-swipe-item>
            </van-swipe>
            <div class="cen">
              <h4>{{item.title}}</h4>
              <div class="mytil">
                <span>{{item.txt1}}</span>
                <span>{{item.tx2}}</span>
                <span>{{item.txt3}}</span>
              </div>
            
            </div >
              <div class="boon">
                <span> <img :src="require('../../assets/images/my/'+item.myimages1)" alt="" /></span>
                <span> <img :src="require('../../assets/images/my/'+item.myimages2)" alt="" /></span>
                <span> <img :src="require('../../assets/images/my/'+item.myimages3)" alt="" /></span>
                </div>
          </div>
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
  data(){
    return{
      arr:[],
    
    }
  },
  mounted(){
    this.$axios.get("../../static/data/my.json").then((res) => {
      console.log(res);
      this.arr = res.data.myyj;
      console.log(this.arr);
  }, 
  )
  },
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
  li{
     background-color: white;
     height: toREM(500);
      margin-bottom: toREM(50);
  }
  .div {
    height: toREM(400);
    margin-bottom: toREM(100);
    .mytop {
      height: toREM(70);
      position: relative;
      img {
        height: toREM(35);
        margin-left: toREM(10);
        margin-top: toREM(8);
      }
      .name {
        position: absolute;
        top: toREM(30);
        font-weight: bold;
        left: toREM(50);
      }
      .left {
        position: absolute;
        font-size: toREM(11);
        top: toREM(50);
        left: toREM(50);
      }
      .btn {
        position: absolute;
        right: toREM(10);
        top: toREM(30);
        background-color: #ffffff;
        border: 2px solid #3395c9;
        outline: none;
        color: #3395c9;
        padding: 3px 20px;
        border-radius: 50px;
        font-size: toREM(12);
      }
    }
    .cen{
      padding: 10px;
       h4{
          line-height: toREM(50);
        }
      .mytil{
        width:toREM(240) ;
        span{
          display:inline-block;
          background-color: #B0D6EA;
          padding: 1px 5px;
          color: #7C7D7D;
          border-radius: 20px;
          margin-right: toREM(8);
          margin-bottom: toREM(10);
        }
      }
    }
    .boon{
      // background-color: navy;
      width:toREM(200) ;
      height: toREM(50);
      margin-left:toREM(200) ;
      margin-top: toREM(50);
      img{
        height: toREM(28);
      }
       span{
         float: left;
         margin-right:toREM(20) ;
       }
    }
  }
}
</style>