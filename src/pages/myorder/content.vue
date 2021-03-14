<template>
 <div>
  <nohave v-show="isshow"></nohave>
  <dangdan v-show="!isshow"></dangdan>
 </div>
 
</template>

<script>
import nohave from './nohave'
import dangdan from './dangdan'
import Nohave from './nohave.vue'
import Dangdan from './dangdan.vue'
export default {
    data(){
        return{
          isshow:true
        }
    },
   mounted(){
       console.log("myhotel:",this.$store.state.myhotel);
        if (this.$store.state.myhotel.length>0) {
            this.isshow = !this.isshow
        }
    },
    components:{nohave,dangdan}
}
</script>

<style>

</style>