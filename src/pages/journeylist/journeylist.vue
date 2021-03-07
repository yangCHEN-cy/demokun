<template>
  <div>
    <!-- 头部 -->
    <item v-for="(item, index) in arr" :key="index" :newarr="arr" :index1="index"></item>
  </div>
</template>

<script>
import item from "./item";
export default {
  components: {
    item,
  },
  data() {
    return {
      currplace: "安徽", //this.$route.params.
      arr: this.$store.state.tour.address,
      
    };
  },
  mounted() {
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