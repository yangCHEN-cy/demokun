<template>
  <div>
    <div class="title">
      <van-nav-bar
        
        left-text="返回"
        
        left-arrow

      />
    </div>
    <div>
      <!-- {{this.$route.params}} -->
    </div>
    <!-- 轮播图 -->
    <div></div>
    <div class="content">
      <div class="title">
        <span>{{ obj.name }}</span
        >丨<span>{{ obj.date }}</span>
      </div>
      <div>￥{{ obj.price }}/人</div>
      <div class="must">
        <div><span class="blue"></span> 必玩区</div>
        <div class="img">
          <div class="item">
            <img src="../../assets/images/journey/shanghai.png" alt="" />
            <span>开放时间/优待政策</span>
          </div>
          <div class="item">
            <img src="../../assets/images/journey/shanghai.png" alt="" />
            <span>开放时间/优待政策</span>
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
export default {
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
      alert('收藏成功')
      console.log(this.obj);
      this.$store.state.myjor.push(this.obj)
        this.$router.push({name:'my'})
      // this.$router.push({name="journeylist"})
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../components/common/import.scss";
.content {
  background: #e7e7e7;
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
        height: toREM(25);
        margin: toREM(5) 0;
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
      width: toREM(140);
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
    border: 1px solid gray;
    text-align: center;
    padding: toREM(5) toREM(10);
    background: white;
    border-radius: 10px;
  }
}
.van-nav-bar {
  background: none;
  /deep/ .van-icon {
    color: #fff;
    font-size: toREM(26);
  }
}
/deep/ .van-nav-bar__left {
  padding: 0 toREM(5);
}
</style>