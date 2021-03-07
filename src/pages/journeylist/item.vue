<template>
  <div>
    <div class="item" @click="pushto(index1)">
      <div class="content">
        <div class="tab">
          <span>精选一</span>
          <span>风光</span>
          <span>话题</span>
        </div>
        <div class="box">
            <h2>{{newarr[index1].name}}</h2>
            <div>
                {{newarr[index1].playplace}}
            </div>
            <div class="img">

            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['newarr','index1'],
    data(){
        return{
            currplace:'安徽'
        }
    },
    mounted(){
        console.log(this.newarr);
    },
    methods:{
        pushto(val){
            console.log(val);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../components/common/import.scss";
.item {
  border-bottom: 1px solid gray;
  .content {
    padding: toREM(20) toREM(10);
  }
}
</style>