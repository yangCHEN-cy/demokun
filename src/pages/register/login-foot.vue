<template>
  <div class="foot-box">
      <p>其它登录方式</p> 
      <ul class="list-icon">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
@import '../../components/common/import.scss';
.foot-box{
    position: fixed;
    bottom: toREM(100);
    font-size: toREM(14);
    padding-left: toREM(20);
    color: #404042;
    p{
        color: #d5d5d8;
        padding: toREM(10) 0;
    }
    .list-icon{
        display: flex;
        li{
            width: toREM(25);
            height: toREM(25);
            background: pink url(../../assets/images/register/login-icon.png) no-repeat;
            background-size: cover;
            margin-right: toREM(30);
            border-radius: toREM(5);
            &:nth-of-type(2){
                background-position-x: toREM(-30);
            }
            &:nth-of-type(3){
                background-position-x: toREM(-59);
            }
            &:nth-of-type(4){
                background-position-x: toREM(-89);
            }
        }
        
    }
}
</style>