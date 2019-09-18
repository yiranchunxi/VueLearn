<template>
    <div>
      <h2>{{message}}</h2>
      <ol>
          <!--
          现在我们为每个 todo-item 提供 todo 对象
          todo 对象是变量，即其内容可以是动态的。
          我们也需要为每个组件提供一个“key”，稍后再
          作详细解释。
        -->
         <todo-item v-for="item in groceryList" :todo="item" :key="item.id"></todo-item>
      </ol>

      <p>Using mustaches: {{ rawHtml }}</p>
      <p>Using v-html directive: <span v-html="rawHtml"></span></p>
      <router-view></router-view>
    </div>
  
</template>

<script>
    import Vue from 'vue'

    // 定义名为 todo-item 的新组件
    Vue.component('todo-item',
         {
           // todo-item 组件现在接受一个
           // "prop"，类似于一个自定义特性。
           // 这个 prop 名为 todo。
           props:['todo'], 
           template:'<li>{{todo.text}}</li>'
         }
     )


    
    export default {
        name: "Hi",
        data(){
          return{
            message:'I am Hi page',
            groceryList:[
              {id:0,text:'蔬菜1'},
              {id:1,text:'奶酪1'},
              {id:2,text:'随便其它什么人吃的东西'}
            ],
            rawHtml:'<span style="color:red">This should be red.</span>'
          }
        },
        created() {
          console.log('created');
        },
    }
    
</script>

<style scoped>

</style>
