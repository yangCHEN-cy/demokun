<template>
  <div class="hotelbox">
    <div id="hotel">
      <link rel="stylesheet" href="../less/vw+rem.less" />
      <img
        class="bannerimg"
        src="../../assets/images/hotelsearch/banner.png"
        alt=""
      />
      <i class="icon back"></i>
      <i class="icon total"></i>
      <i class="icon hanbao"></i>
    </div>
    <div class="hotelsearchbox">
      <van-tabs id="vantabs">
        <van-tab title="国内">
          <div class="inputbox" v-for="(item,index) in adress" :key="index">
            <i class="icon search"></i>
          <input type="text" name="" :value="item.shangh" id="input">
            <i class="icon dinwei"></i>
           
          </div>
          <div class=" datebox">
          </div>
        </van-tab>
        <van-tab title="国际" id="border" ></van-tab>
        <van-tab title="民宿"></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex"; 
export default {
  mounted() {
 
  },
  data() {
    return {
    }
  },
  methods: {
    
  },
  computed:{
    ...mapState(["adress"]),

  }
};
</script>

<style scoped lang='scss'>
#app .hotelbox {
  position: relative;
  
}
#app .hotelbox > #hotel {
  position: relative;
  height: 100vh;
  background: #e7e7e7;
  .bannerimg {
    width: 100%;
  }
  .icon {
    position: absolute;

    display: inline-block;
    width: 15px;
    height: 25px;
    z-index: 1;
    top: 1rem;
  }
  .back {
    left: 1rem;
    background: url(../../assets/images/hotelsearch/back.png) no-repeat;
  }
  .total {
    width: 30px;
    background: url(../../assets/images/hotelsearch/total.png) no-repeat;
    right: 3rem;
  }
  .hanbao {
    width: 30px;
    background: url(../../assets/images/hotelsearch/hanbao.png) no-repeat;
    right: 0.5rem;
  }
}

#app .hotelbox > .hotelsearchbox {
  position: absolute;
  top: 25%;
  left: 2%;
  width: 96%;
  margin: 0 auto;
  padding-top: .4rem;
  height: 15rem;
  border-radius: 0.6rem;
  background: #fff;
  z-index: 2;
 

}

#input{
  border: none;
  margin:0 1rem;
  width: 92%;
  height: 2.5rem;
  text-indent: 2rem;
  font-weight: bold;
  border-bottom: 2px solid #ccc;
}
.icon{
  position: absolute;
  top: 3.3rem;
  display: inline-block;
  width: 20px;
  height: 20px;
}
.search{
  left: 1rem;
  background: url(../../assets/images/hotelsearch/icon-search.png) no-repeat;
}
.dinwei{
  right: 1.5rem;
  background: url(../../assets/images/hotelsearch/dinwei.png) no-repeat;

}
</style>