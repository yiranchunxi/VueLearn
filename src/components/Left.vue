<template>
    <div>
        <h2>{{message}}</h2>
        <input type="text" v-model="message" placeholder="edit me"/>
        <hr/>>
        <span>Multiline message is:</span>
        <p style="white-space: pre-line;">{{ message }}</p>
        <br>
        <textarea v-model="message" placeholder="add multiple lines"></textarea>

        <hr/>
        <input type="checkbox" id="checkbox" v-model="checked"/>
        <label for="checkbox">{{checked}}</label>

        <hr/>

        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>

         <br>
        <span>Checked names: {{ checkedNames }}</span>
        <hr/>
          <input type="radio" id="one"  value="One" v-model="picked">
          <label for="one">One</label>
        <br>
          <input type="radio" id="two"  value="Two" v-model="picked">
          <label for="two">Two</label>
        <br>
        <span> Picked:{{picked}}</span>
        <hr/>
        <select v-model="selected">
            <option disabled value="">请选择</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
          <span>Selected: {{ selected }}</span>

        <hr/>
         <select v-model="multiselected" multiple style="width: 50px;">
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <br>
        <span>Selected: {{ multiselected }}</span>

        <hr/>
        <button @click="start">浪起来</button>
        <button @click="stop">停止</button>

        <h2>{{dota}}</h2>

        <div  v-demo:foo.a.b="message"></div>
      </div>
</template>
<script>
import Vue from 'vue';
   Vue.directive('demo', {
      bind: function (el, binding, vnode) {
        var s = JSON.stringify
        el.innerHTML =
          'name: '       + s(binding.name) + '<br>' +
          'value: '      + s(binding.value) + '<br>' +
          'expression: ' + s(binding.expression) + '<br>' +
          'argument: '   + s(binding.arg) + '<br>' +
          'modifiers: '  + s(binding.modifiers) + '<br>' +
          'vnode keys: ' + Object.keys(vnode).join(', ')
      }
    })

    export default {
        name: "left",
        data(){
          return{
            message:'表单输入绑定',
            checked:true,
            checkedNames:[],
            picked:'',
            selected: '',
            multiselected:[],
            toggle:'',
            dota:'CN dota Best dota!',
            intervalId:null
          }
        },
        methods: {
          
          start:function(){
              if(this.intervalId!=null)
              return;
              this.intervalId=setInterval(() => {
                let a= this.dota.substring(0,1);
                let b= this.dota.substring(1, this.dota.length);
                this.dota=b.concat(a);
              },100)
          },
          stop:function(){

              clearInterval(this.intervalId);
              this.intervalId=null;
          }
        },
    }
</script>

<style scoped>

</style>
