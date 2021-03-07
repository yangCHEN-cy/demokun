<template>
  <div>
    <!-- 头部 -->
    <div>
      <!-- {{this.$route.params}} -->
    </div>
    <!-- 轮播图 -->
    <div></div>
    <div class="content">
      <div class="title"><span>我是地址</span>丨<span>3天2晚</span></div>
      <div>￥1000/人</div>
      <div class="must">
        <div><span class="blue"></span> 必玩区</div>
        <div class="img">
          <div class="item">
            <img src="../../assets/images/journey/shanghai.png" alt="" />
            <span>开放时间/优待政策</span>
          </div>
          <div class="item">
            <img src="../../assets/images/journey/shanghai.png" alt="" />
            <span>开放时间/优待政策</span>
          </div>
        </div>
        
      </div>
      <div class="infor">
          <dl class="icon">
            <dd></dd>
            <dd></dd>
            <dd></dd>
            <dd></dd>
          </dl>
          <dl class="sug">
            <dd>游乐地带</dd>
            <dd>建议</dd>
            <dd>适合人群</dd>
            <dd>客流量</dd>
          </dl>
          <dl class="last">
            <dd>游乐地带游乐地带游乐地带游乐地带
                游乐地带游乐地带
            </dd>
            <dd>建议</dd>
            <dd>适合人群</dd>
            <dd>客流量</dd>
          </dl>
        </div>
        <div class="btn">
            <div  class="btn1">
                立即收藏
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// import '../../assets/images/journey/地址 拷贝 8'
export default {
  // computed:mapState([
  //     ''
  // ])
};
</script>

<style lang="scss" scoped>
@import "../../components/common/import.scss";
.content {
  background: #e7e7e7;
  padding: toREM(10);
  .must {
    border-radius: 15px;
    background: white;
    padding: toREM(5);
    .img {
      display: flex;
      width: 100%;
      justify-content: space-around;
      .item {
        width: 60%;
        margin-right: toREM(10);
        &:nth-of-type(2) {
          margin-right: 0;
        }
        img {
          width: 100%;
          height: toREM(100);
        }
      }
    }

  }
      .infor{
        display: flex;
        dl{
            font-size: toREM(12);
            margin-right:toREM(25) ;
            dd{
                height: toREM(25);
                margin: toREM(5) 0;
                &:nth-of-type(1){
                    height: toREM(40);
                    // line-height: toREM(50);
                }
            }
        }
        .icon{
            dd{
                width:toREM(25) ;
                height: toREM(25);
                background:url('../../assets/images/journey/map.png') center 0 no-repeat;
                background-size: 80%;
                
            }
        }
        .sug{
            width: toREM(140);
            
        }
        .last{
            dd{
                &:nth-of-type(1){
                    
                    line-height: inherit;
                }
            }
        }
    }
}
.blue{
    width: 3px;
    height: 12px;
    display: inline-block;
    background: blue;
}
.btn{
    padding: toREM(30);
    .btn1{
        border: 1px solid gray;
        text-align: center;
        padding:  toREM(5) toREM(10);
        background: white;
        border-radius: 10px;
    }
}
</style>