<template>
  <div class="butt">
    <button class="btn">创建路线(已选0个城市)</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
@import "../../components/common/import.scss";
.butt{
    width: 100%;
    height: toREM(40);
    margin-top: toREM(350);
    border-bottom: 1px solid #dadada;
     text-align: center;
    .btn{
        width: toREM(185);
        line-height: toREM(25);
        color: #258dc5;
        border: 1px solid #258dc5;
        border-radius: toREM(10);
        background: #fff;
        margin-top: toREM(-60);
    }
}
</style>