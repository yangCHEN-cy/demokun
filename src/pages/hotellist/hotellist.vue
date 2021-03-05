<template>
  <div>
    <headitem class="headerbox" txt="小组">
      <template v-slot:leftimg>
        <img
          src="../../assets/images/hotelsearch/back.png"
          class="img left"
          alt=""
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
      <li>
        <van-field
          v-model="fieldValue"
          is-link
          readonly
          label="距离近-远"
          placeholder="请选择所在地区"
          @click="show = true"
        />
        <van-popup v-model="show" round position="bottom">
          <van-cascader
            v-model="cascaderValue"
            title="请选择所在地区"
            :options="options"
            @close="show = false"
            @finish="onFinish"
          />
        </van-popup>
      </li>
      <li>
        <van-field
          v-model="fieldValue"
          is-link
          readonly
          label="星级"
          placeholder="请选择所在地区"
          @click="show = true"
        />
        <van-popup v-model="show" round position="bottom">
          <van-cascader
            v-model="cascaderValue"
            title="请选择星级"
            :options="options"
            @close="show = false"
            @finish="onFinish"
          />
        </van-popup>
      </li>
      <li>
        <van-field
          v-model="fieldValue"
          is-link
          readonly
          label="价格"
          placeholder="请选择价格"
          @click="show = true"
        />
        <van-popup v-model="show" round position="bottom">
          <van-cascader
            v-model="cascaderValue"
            title="请选择价格"
            :options="options"
            @close="show = false"
            @finish="onFinish"
          />
        </van-popup>
      </li>
      <li>
        <van-field
          v-model="fieldValue"
          is-link
          readonly
          label="筛选"
          placeholder="请选择所在地区"
          @click="show = true"
        />
        <van-popup v-model="show" round position="bottom">
          <van-cascader
            v-model="cascaderValue"
            title="请选择所在地区"
            :options="options"
            @close="show = false"
            @finish="onFinish"
          />
        </van-popup>
      </li>
    </ul>
    <div class="hotelgo">
      <van-button color="#f0b22d" size="mini">闪电确认</van-button>
      <van-button color="#f0b22d" size="mini">到店有房</van-button>
    </div>
          <ul class="hotellistbox"  v-for="(item,index) in list[0]" :key="index">
            <li>
              <div class="imgbox">
                <img :src="item.img" alt="">
              </div>
              <div class="rightbox">
                <h4>{{item.hoteltitle}}</h4>
                <p>¥<span>{{item.price}}</span>起</p>
                <div>{{item.detail}}</div>
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
      show: false,
      fieldValue: "",
      cascaderValue: "",
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: "浙江省",
          value: "330000",
          children: [{ text: "杭州市", value: "330100" }],
        },
        {
          text: "江苏省",
          value: "320000",
          children: [{ text: "南京市", value: "320100" }],
        },
      ],
    };
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join("/");
    },
  },
    computed: {
    ...mapState(["hotel","list"]),
  },
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
  height: toREM(50);
  li {
    float: left;
    width: 25%;
    height: toREM(20);
    border-right: 1p solid #2990b2;
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
  border-bottom: 1px solid #dedede;
}
.hotellistbox{
  padding: toREM(10);
  li{
        height: toREM(120);
    border-bottom: 1px solid #dedede;
      .imgbox{
        width: 30%;
        height: toREM(140);
        float: left;
        margin-right: toREM(5);
        img{
          width: 100%;
          height: toREM(100);
        }
      }
      .rightbox{
        width: 60%;
        height: toREM(130);
        float: left;
        p{
          color: red;
          margin-top: toREM(20);
          float: right;
        }
        div{
          color:#ccc;
          margin-top: toREM(60);
        }
      }
  }
}
</style>