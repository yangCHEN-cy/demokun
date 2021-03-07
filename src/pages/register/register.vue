<template>
  <div class="box">
    <login-head></login-head>
    <div class="from">
      <div class="tishi">未注册手机验证后即完成注册</div>
      <div class="phone-box">
        <span
          >+86 <img src="../../assets/images/register/daosan.png" alt=""
        /></span>
        <input v-model="phone" placeholder="请输入您的手机号" type="text" />
      </div>
      <div class="phone-box">
        <input placeholder="请输入验证码" ref="getValue" type="text" />
      </div>
      <van-button
        id="btn"
        :disabled="disabled"
        @click="sendcode"
        round
        type="info"
        size="large"
        >{{ btntxt }}</van-button
      >
      <div>
        <van-button id="btn2" @click="sign" round type="info" size="large"
          >登录</van-button
        >
      </div>
      <div>
        <router-link to="/login">账号密码登录</router-link>
      </div>
    </div>
    <login-foot></login-foot>
    <p class="foot-text">登录注册代表同意《游趣服务协议》和《隐私政策》</p>
  </div>
</template>

<script>
import loginHead from "./login-head";
import loginFoot from "./login-foot.vue";
import { Notify } from "vant";
import {mapMutations} from 'vuex'
export default {
  components: {
    loginHead,
    loginFoot,
  },
  data() {
    return {
      phone: "",
      time: 0,
      disabled: false,
      btntxt: "获取验证码",
      code: "1234",
    };
  },
  methods: {
      ...mapMutations(['checklogin']),
    sendcode() {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.phone == "") {
        Notify({ type: "danger", message: "请输入手机号码" });
      } else if (!reg.test(this.phone)) {
        Notify({ type: "warning", message: "手机格式不正确" });
      } else {
        this.time = 60;
        this.disabled = true;
        this.timer();
        setTimeout(() => {
          let code = "";
          var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
          for (var i = 0; i < 4; i++) {
            var index = Math.floor(Math.random() * 9);
            code += random[index];
          }
          Notify({
            type: "success",
            message: "游趣验证码：" + code,
            duration: "5000",
          });
          console.log(code);
          this.code = code;
        }, 5000);
      }
    },
    timer() {
      if (this.time > 0) {
        this.time--;
        this.btntxt = this.time + "s后重新获取";
        setTimeout(this.timer, 1000);
      } else {
        let num = Math.floor(Math.random() * 9);
        this.time = 0;
        this.btntxt = "获取验证码";
        this.disabled = false;
      }
    },
    sign() {
      if (this.phone == "") {
        Notify({ type: "danger", message: "手机号不能为空！" });
        return;
      }
      if (this.$refs.getValue.value == this.code) {
        sessionStorage.setItem("userName", this.phone);
        Notify({
          type: "success",
          message: "登录成功,即将跳转首页",
          duration: "3000",
        });
        setTimeout(() => {
          this.$router.push("/");
        }, 3000);
        this.$store.commit("checklogin","true")
      } else {
        Notify({ type: "danger", message: "验证码有误,请重新输入！" });
      }
    },
  },
};
</script>

<style lang='scss' scoped>
@import "../../components/common/import.scss";

.box {
  height: 100vh;
  background: url(../../assets/images/register/bg.png) no-repeat;
  background-size: cover;
  color: #f0e8de;
  .foot-text {
    position: fixed;
    bottom: toREM(50);
    padding-left: toREM(18);
    font-size: toREM(14);
    color: #404042;
  }
  .from {
    margin-top: toREM(50);
    padding: 0 toREM(20);
    font-size: toREM(15);
    .phone-box {
      border-radius: toREM(50);
      padding: toREM(15) toREM(20);
      background-color: rgba(255, 255, 255, 0.4);
      img {
        width: toREM(10);
        vertical-align: middle;
      }
      input {
        border: none;
        background: none;
        margin-left: toREM(20);
        &::placeholder {
          color: rgb(212, 209, 209);
        }
      }
    }
    #btn {
      background-color: rgba(255, 255, 255, 0.7);
      border: none;
      color: gray;
      font-size: toREM(18);
    }
    #btn2 {
      background: rgba(25, 137, 250, 0.6);
      border: none;
    }
    .tishi {
      color: #bebdbb;
      font-size: toREM(13);
    }
    & > div {
      margin: toREM(18) 0;
    }
    a {
      color: #f0e8de;
    }
  }
}
</style>