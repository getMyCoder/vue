<template>
    <div>
       {{message}}<br/>
       {{$route.params.id}}
    </div>
</template>

<script>
  // import { daT } from './../assets/js/myself'
  export default {
    name: 'mys04',
    data() {
      return {
        message: "hello"
      }
    },
    methods:{

    },
    mounted:function () {

    }
  }
</script>

<style scoped>

</style>
