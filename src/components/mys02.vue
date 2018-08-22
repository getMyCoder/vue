<template id="tm01">
  <div>{{$route.params.del}}
     <p>{{arr[$route.params.del]}}</p>
  </div>
</template>
<script>
  export default {
    name: 'my',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        arr:[]
      }
    },
    methods:{
      // mys02页面的ajax
      getAjax(that){
        $.ajax({
          type:"get",
          url:"./static/json/json.json",
          dataType: 'json',
          success:function (data) {
            var res=eval(data);
            that.arr=res['name'];
            console.log(that.arr);
          },
          error:function () {
            alert("数据加载失败！");
          }
        })
      }
    },
    mounted:function () {
      this.getAjax(this);
      console.log(this.$route.params.del);
    },
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
  .iimg{width: 500px; overflow: hidden;height: 300px;background: url("../assets/images/123.jpg");margin: 0 auto;border:1px solid red;}

</style>
