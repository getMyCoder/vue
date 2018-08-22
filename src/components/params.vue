<template>
  <div class="params">
    <h1>{{message}}</h1>
    <h2 @mouseenter ="sss()">标题：{{$route.params.titS}}</h2>
    <h2>内容：{{$route.params.conS}}</h2>asdfasdf
    <router-link to="./mys01" style="background:#fff;">ccc</router-link>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'params',
  data(){
    return {
      message:"山东省济南市"
    }
  },
  methods:{
    sss:function () {
      console.log(1);
    }
  }
}
</script>

<style scoped>
.params{background: green;}
</style>
