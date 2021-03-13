<template>
  <div>
    <div>
      <van-nav-bar
        left-text=""
        :right-text="righttext"
        left-arrow
        fixed="true"
        :border="false"
        @click-left="back()"
      />
    </div>
    <div>
      <!-- {{this.$route.params}} -->
    </div>
    <!-- 轮播图 -->
    <div class="banne">
      <img
        :src="require('../../assets/images/myjourney/' + obj.imgs[0])"
        alt=""
      />
    </div>
    <div class="content">
      <div class="title">
        <span>{{ obj.name }}</span
        >丨<span>{{ obj.date }}</span>
      </div>
      <div class="price">￥{{ obj.price }}/人</div>
      <div class="must">
        <div><span class="blue"></span> 必玩区</div>
        <div class="img">
          <div class="item">
            <img
              :src="require('../../assets/images/myjourney/' + obj.imgs[1])"
              alt=""
            />
            <span class="smalltit"><a href="#">开放时间/优待政策 ></a></span>
          </div>
          <div class="item">
            <img
              :src="require('../../assets/images/myjourney/' + obj.imgs[2])"
              alt=""
            />
            <span class="smalltit"><a href="#">1301评论 5.0评分 ></a></span>
          </div>
        </div>
      </div>
      <div class="infor">
        <dl class="icon">
          <dd></dd>
          <dd></dd>
          <dd></dd>
          <dd></dd>
        </dl>
        <dl class="sug">
          <dd>游乐地带</dd>
          <dd>建议</dd>
          <dd>适合人群</dd>
          <dd>客流量</dd>
        </dl>
        <dl class="last">
          <dd>{{ obj.playplace }}</dd>
          <dd>{{ obj.sug }}</dd>
          <dd>{{ obj.suitperson }}</dd>
          <dd>{{ obj.tours }}</dd>
        </dl>
      </div>
      <div class="btn">
        <div class="btn1" @click="pushto()">立即收藏</div>
      </div>
    </div>
  </div>
</template>

<script>
// import '../../assets/images/journey/地址 拷贝 8'
import { Dialog } from "vant";
export default {
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
  data() {
    return {
      obj: this.$route.params.obj,
    };
  },
  // computed:mapState([
  //     ''
  // ])
  methods: {
    pushto() {
      Dialog.alert({
        title: "标题",
        message: "弹窗内容",
      }).then(() => {
        this.$store.state.myjor.push(this.obj);
        this.$router.push({ name: "my" });
        // on close
      });
      console.log(this.obj);

      // this.$router.push({name="journeylist"})
    },
    back() {
      this.$router.go(-1);
    },
  },
  mounted() {
    console.log(this.$route.params.obj);
  },
};
</script>

<style lang="scss" scoped>
@import "../../components/common/import.scss";
.smalltit{
  text-align: center;
  font-size: toREM(12);
  a{
    color: skyblue;
  }
}
.banne {
  width: 100%;
  img {
    width: 100%;
    height: toREM(200);
  }
}
.content {
  background: #f8f6f6;
  padding: toREM(10);
  .must {
    border-radius: 15px;
    background: white;
    padding: toREM(5);
    .img {
      display: flex;
      width: 100%;
      justify-content: space-around;
      .item {
        text-align: center;
        width: 60%;
        margin-right: toREM(10);
        &:nth-of-type(2) {
          margin-right: 0;
        }
        img {
          width: 100%;
          height: toREM(100);
        }
      }
    }
  }
  .infor {
    display: flex;
    dl {
      font-size: toREM(12);
      margin-right: toREM(25);
      dd {
        font-size: toREM(14);
        height: toREM(25);
        margin: toREM(20) 0;
        &:nth-of-type(1) {
          height: toREM(40);
          // line-height: toREM(50);
        }
      }
    }
    .icon {
      dd {
        
        width: toREM(25);
        height: toREM(25);
        background: url("../../assets/images/journey/map.png") center 0
          no-repeat;
        background-size: 80%;
      }
    }
    .sug {
      width: toREM(160);
    }
    .last {
      dd {
        &:nth-of-type(1) {
          line-height: inherit;
        }
      }
    }
  }
}
.blue {
  width: 3px;
  height: 12px;
  display: inline-block;
  background: blue;
}
.btn {
  padding: toREM(30);
  .btn1 {
    text-align: center;
    padding: toREM(5) toREM(10);
    background: skyblue;
    border-radius: 10px;
    color: white;
  }
}
.van-nav-bar {
  background: none;
  border-bottom: none;
  /deep/ .van-icon {
    color: #fff;
    font-size: toREM(26);
  }
}
/deep/ .van-nav-bar__left {
  padding: 0 toREM(5);
}
.title{
  font-size: toREM(20);
  font-weight: 600;
}
.price{
  margin: toREM(10) 0;
  font-size: toREM(14);
  color: skyblue;
}
</style>