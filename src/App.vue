<template>
  <div id="app">
    <img src="./assets/logo.png">

    <div>
    <!--  <router-link to="/">首页</router-link>
      <router-link to="/hi">Hi页面</router-link>
      <router-link to="/hi/hi1">Hi1页面</router-link>
      <router-link to="/hi/hi2">Hi2页面</router-link>-->
      <div>
        <button @click="goBack">后退</button>
        <button @click="goGo">前进</button>
        <button @click="goHome">返回主页</button>
      </div>
      
      <router-link to="/">首页</router-link>
      <router-link to="/hi">Hi页面</router-link>
      <router-link :to="{name:'hi1',params:{username:'JSPang',id:'888'}}">Hi1页面</router-link>
      <router-link to="/hi/hi2">Hi2页面</router-link>
      <router-link to="/params/198/jspang website is very good">params</router-link>
      <router-link to="/goHome">goHome</router-link>
      <router-link to="/goParams/918/I like vue.js">goParams</router-link>
      <router-link to="/navbar">导航栏</router-link>
      <router-link to="/edittext">编辑文本实例</router-link>
      <router-link to="/orders">订单列表实例</router-link>
      <router-link to="/search">搜索页面实例</router-link>
      <router-link to="/switchlayout">切换不同布局实例</router-link>
      <router-link to="/Instructions">自定义指令</router-link>
      <router-link to="/Ball">小球动画</router-link>
      <router-link to="/Comment">评论组件</router-link>
      <router-link to="/Metting">会议纪要</router-link>
    </div>
    <p>{{$route.name}}</p>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <router-view name="left" style="float: left;width: 50%;height: 1000px;background-color: cadetblue"/>
    <router-view name="right" style="float: left;width: 50%;height:1000px;background-color: darkmagenta"/>
  </div>
</template>

<script>
export default {
  
  name: 'App',
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    goGo(){
      this.$router.go(1)
    },
    goHome(){
      this.$router.push('/')
    },
  }
}
</script>

<style>
/**
html * {
    outline: 1px solid red
}
*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave-to{
  opacity: 0;
}
.fade-leave-active{
  transition: opacity 0.5s;
}
</style>
