<template>
    <div>
        <a href="#" @click.prevent="layout='login'">登录</a>
        <a href="#" @click.prevent="layout='register'">注册</a>
        <transition  mode="out-in">
               <component :is="layout"></component> 
        </transition>
    </div>
</template>
<script>
    import Vue from 'vue'
    const login=Vue.extend({
        template:`<div><h3>登录组件</h3></div>`
    })
    Vue.component('login',login)

    const register=Vue.extend({
        template:`<div><h3>注册组件</h3></div>`
    })
    Vue.component('register',register)
    export default {
        name:'SwitchLayout',
        data() {
            return {
                layout:'login',
            }
        },
    }
</script>
<style>
   .v-enter,
    .v-leave-to {
      opacity: 0;
      transform: translateX(30px);
    }

    .v-enter-active,
    .v-leave-active {
      transition: all 0.3s ease;
    }

    h3{
      margin: 0  auto;
    }
</style>