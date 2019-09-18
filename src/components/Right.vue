<template>
    <div>
        <h2>{{message}}</h2>
          <div :style="{ fontSize: postFontSize + 'em' }">
              <blog-post v-for="post in posts" v-bind:key="post.id"  :post="post"  @enlarge-text="onEnlargeText"/> 
          </div>
          <alert-box>
            Something bad happened.
          </alert-box>

          <base-input v-on:input="focused"></base-input>

          <div class="slots">
              slot的用法
              <SlotChild>
               
                  <div class="no-name">我是嵌在子组件内不具有属性名的标签</div>
              </SlotChild>
          </div>
          <div>
            <button @click="toggle">toggle</button>
            <transition name="my">
              <p v-if="show">hello</p>
            </transition>

            <transition name="bounce">
              <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
            </transition>
          </div>
          
          
    </div>
  
</template>
<!--  一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝：-->
<!-- 
data: {
  count: 0
}
data: function () {
  return {
    count: 0
  }
}
-->
<!-- 通过 Prop 向子组件传递数据-->
<!-- Prop 是你可以在组件上注册的一些自定义特性。当一个值传递给一个 prop 特性的时候，它就变成了那个组件实例的一个属性。-->

<!-- 父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。-->
<script>
  import Vue from 'vue'
  import SlotChild from '@/components/slotChild'
  Vue.component('blog-post',
  {
    props:['post'],
    template:` <div class="blog-post">
                <h3>{{post.title}}</h3>
                <button v-on:click="$emit('enlarge-text',0.1)">Enlarge text</button>
                <div v-html="post.content">
                  </div>
              </div>`
  })  
  Vue.component('alert-box', {
    template: `
      <div class="demo-alert-box">
        <strong>Error!</strong>
        <slot></slot>
      </div>
    `
  })

Vue.component('base-input', {
  inheritAttrs: false,
  props: ['label', 'value'],
  computed: {
    inputListeners: function () {
      var vm = this
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function (event) {
            console.log(event.target.value)
            vm.$emit('input', event.target.value)
          },
          focus: function (event) { 
           console.log("focus")
          },
          change:function(event){
            console.log("change")
          }
        }
      )
    }
  },
  template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on="inputListeners"
      >
    </label>
  `
})


  export default {
    name: "right",
    data(){
      return{
        message:'I am right',
        posts: [
          { id: 1, title: 'My journey with Vue' ,content:'content1'},
          { id: 2, title: 'Blogging with Vue' ,content:'content2'},
          { id: 3, title: 'Why Vue is so fun' ,content:'content3'}
        ],
        postFontSize: 1,
        show:true
      }
    },
    methods: {
      onEnlargeText:function(enlargeAmount){
        console.log(enlargeAmount);
        this.postFontSize+=enlargeAmount
      },
      focused:function(value){
        console.log(value)
      },
      toggle(){
         this.show=!this.show 
      }
    },
    components:{
      SlotChild
    }
  }
</script>

<style scoped>
  .my-enter-active{
    transition:all .5s;
  }
  .my-leave-active{
      transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .my-enter{
    transform: translateX(30px);
    opacity: 0;
  }
  .my-leave-to{
    transform: translateX(-30px);
    opacity: 0;
  }
  .bounce-enter-active {
  animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
