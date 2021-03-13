<template>
  <div>
    <ul class="box">
      <li v-for="(item, index) in newaarr" :key="index">
         <!-- <img src="{newaarr[index].imgs[index]}" alt=""> -->
            <!-- <img
          :src="require('../../assets/images/myjourney/' + item.img)"
          alt=""
        />  -->
         <img
          :src="require('../../assets/images/myjourney/'+newaarr[index].imgs[index])"
          alt=""
        />
         <img
          :src="require('../../assets/images/myjourney/'+newaarr[index].imgs[index])"
          alt=""
        /> 
        <!-- <img src="{newaarr[index].imgs[index]}" alt=""> -->
        <div class="div">
          <!-- <h4>{{newaarr[0].date}}</h4> -->
         <!-- <h1>{{newaarr[0].id}}</h1> -->
         <h4>{{newaarr[index].name}}|{{newaarr[index].date}}</h4>
          <span class="span1">￥{{ newaarr[index].price}}/人</span>
          
          <p>游乐地带：         {{ newaarr[index].playplace}}</p>
          <p>建议：             {{ newaarr[index].sug}}</p>
          <p>适合人群：         {{ newaarr[index].suitperson}}</p>
          <span class="span2">{{  newaarr[index].tours }}</span>
        </div>
      </li>
       <!-- <img
          :src="require('../../assets/images/myjourney/' + item.img)"
          alt=""
        />
        <div class="div">
          <h4>{{ item.title }}</h4>
          <span class="span1">CNY{{ item.num }}/人</span>
          <p>{{ item.txt }}</p>
          <span class="span2">{{ item.ponp }}</span>
        </div> -->
      <!-- {{this.$route.params}} -->
      <!-- <li> -->
        <!-- <img src="require('../../assets/images/myjourney/' + item.img)" alt=""> -->
      
      <!-- </li> -->
    </ul>
  </div>
</template>

<script>
// import journeyinfor from "journeyinfor"
export default {
  data() {
    return {
      arr: [],
      newaarr:[]
    };
  },
  mounted() {
      this.newaarr = this.$store.state.myjor
    console.log(this.$store.state.myjor);
    this.$axios.get("../../static/data/myjourney.json").then((res) => {
      console.log(res);
      this.arr = res.data.mydata;
      console.log(this.arr);
    });
    //   this.$router.push({name="",params:{name}})
  },
};
</script>

<style scoped lang="scss">
@import "../../components/common/import.scss";
.box {
  li {
    height: toREM(360);
    width: 100%;
    margin-bottom: toREM(10);
    background-color: aqua;
    img {
      height: toREM(120);
      width: toREM(177.5);
      float: left;
    }
    .div {
      height: toREM(240);
      background-color: #eeeeee;
      // padding-left:toREM(20)
      float: left;
      width: toREM(345);
      padding-left: toREM(10);
      h4 {
        line-height: toREM(20);
        margin-top: toREM(15);
      }
      p {
        font-size: toREM(10);
        line-height: toREM(30);
        margin-bottom: toREM(5);
      }
      .span1 {
        font-size: toREM(10);
        line-height: toREM(30);
      }
      .span2 {
        padding: 3px 5px;
        background-color: #c2dad4;
        border-radius: 6px;
        color: #4fa48f;
        font-size: toREM(10);
        margin-top: toREM(20);
      }
    }
  }
}
</style>