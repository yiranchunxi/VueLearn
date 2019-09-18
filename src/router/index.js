import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Left from '@/components/Left'
import Right from '@/components/Right'
import Params from '@/components/Params'
import Error from '@/components/Error'
import Count from '@/components/Count'
import NavBar from '@/components/NavBar'
import EditText from '@/components/EditText'
import Orders from '@/components/Orders'
import Search from '@/components/Search'
import SwitchLayout from '@/components/SwitchLayout'
import Instructions from '@/components/Instructions'
import Ball from '@/components/Ball'
import Comment from '@/components/Comment'
import Metting from '@/components/Metting'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: {
        default:HelloWorld,
        left:Left,
        right:Right
      }
    },
    {
      path:'/Hi',
      component:Hi,
      children:[
     
        {path:'hi1',name:'hi1', component:Hi1},
        {path:'hi2',name:'hi2', component:Hi2},
      ]
    },
    {
      path:'/params/:newsId/:newsTitle',  //path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params,
      /*beforeEnter:(to,from,next)=>{
        console.log(to);
        console.log(from);
        next();
      }*/
    },
    {
      path:'/goHome',
      redirect:'/'
    },
    {
       path:'/goParams/:newsId/:newsTitle',
       redirect: '/params/:newsId/:newsTitle'
    },
    {
      path:'*',
      component:Error
    },
    {
      path:'/count',
      component:Count
    },
    {
      path:'/navbar',
      component:NavBar
    },
    {
      path:'/edittext',
      component:EditText
    },
    {
      path:'/orders',
      component:Orders
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/switchlayout',
      component:SwitchLayout
    },
    {
      path:'/Instructions',
      component:Instructions
    },
    {
      path:'/Ball',
      component:Ball
    },
    {
      path:'/Comment',
      component:Comment
    },
    {
      path:'/Metting',
      component:Metting
    }
  ]
})
