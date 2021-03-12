<template>
  <div class="hotelbox">
    <div id="hotel">
      <link rel="stylesheet" href="../less/vw+rem.less" />
      <img
        class="bannerimg"
        src="../../assets/images/hotelsearch/banner.png"
        alt=""
      />
      <i class="icon back" @click="back()"></i>
      <i class="icon total"></i>
      <i class="icon hanbao"></i>
    </div>
    <div class="hotelsearchbox">
      <van-tabs id="vantabs">
        <van-tab title="国内">
          <div class="inputbox">
            <i class="icon search"></i>
            <input type="text" name="" v-model="val" id="input" />
            <i class="icon dinwei"></i>
          </div>
          <div class="datebox">
            <van-cell title="选择日期区间" :value="date" @click="show = true" />
            <van-calendar v-model="show" type="range" @confirm="onConfirm" />
          </div>
          <div class="datebox">
            <input type="text" value="试试搜索“故宫" name="" id="" />
          </div>
          <div class="searchbox">
            <van-button
              class="searchbtn"
              color="linear-gradient(to right, #339882, #268ec0)"
              style="font-weight: bold"
              @click="sendlist()"
            >
              开始搜索
            </van-button>
          </div>
        </van-tab>
        <van-tab title="国际" id="border"></van-tab>
        <van-tab title="民宿"></van-tab>
      </van-tabs>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item badge="">
        <span>订单·取消更改</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item badge="">
        <span>我的收藏</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  mounted() {
    //  this.sendlist()
  },
  data() {
    return {
      date: "",
      show: false,
      val: "北京",
      active: 0,
      icon: {
        active: ["https://img01.yzcdn.cn/vant/user-inactive.png"],
        inactive: ["https://scpic.chinaz.net/Files/pic/icons128/6761/g4.png"],
      },
    };
  },
  computed: {},
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      const [start, end] = date;
      this.show = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
    },
    back() {
      this.$router.push("/home");
    },
    //获取json数据
    sendlist() {
    //   console.log(this.$store.state.hotel.adress.data[0].name);
      console.log(this.val);
      let bei = this.$store.state.hotel.adress.data[0].name;
      let shang = this.$store.state.hotel.adress.data[1].name;
      let an = this.$store.state.hotel.adress.data[2].name;
      if (this.val == bei) {
        this.$axios.get("../../static/data/hotellist.json").then((res) => {
          console.log(res);
            let beij = res.data.beij;
            this.list[0] = beij;
            console.log(this.list[0]);
            this.$router.push({name:'hotellist',parmas:{
              beij:beij.id
            }})
            return;
        });
      } else if (this.val == shang) {
        this.$axios.get("../../static/data/hotellist.json").then((res) => {
          console.log(res);
            let shangh = res.data.shangh;
            this.list[0] = shangh;
            console.log(this.list[0]);
            this.$router.push({name:'hotellist',parmas:{
              shangh:shangh.id
            }})
            return;
        });
      } else if (this.val == an) {
        this.$axios.get("../../static/data/hotellist.json").then((res) => {
          console.log(res);
            let anhui = res.data.anhui;
            this.list[0] = anhui;
            console.log(this.list[0]);
            this.$router.push({name:'hotellist',parmas:{
              anhui:anhui.id
            }})
            return;
        });
      } else {
        alert("请搜索北京，上海，安徽");
      }

    },

 
  },
  watch: {},
  computed: {
    ...mapState(["hotel", "list"]),
  },
};
</script>

<style scoped lang='scss'>
@import "../../components/common/import.scss";
#app .hotelbox {
  position: relative;
}
#app .hotelbox > #hotel {
  position: relative;
  height: 100vh;
  background: #e7e7e7;
  .bannerimg {
    width: 100%;
  }
  .icon {
    position: absolute;

    display: inline-block;
    width: toREM(15);
    height: toREM(25);
    z-index: 1;
    top: toREM(25);
  }
  .back {
    left: toREM(15);
    background: url(../../assets/images/hotelsearch/back.png) no-repeat;
  }
  .total {
    width: 30px;
    background: url(../../assets/images/hotelsearch/total.png) no-repeat;
    right: toREM(55);
  }
  .hanbao {
    width: 30px;
    background: url(../../assets/images/hotelsearch/hanbao.png) no-repeat;
    right: toREM(10);
  }
}

#app .hotelbox > .hotelsearchbox {
  position: absolute;
  top: 25%;
  left: 2%;
  width: 90%;
  margin: 0 auto;
  padding: toREM(10);
  height: toREM(230);
  border-radius: toREM(15);
  background: #fff;
  z-index: 2;
}

#input {
  border: none;
  margin: 0 toREM(2);
  width: 100%;
  height: toREM(40);
  text-indent: toREM(50);
  font-weight: bold;
  border-bottom: 2px solid #ccc;
}
.icon {
  position: absolute;
  top: toREM(55);
  display: inline-block;
  width: toREM(20);
  height: toREM(20);
}
.search {
  left: toREM(20);
  background: url(../../assets/images/hotelsearch/icon-search.png) no-repeat;
}
.dinwei {
  right: toREM(40);
  background: url(../../assets/images/hotelsearch/dinwei.png) no-repeat;
}
.datebox {
  padding: 0 toREM(10);
  border-bottom: 2px solid #ccc;
  input {
    height: toREM(40);
    line-height: toREM(30);
    border: none;
    color: #ccc;
  }
}
.searchbox {
  .searchbtn {
    width: 100%;
    margin: toREM(18) toREM(2);
    border-radius: toREM(20);
    height: toREM(30);
  }
}
</style>