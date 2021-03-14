<template>
  <div class="din">
    <ul v-for="(item, index) in arr" :key="index">
      <li>
        <div class="box">
          <p>订单号:{{ item.num }}</p>
          <p>交易成功</p>
        </div>
        <div class="box2">
          <p class="title">{{ item.hoteltitle }}</p>
          <button @click="dele(item,index)">删除</button>
        </div>

        <p class="img"><img :src="item.img" alt="" /></p>
        <div class="price">
          <p>合计:<span>{{ item.price }}</span>￥</p>
          <p>评分:{{ item.pingfeng }}</p>
        </div>
        <p class="address">详细地址:{{ item.detail }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
    };
  },
  methods: {
      dele(item,index){
        let flag=this.arr.findIndex((item1)=>{
            return item=item1  
          })
          console.log(flag);
          this.arr.splice(flag,1)
      }
  },
  mounted() {
    this.arr = this.$store.state.myhotel;
    console.log(this.arr);
  },
};
</script>

<style scoped lang="scss">
@import "../../components/common/import.scss";
.din {
  width: 100%;
  border-radius: toREM(20) toREM(20) 0 0;
  background-color: white;
  margin-top: toREM(15);
  margin-bottom: toREM(10);
}
.img {
  width: 90%;
  height: toREM(160);
  margin: 0 auto;
  margin-top: toREM(10);
  img {
    width: 100%;
    height: 100%;
  }
}
.box {
  display: flex;
  font-size: toREM(14);
  p {
    width: 50%;
  }
  p:nth-of-type(1) {
    text-indent: toREM(20);
    margin-top: toREM(15);
  }
  p:nth-of-type(2) {
    text-align: left;
    text-indent: toREM(110);
    margin-top: toREM(15);
    color: rgb(57, 150, 201);
  }
}
.box2 {
  display: flex;
  position: relative;
  .title {
    text-indent: toREM(20);
    margin-top: toREM(15);
    font-size: toREM(18);
    font-weight: bold;
  }
  font-size: toREM(14);
  margin-top: toREM(10);
  button {
    height: toREM(30);
    padding: 0 toREM(5);
    position: absolute;
    top: toREM(14);
    right: toREM(19);
  }
}

.price {
  display: flex;
  p {
    width: 50%;
  }
  p:nth-of-type(1) {
    text-indent: toREM(20);
    margin-top: toREM(15);
    font-weight: bold;
    span{
        color:orange;
    }
  }
  p:nth-of-type(2) {
    text-align: left;
    text-indent: toREM(110);
    margin-top: toREM(15);
    color: rgb(57, 150, 201);
    font-size: toREM(14);
  }
}
.address {
  width: 100%;
  text-indent: toREM(20);
  margin-top: toREM(10);
  font-size: toREM(14);
  color: grey;
}
</style>