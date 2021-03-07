<template>
  <div>
      <div>
          头部
      </div>
      <div class="banner">
          banner
      </div>
      <div class="content">
          <div class="tit">
              <span>蓝色酒店</span><span>1239.00</span>

          </div>
          <div class="star">
              ⭐⭐⭐⭐⭐
          </div>
          <div class="infor">
              一家精致的私人星级酒店，环境优雅。服务周到，让您有宾至如归的感觉

          </div>
          <div class="icon">
              <div class="item">
                  电话
              </div>
              <div class="item">
                  邮件
              </div>
              <div class="item">
                  地址
              </div>
              <div class="item">
                  官网
              </div>
          </div>
          <h3>酒店设施</h3>
          <div class="sheshi">
              <div class="item">
                  免费wifi
              </div>
              <div class="item">
                  中央空调
              </div>
          </div>
          <div class="btn">
              预定酒店
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.banner{
    width: 100%;
    height: 300px;
}
.icon{
    display: flex;
}
.sheshi{
    display: flex;
}
.content{
    padding: 20px;
}
.tit{
    padding: 10px 0;
    font-size: 20px;
}
.item{
    width: 50%;
}
.star{
    padding: 20px 0;
}
.infor{
    padding: 20px 0;
}
.btn{
    margin-top: 20px;
    background: skyblue;
    text-align: center;
    padding: 20px 0;
    border-radius: 10px;
}
</style>