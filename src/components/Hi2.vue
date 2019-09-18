<template>
    <div>
      <ul>
        <li v-for="(item, index) in itemarray" :key="index">
          {{index}}-{{item.message}}
        </li>
      </ul>
      <ul>
        <li v-for="(value,name,index) in  itemobject" :key="name">
              {{index}}---{{name}}:{{value}}
        </li>
      </ul>
      <h1>{{update}}</h1>
      <ul>
        <li v-for="(item,index) in updatearray" :key="index">
            {{index}}--{{item.func}}
        </li>
      </ul>
      <button @click="updatearrayfunc">test</button>
       <button @click="updateobjfunc">testobj</button>
        <!-- <li v-for="(n, index) in evenNumbers" :key="index">{{ n }}</li>

         <li v-for="(n,index) in even(numbers)" :key="index">{{ n }}</li> -->
    </div>
</template>
<!-- 用 v-for 把一个数组对应为一组元素-->
<!-- 在 v-for 里使用对象-->
<!-- 不要使用对象或数组之类的非基本类型值作为 v-for 的 key。请用字符串或数值类型的值。-->
<!-- 数组更新检测-->
<!--  由于 JavaScript 的限制，Vue 不能检测以下数组的变动：
1.当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue
2.当你修改数组的长度时，例如：vm.items.length = newLength
-->
<!-- 对象变更检测注意事项-->
<!-- 还是由于 JavaScript 的限制，Vue 不能检测对象属性的添加或删除：-->
<!--Vue 不允许动态添加根级别的响应式属性。但是，可以使用 Vue.set(object, propertyName, value) 方法向嵌套对象添加响应式属性-->
<script>
     import Vue from 'vue'
    export default {
        name: "Hi2",
        data(){
          return{
             itemarray:[
               {message:'Foo'},
               {message:'Bar'}
             ],
             itemobject:{
                 title: 'How to do lists in Vue',
                 author: 'Jane Doe',
                 publishedAt: '2016-04-10'
             },
             update:' 数组更新检测',
             updatearray:[
               {func:'push()'},
               {func:'pop()'},
               {func:'shift()'},
               {func:'unshift()'},
               {func:'splice()'},
               {func:'sort()'},
               {func:'reverse()'},
             ],
              numbers: [ 1, 2, 3, 4, 5 ]
          }
        },
        methods: {
          updatearrayfunc(){
            //this.updatearray[0]='dasdsd';
            //this.$set(this.updatearray, 1, {func:'test()'})
            //this.updatearray.splice(0, 1, 'test()')
            this.updatearray.splice(10)
            //this.updatearray.push( {func:'test()'})
            //Vue.set(this.updatearray, 1, 'test()')
          },
          updateobjfunc(){

            //Vue.set(this.itemobject, 'age', 27)
            //this.$set(this.itemobject, 'age', 27)
            this.itemobject = Object.assign({}, this.itemobject, {
              age: 27,
              favoriteColor: 'Vue Green'
            })
          },
          even: function (numbers) {
            return numbers.filter(function (number) {
              return number % 2 === 0
            })
          }
        },
        computed: {
          evenNumbers:function(){
               return this.numbers.filter(function(number){
                 return number%2===0
               })     
          }
        },
    }
</script>

<style scoped>

</style>
