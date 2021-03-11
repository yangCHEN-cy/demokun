<template>
  <div>
      <ul class="box">
          <li v-for="(item,index) in arr" :key="index">
              <img :src="require('../../assets/images/myjourney/'+item.img)"  alt="">
              <div class="div">
                  <h4>{{item.title}}</h4>
                  <span class="span1">CNY{{item.num}}/人</span>
                  <p>{{item.txt}}</p>
                  <span class="span2">{{item.ponp}}</span>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
data(){
    return{
        arr:[],
    }
},
mounted(){
        this.$axios.get("../../static/data/myjourney.json").then((res) => {
      console.log(res);
      this.arr = res.data.mydata;
      console.log(this.arr);
  }, 
  )
}
}
</script>

<style scoped lang="scss">
@import '../../components/common/import.scss';
.box{
    li{
        height:toREM(120) ;
        width: 100%;
        margin-bottom:toREM(10) ;
        // background-color: aqua;
        img{
            height:toREM(120);
            width:toREM(120);
            float: left;
        }
    .div{
         height:toREM(120);
        background-color:#EEEEEE ;
        // padding-left:toREM(20) 
        float: left;
        width: toREM(225);
        padding-left:toREM(10) ;
       h4{
           line-height: toREM(20);
           margin-top:toREM(15) ;
       }
       p{
            font-size:toREM(10) ;
            line-height:toREM(20) ;
             margin-bottom:toREM(5) ;
       }
       .span1{
            font-size:toREM(10) ;
            line-height:toREM(30) ;
       }
       .span2{
           padding: 3px 5px;
           background-color: #C2DAD4;
           border-radius: 6px;
           color: #4FA48F;
           font-size:toREM(10) ;
            margin-top:toREM(20) ;
       }
    }
    }
}
</style>