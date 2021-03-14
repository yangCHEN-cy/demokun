import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let router = new Router({
  routes: [{
      path: '/',
      name: 'home', //首页
      component: () => import('../pages/homepage/homepage'),
      children: [{
          path: '/remen',
          component: () => import('../pages/homepage/remen.vue')
        },
        {
          path: '/',
          component: () => import('../pages/homepage/remen.vue')
        },
        {
          path: '/ziyou',
          component: () => import('../pages/homepage/ziyou.vue')
        },
        {
          path: '/mingsu',
          component: () => import('../pages/homepage/mingsu.vue')
        }
      ]
    },
    {
      path: '/home',
      name: 'home', //首页
      component: () => import('../pages/homepage/homepage'),
      children: [{
          path: '/remen',
          component: () => import('../pages/homepage/remen.vue')
        },
        {
          path: '/',
          component: () => import('../pages/homepage/remen.vue')
        },
        {
          path: '/ziyou',
          component: () => import('../pages/homepage/ziyou.vue')
        },
        {
          path: '/mingsu',
          component: () => import('../pages/homepage/mingsu.vue')
        }
      ],
    },
    {
      path: '/login',
      name: 'login', //登录
      component: () => import('../pages/login/login')
    },
    {
      path: '/register',
      name: 'register', //注册
      component: () => import('../pages/register/register')
    },
    {
      path: '/set',
      name: 'set', //设置
      component: () => import('../pages/set/set')
    },
    {
      path: '/addjourney',
      name: 'addjourney', //添加行程
      component: () => import('../pages/addjourney/addjourney')
    },
    {
      path: '/hotellist',
      name: 'hotellist', //酒店列表
      component: () => import('../pages/hotellist/hotellist')
    },
    {
      path: '/hotel',
      name: 'hotel', //酒店详情
      component: () => import('../pages/hotel/hotel')
    },
    {
      path: '/hotelsearch',
      name: 'hotelsearch', //酒店搜索
      component: () => import('../pages/hotelsearch/hotelsearch')
    },

    {
      path: '/journeyinfor',
      name: 'journeyinfor', //行程详情
      component: () => import('../pages/journeyinfor/journeyinfor')
    },
    {
      path: '/my',
      name: 'my', //我的页面
      component: () => import('../pages/my/my'),
      children: [{
          path: '',
          component: () => import("@/pages/my/myyj")
        },
        {
          path: 'myyj',
          component: () => import("@/pages/my/myyj")
        },
        {
          path: 'mysp',
          component: () => import("@/pages/my/mysp")
        },
        {
          path: 'mywd',
          component: () => import("@/pages/my/mywd")
        },
      ]
    },
    {
      path: '/journeylist',
      name: 'journeylist', //行程列表
      component: () => import('../pages/journeylist/journeylist')
    },
    {
      path: '/myjourney',
// <<<<<<< HEAD
      name: 'myjourney',//我的行程
      component: () => import('../pages/myjourney/myjourney'),
      children:[
        {path:'',component:()=>import("@/pages/myjourney/didian")},
        {path:'didian',component:()=>import("@/pages/myjourney/didian")},
        {path:'zhuanti',component:()=>import("@/pages/myjourney/zhuanti")},
        {path:'huodong',component:()=>import("@/pages/myjourney/huodong")},
        {path:'xianlu',component:()=>import("@/pages/myjourney/xianlu")},
      ]
// =======
      // name: 'myjourney', //我的行程
      // component: () => import('../pages/myjourney/myjourney')
// >>>>>>> 3c71aa84078402885af95c0665da64f59e4ccaae
    },
    {
      path: '/myorder',
      name: 'myorder', //我的订单
      component: () => import('../pages/myorder/myorder'),
      children: [{
          path: "",
          component: () => import("../pages/myorder/content")
        },
        {
          path: "/content",
          component: () => import("../pages/myorder/content")
        }
      ]
    },
    {
      path: '/journey',
      name: 'journey', //行程页
      component: () => import('../pages/journey/journey')
    },
  ]

})


export default router;
