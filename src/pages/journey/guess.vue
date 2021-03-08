<template>
  <div>
    <div class="guess">
      <div class="title">猜你可能想趣</div>
      <div class="guess_info" v-for="(item, index) in data" :key="index">
        <img :src="require('../../assets/images/journey/' + item.img)" alt="" />
        <p>{{item.title}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   data() {
    return {
      data:[
        {
          img: "maldives-1993704_1920.png",
          title: `马尔代夫度假岛屿的老大就是维拉私人岛，这就是真正独立的小岛，可单独预定也可包岛预定
            。岛屿设施和服务级别不用多说，都是最顶级的。`
        },
        {
          img: "lighthouse-4931925_1920.png",
          title: `纽约市有官方拉丁语名称NOVUM EBORACUM用于市意为“新艾伯拉肯”。其中艾伯拉肯就是前
            述约克在罗马帝国时期的拉丁语旧名。`
        },
        {
          img: "maldives-1993704_1920.png",
          title: `马尔代夫度假岛屿的老大就是维拉私人岛，这就是真正独立的小岛，可单独预定也可包岛预定
            。岛屿设施和服务级别不用多说，都是最顶级的。`
        },
        {
          img: "lighthouse-4931925_1920.png",
          title: `纽约市有官方拉丁语名称NOVUM EBORACUM用于市意为“新艾伯拉肯”。其中艾伯拉肯就是前
            述约克在罗马帝国时期的拉丁语旧名。`
        },
        {
          img: "maldives-1993704_1920.png",
          title: `马尔代夫度假岛屿的老大就是维拉私人岛，这就是真正独立的小岛，可单独预定也可包岛预定
            。岛屿设施和服务级别不用多说，都是最顶级的。`
        },
        {
          img: "lighthouse-4931925_1920.png",
          title: `纽约市有官方拉丁语名称NOVUM EBORACUM用于市意为“新艾伯拉肯”。其中艾伯拉肯就是前
            述约克在罗马帝国时期的拉丁语旧名。`
        },
      ]
    }
  }
};
</script>

<style scoped lang='scss'>
@import '../../components/common/import.scss';
.guess{
    height: 100%;
    border-radius: toREM(10);
    border: 1px solid #fff;
    background: #fff;
    margin-top: toREM(15);
    .title{
        text-align: left;
        margin-left: toREM(10);
        line-height: toREM(40);
    }
    .guess_info{
    img{
      width: 100%;
    }  
    p{
      font-size: toREM(13);
      margin-top: toREM(3);
      text-align: left;
    }
  }
}
</style>