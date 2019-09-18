<template>
  <div>
    
    <template v-if="loginType === 'username'">
      <div>
        <label>Username</label>
        <input placeholder="Enter your username">
      </div>
    
    </template>
    <template v-else>
      <div>
        <label>Email</label>
        <input placeholder="Enter your email address">
      </div>
    </template>
  </div>
</template>
<!-- v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。-->
<!-- 不推荐同时使用 v-if 和 v-for。-->
<script>
    export default {
        name: "Hi1",
        data(){
          return{
            message:'I am Hi1 page',
            loginType:'username'
          }
        }
    }
</script>

<style scoped>

</style>
