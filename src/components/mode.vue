<template id="tm01">
  <div>

    <router-link v-for="(item,index) in ble" :to="{name:'mys02',params:{del:index}}"><p class="ppp" @mouseenter="mmm(index)" ref="itemsss">{{item}}</p></router-link>
    {{ble}}

    <router-view></router-view>


  </div>
</template>
<script>
  export default {
    props: ["ble"],
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        arr: [],
      }
    },
    methods: {
      getAjax(that) {
        $.ajax({
          type: "get",
          url: "./static/json/json.json",
          dataType: 'json',
          success: function (data) {
            var res = eval(data);
            that.arr = res['name'];
            // console.log(that.arr);
          },
          error: function () {
            alert("数据加载失败！");
          }
        })
      },
      mmm:function (ind) {
        var that=this.$refs.itemsss[ind];
        // $(that).css({"background":"red"})
        // console.log(this.ble);


        // for (var i=0;i<this.$refs.itemsss.length;i++){
        //
        // }
        // this.$refs.itemsss.each(function () {
        //   console.log(this.eq(0));
        // })

        // $.each(this.$refs.itemsss,function (index) {
        //   console.log(this.$refs.itemsss[index].innerHTML);
        // })
        // console.log($);
      }
    },
    created: function() {

    },
    mounted: function () {
      this.getAjax(this);
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  type="text/css">
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

  .iimg {width: 500px; overflow: hidden;height: 300px;background: url("../assets/images/123.jpg");margin: 0 auto;border: 1px solid red;}
.ppp{border:1px solid #ccc;}
</style>
