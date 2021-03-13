<template>
  <div>
    <div class="item" @click="pushto(index1)">
      <div class="content">
        <div class="tab">
          <span class="jx">精选一 ></span>
          <span class="fg">风光 ></span>
          <span class="ht">话题</span>
        </div>
        <div class="box">
          <h2>{{ newarr[index1].name }}</h2>
          <div>
            {{ newarr[index1].playplace }}
          </div>
          <div class="img">
              <img :src="require('../../assets/images/myjourney/'+newarr[index1].imgs[0])" alt="">
              <img :src="require('../../assets/images/myjourney/'+newarr[index1].imgs[1])" alt="">
              <img :src="require('../../assets/images/myjourney/'+newarr[index1].imgs[2])" alt="">
              <div class="dz">
                  
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import '../../assets/images/journey/beijing'
export default {
  props: ["newarr", "index1"],
  data() {
    return {
      currplace: "安徽",
    };
  },
  mounted() {
    console.log(this.newarr);
  },
  methods: {
    pushto(val) {
        this.$router.push({name:'journeyinfor',params:{obj:this.newarr[this.index1]}})
        console.log(this.newarr[this.index1]);
      console.log(val);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../components/common/import.scss";
.item {
  border-bottom: 1px solid gray;
  .content {
    padding: toREM(20) toREM(10);
  }
}
.jx {
  padding: toREM(5);
  display: inline-block;
  background: #31978c;
  color: white;
}
.fg {
  border: 1px solid #31978c;
  padding: toREM(5);
  display: inline-block;
  color: #31978c;
}
.ht {
  float: right;
  padding: toREM(5);
  display: block;
  background: #31978c;
    color: white;
}
.box{
    h2{
        padding: toREM(20) 0;
    }
    .img{
        width: 100%;
        display: flex;
         justify-content: space-between;
        img{
            width: toREM(75);
            height: toREM(50);
        }
        .dz{
            width: 30%;
        }
    }
}
</style>