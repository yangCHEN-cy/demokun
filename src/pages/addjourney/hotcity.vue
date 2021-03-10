<template>
  <div>
    <div class="numbs">
      <ul> 
        <!-- <router-link to="journeylist"> -->
        <li>
            <div class="whatgo">
              <slot name="myimg"></slot>
            </div>
            <div class="city">
              <div class="city_h1">
                <img src="../../assets/images/journey/button.png" alt="" />
              </div>
              <p class="city_h2" :mycity_h2="'city_h2'">{{mycity_h2}}</p>
              <p class="city_h3" :mycity_h3="'city_h3'">{{mycity_h3}}</p>
            </div> 
        </li>
        <!-- </router-link> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props:["myimg","mycity_h2","mycity_h3"],
   data(){
    return{
      
    }
  },
};
</script>

<style scoped lang='scss'>
@import "../../components/common/import.scss";
.numbs {
  margin-top: toREM(15);
  position: relative;
  .title {
    margin-top: toREM(15);
    text-align: left;
    margin-left: toREM(10);
    img {
      width: toREM(20);
      vertical-align: middle;
      margin-right: toREM(5);
    }
  }
  ul {
    margin: toREM(0) toREM(-10);
    margin-top: toREM(15);
    li {
      width: 27%;
      float: left;
      list-style: none;
      padding-left: toREM(17);
      position: relative;
      .whatgo {
        margin-right: 0px;
        img {
          width: toREM(112);
        }
      }
      .city {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 50;
        color: #fff;
        margin-top: toREM(20);
        height: toREM(100);
        .city_h1 {
          margin: toREM(-12) toREM(105);
          img {
            width: toREM(15);
          }
        }
        .city_h2 {
          padding: toREM(85) toREM(25);
          text-align: left;
          position: absolute;
        }
        .city_h3 {
          position: absolute;
          padding: toREM(110) toREM(25);
          text-align: left;
          font-size: toREM(12);
        }
      }
    }
  }
}
</style>