<template>
  <div class="tabbarWrap">
    <item txt="首页" mark="home" :curr="curritem" @change="getVal">
      <template #normalImg>
        <img src="../../assets/homeimg/home_slices/home.png" />
      </template>
      <template #activeImg>
        <img src="../../assets/homeimg/home_slices/home.png" />
      </template>
    </item>
    <item txt="动态" mark="dongtai" :curr="curritem" @change="getVal">
      <template #normalImg>
        <img src="../../assets/homeimg/home1_slices/dongtai.png" />
      </template>
      <template #activeImg>
        <img src="../../assets/homeimg/home1_slices/dongtai.png" />
      </template>
    </item>
    <item txt="发布" mark="fabu" :curr="curritem" @change="getVal">
      <template #normalImg>
        <img src="../../assets/homeimg/home_slices/fabu.png" />
      </template>
      <template #activeImg>
        <img src="../../assets/homeimg/home_slices/fabu.png" />
      </template>
    </item>
    <item txt="酒店" mark="hotelsearch" :curr="curritem" @change="getVal">
      <template #normalImg>
        <img src="../../assets/homeimg/home1_slices/hot.png" />
      </template>
      <template #activeImg>
        <img src="../../assets/homeimg/home1_slices/hot.png" />
      </template>
    </item>
    <item txt="我的" mark="myorder" :curr="curritem" @change="getVal">
      <template #normalImg>
        <img src="../../assets/homeimg/home_slices/wode.png" />
      </template>
      <template #activeImg>
        <img src="../../assets/homeimg/home_slices/wode.png" />
      </template>
    </item>
  </div>
</template>

<script>
import item from "./item";
export default {
  components: { item },
  data() {
    return {
      curritem: "home",
    };
  },
  methods: {
    getVal(inmark) {
      this.curritem = inmark;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../components/common/import.scss";

.tabbarWrap {
  position:fixed;
  bottom: 0;
  height: toREM(70);
  display: flex;
  width: 100%;
  background-color: white;
}
</style>