<template>
  <div>
      <div>
          0
          <router-link to="journeyinfor">home</router-link>
          <button @click="fn()">跳转</button>
      </div>
  </div>
</template>

<script>
export default {
methods:{
    fn(){
        this.$router.push({name:'journeyinfor',params:{aaa:'111'}})
    }
}
}
</script>

<style>

</style>