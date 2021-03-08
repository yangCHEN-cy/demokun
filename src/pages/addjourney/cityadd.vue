<template>
  <div>
    <li>
      <!-- <router-link to="journeylist"> -->
        <div class="whatgo">
          <slot name="myimg"></slot>
        </div>
        <div class="city">
          <div class="city_h1">
            <img src="../../assets/images/journey/button.png" alt="" />
          </div>
          <p class="city_h2" :myname="'name'">{{myname}}</p>
        </div>
      <!-- </router-link> -->
    </li>
  </div>
</template>

<script>
export default {
  props:["myimg","myname"],
  data() {
    return {
      // data: [
      //   {
      //     img: "beijing.png",
      //     name: "北京",
      //   },
      //   {
      //     img: "shanghai.png",
      //     name: "上海",
      //   },
      // ],
    };
  },
};
</script>

<style scoped lang='scss'>
@import "../../components/common/import.scss";
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
    .city_h1 {
      margin: toREM(-12) toREM(105);
      img {
        width: toREM(15);
      }
    }
    .city_h2 {
      padding: toREM(70) toREM(25);
      text-align: left;
    }
  }
}
</style>