<template>
  <div id="app">
    <!--<button class="btn btn-info">后退</button>-->
    <!--<button class="btn btn-info">前进</button>-->
    <!--<button class="btn btn-info">某一个页面</button>-->
    <!--&lt;!&ndash;<img src="./assets/logo.png">&ndash;&gt;-->
    <!--&lt;!&ndash;{{$route.name}}&ndash;&gt;-->
    <!--<p class="title-p">-->
      <!--<span><router-link to="/">首页</router-link></span>-->
      <!--<span><router-link to="/params">my页面</router-link></span>-->
      <!--<span><router-link to="/my">my页面my</router-link></span>-->
    <!--</p>-->
    <!--<transition name="fade" mode="out-in">-->
       <router-view></router-view>
    <!--</transition>-->


  </div>
</template>

<script>
export default {

  name: 'App',

  data(){
    return{
      arr:''
    }
  },

}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .title-p{text-align: center;margin: 0 auto;}
  .title-p span{padding: 0 15px;}

.fade-enter { opacity:0;}
.fade-leave{opacity:1;}
.fade-enter-active{transition:opacity .5s;}
.fade-leave-active{opacity:0;transition:opacity .5s;}
</style>
