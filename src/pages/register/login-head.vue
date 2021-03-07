<template>
  <div>
    <van-nav-bar title="" left-arrow :border="false">
      <template #right>
        <van-icon name="setting-o" size="23" />
      </template>
    </van-nav-bar>
    <div class="title">
        <h2>登录后精彩不停</h2>
        <p>全世界的旅行故事都在期待与你的相遇</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
@import '../../components/common/import.scss';

.van-nav-bar {
  background: none;
 /deep/ .van-icon{
      color: #fff;
      font-size: toREM(26);
  }
}
/deep/ .van-nav-bar__left{
    padding: 0 toREM(5);
}
.title{
    color: #fff;
    padding-left: toREM(18);
    h2{
        font-size: toREM(27);
    }
    p{
        font-size: toREM(14);
        line-height: toREM(18);
        color: #d5d5d8;
    }
}
</style>