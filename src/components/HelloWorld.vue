<template>
  <div class="hello">

    <!--<img src="./assets/logo.png">-->
    <!--{{$route.name}}-->
    <p class="title-p">
      <span><router-link to="/"><button class="btn btn-info">首页</button></router-link></span>
      <span><router-link to="/params"><button class="btn btn-info">my页面</button></router-link></span>
      <span><router-link :to="{name:'my',params:{id:'ble'}}"><button class="btn btn-info">my页面my</button></router-link></span>
      <span><router-link to="/mys01"><button class="btn btn-info">my页面mys01</button></router-link></span>
      <span><router-link to="/mys03"><button class="btn btn-info">my页面mys03</button></router-link></span>
      <span><button class="btn btn-info" @click="fun4('afasdf')">my页面mys04</button></span>
      <span><button class="btn btn-info" @click="fun5('afasdf')">my页面mys05</button></span>
    </p>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <h1>{{ msg }}</h1>
    <div v-for="(item,index) in $route.meta" key="index">{{item}}</div>
    <div v-for="(item,index) in msg" @click="fun(item)">{{item}}</div>
    <mode :ble="ble"></mode>
  </div>

</template>

<script>


  import mode from './mode.vue'
  export default {

    components:{
      "mode":mode,
    },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      ble:"This is ABC"
    }
  },
  methods:{
    fun4:function (id) {
      this.$router.push({
        name:'mys04',
        params:{
          id:id
        },
        target:"_blank"
      })
    },
    fun5:function (id) {
      this.$router.push({
        path:`/mys05/${id}`
      })
    }
  },
    created:function () {
      var that=this;
      this.$http.get('./static/json/json.json').then(function (response) {
        that.ble=response.data.dress;
        that.msg=response.data.dress;
      })
    },
    mounted:function () {
      console.log(this.ble);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
