<template>
   <div class="headerwrap">
    <template >
      <slot name="leftimg"></slot>
    </template>
    <div class="searchtbox" >
        <i class="icon search" ></i>
        <input type="text" name="" id="" :value="this.$store.state.valhome">
    </div>
    <template >
      <slot name="rightimg"></slot>
    </template>
  </div>
</template>

<script>

export default {
  props: ["txt",],
}

</script>

<style scoped lang='scss'>
@import "../../components/common/import.scss";

.headerwrap {
  position: fixed;
  top: 0;
  height: toREM(50);
  line-height:toREM(50);
  width: 100%;
  z-index: 99;
  background:linear-gradient(to right , #31968f , #2990b2);
}
.headerwrap .home{
  background: #48bd5a;
}
.searchtbox{
    position: absolute;
    top: toREM(0);
    width: 100%;
    left: toREM(55);
    input{
    height:toREM(20) ;
    width: 70%;
    text-align: center;
    color: #ccc;
    border-radius: toREM(20);
    border: none;
    font-size: toREM(12);
    }
}
.search{
  position: absolute;
  top: toREM(15);
  left: toREM(50);
  display: inline-block;
  width: toREM(20);
  height: toREM(20);
  background: url(../../assets/images/hotelsearch/icon-search.png) no-repeat;

}
</style>