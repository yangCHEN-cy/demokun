<template>
  <div>
    <div class="box">
      <div class="box-qu">
        <span class="stand">下一站趣那儿</span><span class="more">更多</span>
      </div>
      <div class="parentchild">
        <ul>
          <li>
            <div class="parent_you">
              <img src="../../assets/images/journey/top253581.png" alt="" />
            </div>
            <div class="parent_info">
              <div class="parent_h1">亲子好去处</div>
              <div class="parent_tips"><img src="../../assets/images/journey/20210303220706.png" alt=""> 带娃去嗨 </div>
            </div>
            <div class="parent_top">
              <p class="top1">TOP</p>
              <p class="top2">1</p>
            </div>
          </li>
          <li>
            <div class="parent_you">
              <img src="../../assets/images/journey/top253583.png" alt="" />
            </div>
            <div class="parent_info">
              <div class="parent_h1">秋日旅行地</div>
              <div class="parent_tips"><img src="../../assets/images/journey/20210303220706.png" alt=""> 赏人间秋色</div>
            </div>
            <div class="parent_top">
              <p class="top1">TOP</p>
              <p class="top2">2</p>
            </div>
          </li>
          <li>
            <div class="parent_you">
              <img src="../../assets/images/journey/top253582.png" alt="" />
            </div>
            <div class="parent_info">
              <div class="parent_h1">小众目的地</div>
              <div class="parent_tips"><img src="../../assets/images/journey/20210303220706.png" alt=""> 拒绝人满为患</div>
            </div>
            <div class="parent_top">
              <p class="top1">TOP</p>
              <p class="top2">3</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="sandbeach">
        <ul>
          <li>
            <div class="beach_you">
              <img src="../../assets/images/journey/top253584.png" alt="" />
            </div>
            <div class="beach_info">
              <div class="beach_h1">最美沙滩榜</div>
              <div class="beach_tips">让浪花亲吻脚丫</div>
            </div>
            <div class="beach_top">
              <p class="top1">4</p>
            </div>
          </li>
          <li>
            <div class="beach_you">
              <img src="../../assets/images/journey/top253584.png" alt="" />
            </div>
            <div class="beach_info">
              <div class="beach_h1">100元嗨一天</div>
              <div class="beach_tips">超省钱的玩法</div>
            </div>
            <div class="beach_top">
              <p class="top1">5</p>
            </div>
          </li>
          <li>
            <div class="beach_you">
              <img src="../../assets/images/journey/top253584.png" alt="" />
            </div>
            <div class="beach_info">
              <div class="beach_h1">粉红打卡地</div>
              <div class="beach_tips">满足你的少女心</div>
            </div>
            <div class="beach_top">
              <p class="top1">6</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="sandbeach">
        <ul>
          <li>
            <div class="beach_you">
              <img src="../../assets/images/journey/top253585.png" alt="" />
            </div>
            <div class="beach_info">
              <div class="beach_h1">热气球目的地</div>
              <div class="beach_tips">体验特色飞行</div>
            </div>
            <div class="beach_top">
              <p class="top1">7</p>
            </div>
          </li>
          <li>
            <div class="beach_you">
              <img src="../../assets/images/journey/top253585.png" alt="" />
            </div>
            <div class="beach_info">
              <div class="beach_h1">特色客栈</div>
              <div class="beach_tips">刷爆朋友圈</div>
            </div>
            <div class="beach_top">
              <p class="top1">8</p>
            </div>
          </li>
          <li>
            <div class="beach_you">
              <img src="../../assets/images/journey/top253585.png" alt="" />
            </div>
            <div class="beach_info">
              <div class="beach_h1">蜜月出国地</div>
              <div class="beach_tips">全球浪漫胜地</div>
            </div>
            <div class="beach_top">
              <p class="top1">9</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='less'>
.box {
  margin-top: 10px;
  height: 290px;
  border-radius: 10px;
  border: 1px solid #fff;
  background: #fff;
  .box-qu {
    line-height: 40px;
    .stand {
      margin-right: 180px;
    }
    .more {
      margin-left: 40px;
      font-size: 12px;
    }
  }
  .parentchild {
    width: 100%;
    margin-top: -15px;
    ul{
        width: 100%;
        padding: 0px 5px;
    }
    li {
      width: 27%;
      float: left;
      list-style: none;
      margin-right: 20px;
      position: relative;
      .parent_you{
          img{
            width: 118px;
          }
      }
      .parent_info {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 50;
        color: #fff;
        margin-top: 65px;
        width: 118px;
        .parent_h1 {
          font-size: 14px;
          margin-left: -30px;
        }
        .parent_tips {
          font-size: 12px;
          margin-right: 10px;
        }
      }
      .parent_top {
        position: absolute;
        top: -20px;
        left: -168px;
        width: 375px;
        z-index: 50;
        color: #fff;
        margin-top: 20px;
        font-size: 12px;
        .top1 {
          margin-top: 2px;
        }
        .top2 {
          margin-top: -13px;
        }
      }
    }
  }
  .sandbeach {
    width: 100%;
    margin-top: -15px;
    ul{
        width: 100%;
        padding: 0px 5px;
    }
    li {
      width: 27%;
      float: left;
      list-style: none;
      margin-right: 20px;
      position: relative;
      .beach_you{
          img{
            width: 118px;
            height: 60px;
          }
      }
      .beach_info {
        position: absolute;
        top: 0;
        left: 0px;
        z-index: 50;
        width: 118px;
        padding: 12px 0px;
        .beach_h1 {
          font-size: 15px;
          margin-left: 12px;
          color: #000;
        }
        .beach_tips {
          font-size: 12px;
          margin-left: 13px;
          color: #555;
        }
      }
      .beach_top {
        position: absolute;
        top: -20px;
        left: -168px;
        width: 375px;
        z-index: 50;
        color: #fff;
        margin-top: 20px;
        font-size: 16px;
        .top1 {
          margin-top: 2px;
          margin-right: 15px;
        }
      }
    }
  }
}
</style>