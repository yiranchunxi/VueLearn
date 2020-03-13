<template>
  <div class="about">
    <cube-button @click="showDialog">show dialog</cube-button>
  </div>
</template>
<script>
  export default {
        methods:{
          showDialog(){
            this.$createDialog({
              type: 'alert',
               title: 'Alert',
              content: 'dialog content'
            }).show()
          }
        }
      }
</script>
<style type="text/css">
  div{

  }
</style>
