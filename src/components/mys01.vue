<template>
  <div class="my">
    <h1>{{message}}</h1>
    <button @click="deg">跳转</button>
    <p v-for="(items,index) in arr">{{items}}</p>
  </div>
</template>
<script>
  // import {getAjax} from './../assets/js/myself'

  export default {
    name: 'my',
    data() {
      return {
        message: "hello",
        arr: []
      }
    },
    methods: {
      deg() {
        this.$router.push('/mys02')
      },
      add() {

        // this.axios({
        //   method: 'post',
        //   url : 'http://192.168.1.55:8088/Home/TestData2',
        //   data: {"name":"aa","like":"asd"},
        //   headers: {'X-Requested-With': 'XMLHttpRequest'},
        // }).then(function (response) {
        //   console.log(response.data);
        // }).catch(function (error) {
        //   console.log(error);
        // });


        // $.ajax({
        //   type:'get',
        //   url:'./static/json/json.php',
        //   success:function(data){
        //     console.log(data);
        //   }
        // })






        // this.$http({
        //   method: 'get',
        //   url: './static/json/json.json',
        //   data: {
        //
        //   }
        // }).then(function (response) {
        //   console.log(response.data.name);
        // })


        // var that = this;
        // this.$fetch('./static/json/json.json').then(function (response) {
        //   that.arr = response.name
        // })
      }
    },
    mounted: function () {
      this.add();
    },
  }
</script>

<style scoped>

</style>


