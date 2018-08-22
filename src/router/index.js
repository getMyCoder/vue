import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import my from '@/components/my'
import mys01 from '@/components/mys01'
import mys02 from '@/components/mys02'
import mys03 from '@/components/mys03'
import mys04 from '@/components/mys04'
import mys05 from '@/components/mys05'
import error from '@/components/error'

import params from '@/components/params'

Vue.use(Router)

export default new Router({
  // mode:"history",
  // linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:['HelloWorld']
    },
    {
      path: '/my/:id',
      name: 'my',
      component: my,
      // children:[
      //   {path: '/mys01',component: mys01},
      //   {path: '/mys02',component: mys02}
      // ]
    },
    {
      path: '/params',
      name: 'params',
      component: params,
      // beforeEnter:(to,from,next)=>{
      //   console.log("I inter");
      //   console.log(to);
      //   console.log(from);
      //   next()
      // }
      meta:['params']
    },
    {
      path: '/mys02/:del',
      name: 'mys02',
      component: mys02,
      meta:['mys02']
    },
    {
      path: '/mys01',
      name: 'mys01',
      component: mys01,
      meta:['mys01']
    },
    {
      path:'/mys03',
      name:'mys03',
      component:mys03
    },
    {
      path:'/mys04',
      name:'mys04',
      component:mys04
    },
    {
      path:'/mys05/:id',
      name:'mys05',
      component:mys05
    }
  ]
})
