// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {store} from './store/store'
import router from './router'
import VueLazyload from 'vue-lazyload'
import Vuex from 'vuex'
import Vant from 'vant';
import 'vant/lib/index.css';
import './components/common/common_css.scss'
Vue.use(Vant);
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    this.$store.state.title = to.meta.title
  }
  next()
})
