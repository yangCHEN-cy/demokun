<template>
  <div>
    <div class="bigbox">
      <div>
        <van-nav-bar
          :title="mytitle"
          left-text=""
          :right-text="righttext"
          left-arrow
          fixed="true"
          :border="false"
          @click-left="back()"
        />
      </div>
      <div class="banner">
        <img :src="hotel.img" alt="" />
      </div>
      <div class="content">
        <div class="tit">
          <span>{{ hotel.hoteltitle }}</span
          ><span class="price">{{ hotel.price }}.00</span>
        </div>
        <div class="star">⭐⭐⭐⭐⭐</div>
        <div class="infor">
          {{ hotel.detail }}
        </div>
        <div class="icon">
          <div class="item">
            <div class="icon-item">
              <van-icon name="phone" color="#6276fa" />
            </div>

            <div class="text">电话</div>
          </div>
          <div class="item">
            <div class="icon-item">
              <van-icon name="smile-comment" color="#6276fa" />
            </div>

            <div class="text">邮件</div>
          </div>
          <div class="item">
            <div class="icon-item">
              <van-icon name="location" color="#6276fa" />
            </div>

            <div class="text">地址</div>
          </div>
          <div class="item">
            <div class="icon-item">
              <van-icon name="youzan-shield" color="#6276fa" />
            </div>

            <div class="text">官网</div>
          </div>
        </div>
        <h3 style="margin: 30px 0">酒店设施</h3>
        <div class="sheshi">
          <div class="item"><van-icon name="search" />免费wifi</div>
          <div class="item"><van-icon name="video-o" />中央空调</div>
        </div>
        <div class="btn" @click="pushTo()">预定酒店</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotel: [],
    };
  },
  methods: {
    getProjectNum() {
      const projectTime = new Date(); // 当前中国标准时间
      const Year = projectTime.getFullYear(); // 获取当前年份 支持IE和火狐浏览器.
      const Month = projectTime.getMonth() + 1; // 获取中国区月份
      const Day = projectTime.getDate(); // 获取几号
      var CurrentDate = Year;
      if (Month >= 10) {
        // 判断月份和几号是否大于10或者小于10
        CurrentDate += Month;
      } else {
        CurrentDate += "0" + Month;
      }
      if (Day >= 10) {
        CurrentDate += Day;
      } else {
        CurrentDate += "0" + Day;
      }
      return CurrentDate;
    },
    pushTo() {
      alert("预定成功");
      let number = this.getProjectNum() + Math.floor(Math.random() * 10000);
      let hot = this.hotel;
      this.$store.state.myhotel.push({ ...hot, num: number });
      console.log(this.$store.state.myhotel);
    },
    back() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.hotel = this.$store.state.listdata;
    console.log(this.$store.state.listdata);
  },
};
</script>

<style lang="scss" scoped>
@import "../../components/common/import.scss";
.bigbox {
  background: linear-gradient(to bottom right, white, gray 500%);
}
.price {
  color: #6276fa;
  float: right;
}
.banner {
  width: 100%;
  height: toREM(200);
  img {
    width: 100%;
    height: 100%;
  }
}
.icon {
  display: flex;
  width: 100%;
  justify-content: space-around;
  .item {
    width: 20%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .icon-item {
      width: toREM(30);
      height: toREM(30);
      line-height: toREM(35);
      font-size: toREM(25);
      text-align: center;
      //  display: inline-block;
      box-shadow: 1px 1px 1px 1px rgb(199, 198, 198);
      border-radius: 5px;
      padding: toREM(10);
    }
    .text {
      margin: 10px 0;
    }
  }
}
.sheshi {
  display: flex;
  font-size: toREM(20);
  justify-content: space-around;
  line-height: toREM(30);
  .item {
  }
}
.content {
  padding: 20px;
}
.tit {
  padding: 10px 0;
  font-size: 20px;
}

.star {
  padding: 20px 0;
}
.infor {
  padding: 20px 0;
}
.btn {
  margin-top: 20px;
  background: #6276fa;
  text-align: center;
  padding: 20px 0;
  border-radius: 10px;
  color: white;
}
.van-nav-bar {
  background: none;
  border-bottom: none;
  /deep/ .van-icon {
    color: #fff;
    font-size: toREM(26);
  }
}
 .van-nav-bar__left {
  padding: 0 toREM(5);
}