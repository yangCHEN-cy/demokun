<template>
<div>
  <div class="remen" v-for="(item,index) in arr" :key="index">
    <div class="img">
      <img :src="require('../../assets/homeimg/home1_slices/'+item.img)" alt="" />
    </div>
    <h3>{{item.hoteltitle}}</h3>
    <p>{{item.detail}}</p>
    <div class="footer">
      <ul>
        <li>{{item.address}}</li>
        <li>
          <img :src="require('../../assets/homeimg/home1_slices/'+item.touxiang)" alt="" />{{item.nicheng}}
        </li>
        <li>{{item.num}}</li>
        <li>点赞</li>
      </ul>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [],
    };
  },
  mounted() {
    this.$axios.get("../../static/data/remen.json").then((res) => {
      this.arr = res.data.remen;
      console.log(res.data.remen);
    });
  },
};
</script>

<style scoped lang="scss">
@import "../../components/common/import.scss";
.remen {
  //  height: toREM(80);
  .img {
    width: 95%;
    height: toREM(130);
    margin: 0 auto;
    margin-top: toREM(10);
    img {
      width: 100%;
      height: 100%;
    }
  }
  h3 {
    width: 95%;
    margin: toREM(3) auto;
    color: rgb(33, 139, 149);
  }
  p {
    width: 95%;
    margin: toREM(10) auto;
  }
  .footer {
    width: 95%;
    margin: 0 auto;
    overflow: hidden;
    ul {
      position: relative;
      li {
        height: toREM(30);
        float: left;
        padding: 0 toREM(10);
        margin-right: toREM(10);
        text-indent: toREM(20);
        line-height: toREM(30);
      }
      li:nth-of-type(1) {
        background: url(../../assets/homeimg/home1_slices/address@2x.png)
          no-repeat;
        background-position: 0 0;
        background-size: toREM(25) toREM(25);
      }
      li:nth-of-type(2) {
        position: relative;
        text-indent: toREM(25);
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: toREM(25);
          height: toREM(25);
        }
      }
      li:nth-of-type(3) {
        background: url(../../assets/homeimg/home1_slices/guankan.png) no-repeat;
        background-position: 0 toREM(5);
        background-size: toREM(25) toREM(15);
      }
      li:nth-of-type(4) {
        background: url(../../assets/homeimg/home1_slices/dianzhan.png)
          no-repeat;
        background-position: 0 toREM(5);
        background-size: toREM(25) toREM(20);
        position: absolute;
        top: 0;
        right: toREM(-13);
      }
    }
  }
}
</style>