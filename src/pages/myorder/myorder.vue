<template>
  <div class="banner">
   <myhearder mytitle="我的订单"></myhearder>
    <div class="top">
      <ul>
        <router-link to="/content"
          ><li @click="curr = 0" :class="{ active: curr == 0 }">
            全部
          </li></router-link
        >
        <router-link to=""
          ><li @click="curr = 1" :class="{ active: curr == 1 }">
            待支付
          </li></router-link
        >
        <router-link to=""
          ><li @click="curr = 2" :class="{ active: curr == 2 }">
            待出行
          </li></router-link
        >
        <router-link to=""
          ><li @click="curr = 3" :class="{ active: curr == 3 }">
            待点评
          </li></router-link
        >
        <router-link to=""
          ><li @click="curr = 4" :class="{ active: curr == 4 }">
            取消/退款
          </li></router-link
        >
      </ul>
    </div>
    <mybannerimg></mybannerimg>
    <div class="erji">
          <router-view></router-view>
    </div>
  
  </div>
</template>

<script>
import mybannerimg from '../myorder/bannerimg'
import myhearder from '../../components/header/header-normal'
export default {
  data() {
    return {
      curr: 0,
    };
  },
  components:{
   mybannerimg,
   myhearder
  }
  
};
</script>

<style scoped lang="scss">
@import "../../components/common/import.scss";
*{
    margin: 0;
    padding: 0;
}
.banner {
   background-color: gainsboro;
  .top {
    width: 100%;
    height: toREM(34);
  }
  ul {
    width: 100%;
    height: toREM(34);
    float: left;
    background-color: white;
    display: flex;
    justify-content: space-around;
    li {
      list-style: none;
      padding: toREM(5) 0;
      color: gray;
    }
    .active {
      border-bottom: 2px solid rgb(33, 139, 149);
      color: rgb(33, 139, 149);
    }
  }
}
</style>>