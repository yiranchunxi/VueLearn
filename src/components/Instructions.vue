<template>
        <div>
            <div>
                <h3>添加品牌</h3>
            </div>
            <div>
                <label >
                    Id: <input type="text" v-model="id">
                </label>
                <label >
                    name: <input type="text" v-model="name"  @keyup.f2="add">
                </label>
                <button type="button"  @click="add()">添加</button>
                <label >
                    搜索名称关键字: <input type="text" v-model="keywords" id="search" v-focus>
                </label>
            </div>

            <table>
                <thead>
                    <tr>
                           <th>Id</th> 
                           <th>Name</th>
                           <th>Ctime</th>
                           <th>Operation</th>
                    </tr>
                </thead>
                
                    <transition-group appear tag="tbody">
                        <tr v-for="item in search(keywords)" :key="item.id">
                                    <td>{{item.id}}</td> 
                                    <td v-text="item.name"></td>
                                    <td>{{item.ctime | dateFormat()}}</td> 
                                    <td><a href="#" @click.prevent="del(item.id)">删除</a></td> 
                        </tr>
                    </transition-group>
                     
            </table>
        </div>
</template>
<script>
        import Vue from 'vue'
        export default {
            name:'Instructions',
            data() {
                return {
                    id:'',
                    name:'',
                    keywords:'',
                    list:[
                        {id:1,name:'benz',ctime:new Date()},
                        {id:2,name:'bmw',ctime:new Date()},
                        {id:3,name:'benz',ctime:new Date()},
                        {id:4,name:'bmw',ctime:new Date()},
                        {id:5,name:'benz',ctime:new Date()},
                        {id:6,name:'bmw',ctime:new Date()}
                    ]
                }
            },
            methods: {
                add:function(){
                     var car={id:this.id,name:this.name,ctime:new Date()}
                     this.list.push(car)
                     this.id=''
                     this.name=''   
                } ,
                del:function(id){
                     //alert(id)
                     // 分析：
                    // 1. 如何根据Id，找到要删除这一项的索引
                    // 2. 如果找到索引了，直接调用 数组的 splice 方法

                     /* this.list.some((item, i) => {
                        if (item.id == id) {
                        this.list.splice(i, 1)
                        // 在 数组的 some 方法中，如果 return true，就会立即终止这个数组的后续循环
                        return true;
                        }
                    }) */
                    var index=this.list.findIndex(item=>{
                        if(item.id==id){
                            return true;
                        }    
                    })
                    console.log(index)
                    this.list.splice(index,1)
                },
                search(keywords){
                 /* var newList = []
                    this.list.forEach(item => {
                        if (item.name.indexOf(keywords) != -1) {
                        newList.push(item)
                        }
                    })
                    return newList */

                    // 注意：  forEach   some   filter   findIndex   这些都属于数组的新方法，
                    //  都会对数组中的每一项，进行遍历，执行相关的操作；

                  return this.list.filter(item=>{
                       //if(item.name.indexOf(keywords)!=-1){
                       //    return item;
                       //}

                        // 注意 ： ES6中，为字符串提供了一个新方法，叫做  String.prototype.includes('要包含的字符串')
                        //  如果包含，则返回 true ，否则返回 false
                        //  contain
                        if (item.name.includes(keywords)) {
                        return item
                        }
                   })
                }  
            },
            filters:{
                // 定义私有过滤器    过滤器有两个 条件  【过滤器名称 和 处理函数】
                // 过滤器调用的时候，采用的是就近原则，如果私有过滤器和全局过滤器名称一致了，这时候 优先调用私有过滤器
                dateFormat:function(dateStr,pattern=""){
                    // 根据给定的时间字符串，得到特定的时间
                    var dt=new Date(dateStr)
                    //   yyyy-mm-dd
                    var y = dt.getFullYear()
                    var m = (dt.getMonth() + 1).toString().padStart(2, '0')
                    var d = dt.getDate().toString().padStart(2, '0')

                    if (pattern.toLowerCase() === 'yyyy-mm-dd') {
                        return `${y}-${m}-${d}`
                    } else {
                         var hh = dt.getHours().toString().padStart(2, '0')
                         var mm = dt.getMinutes().toString().padStart(2, '0')
                         var ss = dt.getSeconds().toString().padStart(2, '0')

                        return `${y}-${m}-${d} ${hh}:${mm}:${ss} ~~~~~~~`
                     }
                }

            }
        }
         // 全局的过滤器， 进行时间的格式化
        // 所谓的全局过滤器，就是所有的VM实例都共享的
        Vue.filter('dateFormat',function(dateStr,pattern=""){
             // 根据给定的时间字符串，得到特定的时间
             var dt=new Date(dateStr)

             //   yyyy-mm-dd
             var y=dt.getFullYear()
             var m=dt.getMonth()+1
             var d=dt.getDate()
             
            // return y + '-' + m + '-' + d
            if(pattern.toLowerCase()==='yyyy-mm-dd'){
                return `${y}-${m}-${d}`
            }else{
                  var hh = dt.getHours()
                  var mm = dt.getMinutes()
                  var ss = dt.getSeconds()

                return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
            }
        })
        // 自定义全局按键修饰符
        Vue.config.keyCodes.f2 = 113

        // 使用  Vue.directive() 定义全局的指令  v-focus
        // 其中：参数1 ： 指令的名称，注意，在定义的时候，指令的名称前面，不需要加 v- 前缀, 
        // 但是： 在调用的时候，必须 在指令名称前 加上 v- 前缀来进行调用
        //  参数2： 是一个对象，这个对象身上，有一些指令相关的函数，这些函数可以在特定的阶段，执行相关的操作
        Vue.directive('focus',{
            bind:function(el){
                // 每当指令绑定到元素上的时候，会立即执行这个 bind 函数，只执行一次
                // 注意： 在每个 函数中，第一个参数，永远是 el ，表示 被绑定了指令的那个元素，这个 el 参数，是一个原生的JS对象
                // 在元素 刚绑定了指令的时候，还没有 插入到 DOM中去，这时候，调用 focus 方法没有作用
                //  因为，一个元素，只有插入DOM之后，才能获取焦点
                // el.focus()
            },
            inserted:function(el){
                 // inserted 表示元素 插入到DOM中的时候，会执行 inserted 函数【触发1次】
                el.focus()
                // 和JS行为有关的操作，最好在 inserted 中去执行，放置 JS行为不生效
            },
            updated: function (el) {  // 当VNode更新的时候，会执行 updated， 可能会触发多次

            }
        })

</script>
<style>
    .v-enter,.v-leave-to{
        opacity: 0;
        transform: translateY(80px)
    }

    .v-enter-active,.v-leave-active{
        transition:all 0.6s ease;
    }
    .v-move{
        transition:all 0.6s ease;
    }

    .v-leave-active{
      position: absolute;
    }
</style>