<template>
  <div class="bg">
    <myhead mytitle="设置"></myhead>
    <div class="list-box">
      <van-cell value="" is-link>
        <template #title>
          <span class="custom-title">账号与安全</span>
        </template>
      </van-cell>
      <van-cell value="" is-link>
        <template #title>
          <span class="custom-title">隐私设置</span>
        </template>
      </van-cell>
    </div>
    <div class="list-box">
      <van-cell value="" is-link>
        <template #title>
          <span class="custom-title">通知设置</span>
        </template>
      </van-cell>
      <van-cell value="" is-link>
        <template #title>
          <span class="custom-title">通用设置</span>
        </template>
      </van-cell>
      <van-cell value="" is-link>
        <template #title>
          <span class="custom-title">功能申请</span>
        </template>
      </van-cell>
    </div>
    <div class="list-box">
      <van-cell value="未开启" is-link>
        <template #title>
          <span class="custom-title">青少年模式</span>
        </template>
      </van-cell>
      <van-cell center title="暗色模式跟随系统设置">
        <template #right-icon>
          <van-switch v-model="checked" active-color="#22ac38" size="24" />
        </template>
      </van-cell>
    </div>
    <div class="list-box">
      <van-cell value="" is-link>
        <template #title>
          <span class="custom-title">帮助与客服</span>
        </template>
      </van-cell>
      <van-cell value="" is-link>
        <template #title>
          <span class="custom-title">意见反馈</span>
        </template>
      </van-cell>
      <van-cell value="" is-link>
        <template #title>
          <span class="custom-title">关于游趣</span>
        </template>
      </van-cell>
    </div>
    <div class="list-box">
      <van-button type="default" @click="dleUser" block>退出登录</van-button>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
import { Toast } from "vant";
import { mapMutations } from "vuex";
import myhead from '../../components/header/header-normal'
export default {
  components:{myhead},
  data() {
    return {
      checked: true,
    };
  },
  methods: {
    ...mapMutations(["checklogin"]),
    dleUser() {
      Dialog.confirm({
        title: "退出登录",
        message: "确认退出登录吗？",
      })
        .then(() => {
          Toast.success("退出成功");
          this.$store.commit("checklogin", "false");
          sessionStorage.removeItem("userName");
          this.$router.push('/')
        })
        .catch(() => {
            
        });
    },
  },
};
</script>

<style lang='scss' scoped>
@import "../../components/common/import.scss";
.list-box {
  padding-top: toREM(20);
}
.bg {
  height: 100vh;
  background: #e7e7e7;
}
.van-cell {
  border-bottom: 1px solid gainsboro;
}
.custom-title {
  margin-right: toREM(15);
  vertical-align: middle;
  font-size: toREM(16);
  font-weight: 600;
}
.van-cell__title,
.van-button--normal {
  font-size: toREM(16);
  font-weight: 600;
}
.van-cell__right-icon {
  font-size: toREM(20);
  color: black;
}
</style>