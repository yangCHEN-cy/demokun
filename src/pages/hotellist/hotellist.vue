<template>
  <div>
    <headitem class="headerbox" txt="小组">
      <template v-slot:leftimg>
        <img
          src="../../assets/images/hotelsearch/back.png"
          class="img left"
          alt=""
          @click="back()"
        />
      </template>
      <template v-slot:rightimg>
        <img
          src="../../assets/images/hotelsearch/dinwei.png"
          class="img right"
          alt=""
        />
      </template>
    </headitem>
    <ul class="navbarbox">
      <li
        v-for="(item, index) in arr"
        @click="fn(index)"
        :key="index"
        :class="{ active: indexs == index }"
      >
        <!-- <div v-if="!item.img1">
					{{item.title}}
				</div>
				<div v-else>
					{{item.title}}
					<span class="shang" v-show="flag[index]"></span>
					<span class="xia" v-show="!flag[index]"></span>
				</div> -->

        {{ item.title }}
      </li>
    </ul>
    <div class="hotelgo">
      <van-button color="#f0b22d" size="mini">闪电确认</van-button>
      <van-button color="#f0b22d" size="mini">到店有房</van-button>
    </div>
    <ul
      class="hotellistbox"
      v-for="(item, index) in list"
      :class="{ active: indexs == index }"
      :key="index"
    >
      <li @click="todetil(item)">
        <div class="imgbox">
          <img :src="item.img" alt="" />
        </div>
        <div class="rightbox">
          <h4>{{ item.hoteltitle }}</h4>
          <p class="wuxing">
            <img
              src="../../assets/images/hotellist/yes.png"
              alt=""
              v-for="item in item.hongxing"
              :key="index"
            />
            <img
              src="../../assets/images/hotellist/none.png"
              alt=""
              v-for="item in item.huixing"
              :key="index"
            />
          </p>
          <div class="pinfen">
           <span class="pinfen1">{{item.pingfeng}}</span>
           <span>{{item.rangs}}</span>km
          </div>
          <p>
            ¥<span>{{ item.price }}</span
            >起
          </p>
          <div class="adress">{{ item.detail }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import headitem from "../../components/header/header-input";
export default {
  components: {
    headitem,
  },
  data() {
    return {
      indexs: 0,
      arr: [
        {
          title: "评分",
        },
        {
          title: "距离",
        },
        {
          title: "星级",
          img1: "sd",
          detail: true,
        },
        {
          title: "价格",
          img1: "sd",
          detail: true,
        },
      ],
      list:[],
    };
  },
  computed: {
    flag() {
      let ddp = [0, 0];
      this.arr.forEach((item) => {
        if (item.img1) {
          ddp.push(item.detail);
        }
      });
      return ddp;
    },
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join("/");
    },
    // 返回搜索
    back() {
      this.$router.push("/hotelsearch");
    },
    todetil(item) {
      console.log(item);
      this.$store.state.listdata = item;
      this.$router.push("/hotel");
    },
    ...mapMutations(["sendlist"]),
    fn(index) {
      this.indexs = index;
      // this.list = this.$store.state.list	
              console.log(this.list[0]);

      if (index == 0) {
        console.log(this.list.title);
        for (let i = 0; i < this.list.length - 1; i++) {
          for (let j = 0; j < this.list.length - 1 - i; j++) {
            if (this.list[j].pingfeng < this.list[j + 1].pingfeng) {
            console.log(this.list[j].pingfeng);
              let temp = this.list[j];
              this.list[j] = this.list[j + 1];
              this.list[j + 1] = temp;
            }
          }
        }
      } else if (index == 1) {
         console.log(this.list);
        for (let i = 0; i < this.list.length - 1; i++) {
          for (let j = 0; j < this.list.length - 1 - i; j++) {
            if (this.list[j].rangs > this.list[j + 1].rangs) {
              let temp = this.list[j];
              this.list[j] = this.list[j + 1];
              this.list[j + 1] = temp;
            }
          }
        }
      } else if (index == 2) {
         console.log(this.list);
        for (let i = 0; i < this.list.length - 1; i++) {
          for (let j = 0; j < this.list.length - 1 - i; j++) {
            if (
              this.list[j].hongxing.length <
              this.list[j + 1].hongxing.length
            ) {
              let temp = this.list[j];
              this.list[j] = this.list[j + 1];
              this.list[j + 1] = temp;
            }
          }
        }
      }  else if (index == 3 ) {
         console.log("index3",index);
        for (let i = 0; i < this.list.length - 1; i++) {
          for (let j = 0; j < this.list.length - 1 - i; j++) {
            if (this.list[j].price < this.list[j + 1].price) {
              let temp = this.list[j];
              this.list[j] = this.list[j + 1];
              this.list[j + 1] = temp;
            }
          }
        }
      } 
    },
  },
  computed: {
    ...mapState(["hotel", "list"]),
  },
  mounted() {
    this.list=this.$store.state.list[0]
  }
};
</script>

<style scoped lang='scss'>
@import "../../components/common/import.scss";

.left {
  position: absolute;
  top: toREM(16);
  left: toREM(10);
}
.right {
  position: absolute;
  top: toREM(20);
  right: toREM(10);
}

.navbarbox {
  margin-top: toREM(50);
  height: toREM(40);
  li {
    float: left;
    width: 25%;
    text-align: center;
    height: toREM(40);
    line-height: toREM(40);
    background: #b0e2e0;
    color: rgb(118, 104, 201);
    font-size: toREM(13);
    &:last-of-type {
      border: none;
    }

    &.active {
      color: #2646f9;
    }
    .van-field {
      background: linear-gradient(to right, #d2e3e9);
    }
    .van-cell__title,
    .van-field__label {
      text-align: center;
    }
  }
}
.hotelgo {
  padding-left: toREM(20);
  height: toREM(35);
  line-height: toREM(25);
  border-bottom: 1px solid #dedede;
}
.hotellistbox {
  padding: toREM(10);
  li {
    height: toREM(125);
    border-bottom: 1px solid #dedede;
    .imgbox {
      width: 35%;
      height: toREM(140);
      float: left;
      margin-right: toREM(5);
      img {
        width: 100%;
        height: toREM(120);
      }
    }
    .rightbox {
      width: 60%;
      height: toREM(130);
      float: left;
      p {
        color: red;
        margin-top: toREM(5);
        float: right;
      }
      .pinfen{
        .pinfen1{
          border-radius: 5px;
          display: inline-block;
          width: toREM(40);
          height: toREM(20);
          line-height: toREM(20);
          text-align: center;
          border: 1px solid #b0e2e0;
          color: #2a91ae;
          margin-right: toREM(10);
        }
      }
      .wuxing {
        float: left;
        img {
          width: toREM(15);
          margin-right: toREM(1);
        }
      }
      div {
        color: #ccc;
        margin-top: toREM(28);
      }
    }
  }
}
.adress{
  font-size: toREM(14);
}
</style>