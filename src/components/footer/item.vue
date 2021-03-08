<template>
  <div class="item" @click="fn">
    <!-- 槽口(选中,未选中) -->
    <template v-if="!flag">
      <slot name="normalImg"></slot>
    </template>
    <template v-if="flag">
      <slot name="activeImg"></slot>
    </template>
      <p :class="{ active: flag }">{{ txt }}</p>
  </div>
</template>
<script>
export default {
  props: ["txt", "mark", "curr"],
  computed: {
    flag() {
      return this.mark == this.curr;
    },
  },
  methods: {
    fn() {
      this.$emit("change", this.mark);
      this.$router.push("/" + this.mark).catch(err => {});
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../components/common/import.scss';

.item {
  flex: 1;
  text-align: center;
  height:toREM(70);
  margin-top:toREM(10);
  img {
    display: inline-block;
    width:toREM(30);
    height:toREM(30);
  }
  p {
    &.active {
      color:skyblue;
    }
    font-size:14px;
  }
}
.item:nth-of-type(3){
  img{
    width:toREM(40);
    height:toREM(40);
    margin-top:toREM(-15);
  }
  P{
    margin-top:toREM(5);
  }
    
}
</style>