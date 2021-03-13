<template>
  <div>
    <!-- 头部 -->
    <mytit mytitle="精选路线"></mytit>
    <item v-for="(item, index) in arr" :key="index" :newarr="arr" :index1="index"></item>
  </div>
</template>

<script>
import mytit from '../../components/header/header-normal'
import item from "./item";
export default {
  components: {
    item,
    mytit
  },
  data() {
    return {
      currplace: "安徽", //this.$route.params.
      arr: this.$store.state.tour.address,
      
    };
  },
  mounted() {
    console.log(this.$route);
    this.arr = [];
    for (var i in this.$store.state.tour.address) {
      if (this.$store.state.tour.address[i].place == this.currplace) {
        this.arr.push(this.$store.state.tour.address[i]);
      }
    }
    console.log(this.arr);
  },
};
</script>

<style>
</style>