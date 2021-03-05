
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        tour: {
            address: {
                anhui: [
                    {
                        name: '中国历史文化名城：黄山',
                        date: '三天两晚',
                        price: 1000,
                        playplace: '主要是湖中三堤（白堤，苏堤，杨公堤）、北山路沿线、南山路沿线和湖滨地带组成。',
                        sug: '必游景点，聚焦了西湖自然风光和人文景观',
                        suitperson: '以游玩观赏为主',
                        tours: '客流量大',
                        imgs: [
                            '',
                            ''
                        ]
                    }
                ],
                zhejiang: [

                ],
                sichuan: [

                ]
            }
        },
        hotel: {
            adress: {
                data: [
                    {
                        name: "北京",
                    },
                    {
                        name: "上海",
                    },
                    {
                        name: "安徽",
                    },
                ]

            },
        },
        list: [],
        islogin: false,
        valhotellist: "请输入酒店名/关键词",
        valxingadd: "搜索国家/城市，北京/上海",
        valhome: "游记，团购",
        valhomec: "上海 厦门",
    },
    mutations: {
        checklogin() {

        }
    },
    getters: {

    }
})
export { store }