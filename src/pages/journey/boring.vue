<template>
  <div>
    <div class="box">
      <div class="box-qu">
        <span class="stand">下一站趣那儿</span><span class="more">更多</span>
      </div>
      <div class="parentchild">
        <ul>
          <li v-for="(item, index) in data" :key="index">
            <div class="parent_you">
              <img :src="require('../../assets/images/journey/' + item.img)" alt="" />
            </div>
            <div class="parent_info">
              <div class="parent_h1">{{item.name}}</div>
              <div class="parent_tips">
                <img :src="require('../../assets/images/journey/' + item.imgg)" alt=""> 
                {{item.nameh}} 
              </div>
            </div>
            <div class="parent_top">
              <p class="top1">{{item.top}}</p>
              <p class="top2">{{item.num}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="sandbeach">
        <ul>
          <li v-for="(item, index) in nav" :key="index">
            <div class="beach_you">
              <img :src="require('../../assets/images/journey/' + item.img)" alt="" />
            </div>
            <div class="beach_info">
              <div class="beach_h1">{{item.name}}</div>
              <div class="beach_tips">{{item.nameh}}</div>
            </div>
            <div class="beach_top">
              <p class="top1">{{item.num}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="sandbeach">
        <ul>
          <li v-for="(item, index) in nav1" :key="index">
            <div class="beach_you">
              <img :src="require('../../assets/images/journey/' + item.img)" alt="" />
            </div>
            <div class="beach_info">
              <div class="beach_h1">{{item.name}}</div>
              <div class="beach_tips">{{item.nameh}}</div>
            </div>
            <div class="beach_top">
              <p class="top1">{{item.num}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
      data: [
        { 
          img: "top253581.png",
          imgg: "20210303220706.png",
          name: "亲子好去处",
          nameh: "带娃去嗨",
          top: "TOP",
          num: "1"
        },
        { 
          img: "top253583.png",
          imgg: "20210303220706.png",
          name: "秋日旅行地",
          nameh: "赏人间秋色",
          top: "TOP",
          num: "2"
        },
        { 
          img: "top253582.png",
          imgg: "20210303220706.png",
          name: "小众目的地",
          nameh: "拒绝人满为患",
          top: "TOP",
          num: "3"
        },
      ],
      nav: [
         { 
          img: "top253584.png",
          name: "最美沙滩榜",
          nameh: "让浪花亲吻脚丫",
          num: "4"
        },
        { 
          img: "top253584.png",
          name: "100元嗨一天",
          nameh: "超省钱的玩法",
          num: "5"
        },
        { 
          img: "top253584.png",
          name: "粉红打卡地",
          nameh: "满足你的少女心",
          num: "6"
        },
      ],
      nav1: [
         { 
          img: "top253585.png",
          name: "热气球目的地",
          nameh: "体验特色飞行",
          num: "7"
        },
        { 
          img: "top253585.png",
          name: "特色客栈",
          nameh: "刷爆朋友圈",
          num: "8"
        },
        { 
          img: "top253585.png",
          name: "蜜月出国地",
          nameh: "全球浪漫胜地",
          num: "9"
        },
      ]
    };
  },
};
</script>

<style scoped lang='scss'>
@import '../../components/common/import.scss';
.box {
  margin-top: toREM(10);
  height: toREM(290);
  border-radius: toREM(10);
  border: 1px solid #fff;
  background: #fff;
  .box-qu {
    line-height: toREM(40);
    .stand {
      margin-left: toREM(10);
    }
    .more {
      margin-left: toREM(230);
      font-size: toREM(12);
    }
  }
  .parentchild {
    width: 100%;
    margin-top: toREM(-5);
    ul{
        width: 100%;
        padding: toREM(0) toREM(5);
    }
    li {
      width: 27%;
      float: left;
      list-style: none;
      margin-right: toREM(20);
      position: relative;
      .parent_you{
          img{
            width: toREM(118);
          }
      }
      .parent_info {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 50;
        color: #fff;
        margin-top: toREM(60);
        width: toREM(118);
        .parent_h1 {
          font-size: toREM(14);
          margin-left: toREM(10);
        }
        .parent_tips {
          font-size: toREM(12);
          margin-left: toREM(8);
          
        }
      }
      .parent_top {
        position: absolute;
        top: toREM(0);
        left: toREM(0);
        width: toREM(375);
        z-index: 50;
        color: #fff;
        margin-top: toREM(20);
        font-size: toREM(12);
        .top1 {
          margin-top: toREM(-20);
          margin-left: toREM(5);
        }
        .top2 {
          margin-top: toREM(-2);
          margin-left: toREM(13);
        }
      }
    }
  }
  .sandbeach {
    width: 100%;
    margin-top: toREM(-15);
    ul{
        width: 100%;
        padding: toREM(0) toREM(5);
    }
    li {
      width: 27%;
      float: left;
      list-style: none;
      margin-right: toREM(20);
      position: relative;
      .beach_you{
          img{
            width: toREM(118);
            height: toREM(60);
          }
      }
      .beach_info {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 50;
        width: toREM(118);
        padding: toREM(12) toREM(0);
        .beach_h1 {
          font-size: toREM(15);
          margin-left: toREM(20);
          text-align: center;
          color: #000;
        }
        .beach_tips {
          font-size: toREM(12);
          margin-left: toREM(18);
          color: #555;
          text-align: center;
        }
      }
      .beach_top {
        position: absolute;
        top: 0;
        left: 0;
        width: toREM(375);
        z-index: 50;
        color: #fff;
        margin-top: toREM(20);
        font-size: toREM(16);
        .top1 {
          margin-top: toREM(-18);
          margin-left: toREM(8);
        }
      }
    }
  }
}
</style>