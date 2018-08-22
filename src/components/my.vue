<template>
  <div class="my">
    {{$route.params.id}}
    <mode></mode>
    <!--<p><router-link to="/mys02">点击1</router-link></p>-->
    <!--<p><router-link to="/mys02">点击2</router-link></p>-->
    <!--<router-view ></router-view>-->
     <!--<p v-for="(itm,index) in $route.params.bll">{{itm}}</p>-->
  </div>
</template>

<script>
import mode from './mode.vue'
export default {
  name: 'my',
  components:{
    "mode":mode,
  },
  data(){
    return {
      message:"山东省济南市",
      vall:"this is father"
    }
  }
}
</script>

<style scoped>
  .my{background: red;}
</style>
