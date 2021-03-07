
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        tour:{
            address:[
                {
                    name:'中国历史文化名城：黄山',
                    id:'安徽0',
                    date:'三天两晚',
                    place:'安徽',
                    price:1000,
                    playplace:'主要是湖中三堤（白堤，苏堤，杨公堤）、北山路沿线、南山路沿线和湖滨地带组成。',
                    sug:'必游景点，聚焦了西湖自然风光和人文景观',
                    suitperson:'以游玩观赏为主',
                    tours:'客流量大',
                    imgs:[
                        '',
                        ''
                    ],
                    
                },
                {
                    name:'中国历史文化名城：黄山',
                    id:'安徽1',
                    date:'三天两晚',
                    place:'安徽',
                    price:1000,
                    playplace:'主要是湖中三堤（白堤，苏堤，杨公堤）、北山路沿线、南山路沿线和湖滨地带组成。',
                    sug:'必游景点，聚焦了西湖自然风光和人文景观',
                    suitperson:'以游玩观赏为主',
                    tours:'客流量大',
                    imgs:[
                        '',
                        ''
                    ],
                    
                },
                {
                    name:'中国历史文化名城：黄山',
                    date:'三天两晚',
                    id:'安徽2',
                    place:'安徽',
                    price:1000,
                    playplace:'主要是湖中三堤（白堤，苏堤，杨公堤）、北山路沿线、南山路沿线和湖滨地带组成。',
                    sug:'必游景点，聚焦了西湖自然风光和人文景观',
                    suitperson:'以游玩观赏为主',
                    tours:'客流量大',
                    imgs:[
                        '',
                        ''
                    ],
                    
                },
                {
                    name:'中国历史文化名城：黄山',
                    date:'三天两晚',
                    id:'深圳1',
                    place:'深圳',
                    price:1000,
                    playplace:'主要是湖中三堤（白堤，苏堤，杨公堤）、北山路沿线、南山路沿线和湖滨地带组成。',
                    sug:'必游景点，聚焦了西湖自然风光和人文景观',
                    suitperson:'以游玩观赏为主',
                    tours:'客流量大',
                    imgs:[
                        '',
                        ''
                    ],
                    
                }
            ]
        },
        islogin:false,
        currplace:'安徽'
    },
    mutations:{
        checklogin(){
            
        }
    },
    getters:{

    }
})
export {store}