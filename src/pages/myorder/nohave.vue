<template>
  <div class="nohave">
      <div class="over"></div>
      <div class="img">
          <img src="../../assets/images/myorder_slices/nohave.png" alt="">
      </div>
      <p>您还没有相关订单</p>
      <p>手机号查询</p>
      <div class="footer">
          订单出现问题无法与商家协商处理一致？<a href="">我要反馈</a>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import "../../components/common/import.scss";
.nohave{
    width: 100%;
    height:toREM(400);
    margin-top:toREM(15);
    border-radius: toREM(10) toREM(10) 0 0;
    background-color:rgb(255,255,255);
    .over{
        width: 100%;
        height: toREM(50);
    }
    .img{
        width:toREM(180);
        height: toREM(180);
        margin: 0 auto;
        // margin-top: toREM(60);
        img{
            width: 100%;
            height: 100%;
        }
    }
    p{
        text-align: center;
        margin-bottom: toREM(15);
        color: gray;
    }
    p:nth-of-type(2){
        width:toREM(100);
        padding:toREM(5) 0 ;
        border-radius:toREM(10);
        border: 1px solid blue;
        margin: 0 auto;
       color: black;
    }
    .footer{
        position: fixed;
        bottom: 0;
        font-size:toREM(12);
        color: gray;
        text-indent: toREM(20);
        width: 100%;
        height: toREM(30);
        line-height: toREM(30);
        background: url(../../assets/images/myorder_slices/shanchu.png) center right no-repeat; 
        background-color:rgb(231,231,231) ;
        a{
            color: rgb(33, 139, 149);
        }
    }
}

</style>