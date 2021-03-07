<template>
  <div class="box">
    <login-head></login-head>
    <div class="from">
      <div class="phone-box">
        <input v-model="phone" placeholder="请输入手机号" type="text" />
      </div>
      <div class="phone-box">
        <input
          v-model="pwds"
          placeholder="请输入密码"
          :type="ispwd ? 'password' : 'text'"
        />
        <img @click="pwd" src="../../assets/images/register/eye.png" alt="" />
      </div>
      <van-button id="btn" @click="sign" round type="info" size="large" color='#1989fa'
        >登录</van-button
      >
      <div class="text">
        <router-link to="/register">验证码登录</router-link>
        <router-link to="">忘记密码</router-link>
      </div>
    </div>
    <login-foot></login-foot>
  </div>
</template>

<script>
import loginHead from "../register/login-head";
import loginFoot from "../register/login-foot.vue";
import { Notify } from "vant";
import {mapMutations} from 'vuex'

export default {
  components: {
    loginHead,
    loginFoot,
  },
  data() {
    return {
      ispwd: true,
      phone: "",
      pwds:''
    };
  },
  methods: {
      ...mapMutations(['checklogin']),
    pwd() {
      this.ispwd = !this.ispwd;
    },
    sign() {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.phone == "" || this.pwd == '') {
        Notify({ type: "danger", message: "请输入账号或密码" });
      } else if (!reg.test(this.phone)) {
        Notify({ type: "warning", message: "手机格式不正确" });
      }else{
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
      }
    },
  },
};
</script>

<style lang='scss' scoped>
@import "../../components/common/import.scss";

.box {
  height: 100vh;
  background: url(../../assets/images/register/login-bg.jpg) no-repeat;
  background-size: cover;
  color: #777778;
  a {
    color: #fff;
  }
  .from {
    margin-top: toREM(70);
    padding: 0 toREM(20);
    font-size: toREM(15);
    #btn {
      background-color: rgba(255, 255, 255, 0.7);
      border: none;
      color: gray;
      font-size: toREM(18);
    }
    .text {
      display: flex;
      justify-content: space-between;
      padding: toREM(10) toREM(15);
    }
  }
  .phone-box {
    border-radius: toREM(50);
    padding: toREM(15) toREM(10);
    background-color: rgba(255, 255, 255, 0.4);
    margin: toREM(20) 0;
    position: relative;
    img {
      width: toREM(20);
      vertical-align: middle;
      position: absolute;
      right: toREM(20);
      top: toREM(20);
    }
    input {
      border: none;
      background: none;
      margin-left: toREM(20);
      &::placeholder {
        color: rgb(231, 229, 229);
      }
    }
  }
}
</style>