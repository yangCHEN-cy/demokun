<template>
  <div>
      <ul class="box">
          <li>
              <img src="../../assets/images/my/bjt.png" alt="">
              <div class="div">
                  <h4>131</h4>
                  
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '../../components/common/import.scss';
.box{
    li{
        height:toREM(150) ;
        width: 100%;
        background-color: aqua;
        img{
            height:toREM(150);
            width:toREM(150);
            // width: 40%;
            float: left;
        }
    .div{
         height:toREM(150);
        background-color:red ;
    }
    }
}
</style>