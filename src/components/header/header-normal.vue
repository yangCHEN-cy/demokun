<template>
  <div>
    <van-nav-bar
      :title="mytitle"
      left-text=""
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
export default {
  props:["mytitle"],
  data(){
    return{
      
    }
  },
   methods: {
    onClickLeft() {
      this.$router.go(-1)
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
  },
};
</script>

<style scoped lang='scss'>
@import '../../components/common/import.scss';
/deep/ .van-nav-bar__arrow {
    margin-right: 43px;
    font-size: toREM(25);
}
/deep/ .van-nav-bar .van-icon {
    color: #fff;
    
}
/deep/ .van-nav-bar__content{
  background:linear-gradient(to right,#31978c,#288fb5)
}
/deep/ .van-nav-bar__title{
    color: #fff;
}
</style>