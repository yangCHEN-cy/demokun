<template>
  <div class="banner">
    <div class="top">
        <ul>
      <router-link to="remen"><li @click="curr=0" :class="{active:curr==0}">热门推荐</li></router-link>
      <li @click="curr=1" :class="{active:curr==1}">自由行</li>
      <li @click="curr=2" :class="{active:curr==2}">名宿</li>
    </ul>
    <div class="right">更多</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      curr:0
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../components/common/import.scss";
.banner {
  padding:toREM(5) 0 ;
  background-color: white;
  border-radius: toREM(10);
  .top{
    width: 100%;
    height:toREM(45);
  }
  ul {
    height: toREM(45);
    float: left;
    li {
      float: left;
      list-style: none;
      padding: toREM(5) 0;
      margin: toREM(10) toREM(15);
        color: black;
    }
  }
  .right {
    background-color: white;
    float: right;
    padding: toREM(5) 0;
    margin: toREM(10) toREM(15);
  }
}
.active{
   border-bottom: 2px solid rgb(33, 139, 149);
   color:  rgb(33, 139, 149);
}
</style>>