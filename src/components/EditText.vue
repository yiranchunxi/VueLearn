<template>
    <!-- v-cloak 隐藏未编译的变量，直到 Vue 实例准备就绪。 -->
    <!-- 元素点击后 hideTooltp() 方法被调用 -->
    <div>

        <div class="edit_text" v-cloak @click="hideTooltip">
            <!-- 这是一个提示框
            v-on:click.stop 是一个点击事件处理器，stop 修饰符用于阻止事件传递
            v-if 用来判断 show_tooltip 为 true 时才显示 -->

            <div class="tooltip" @click.stop  v-if="show_tooltip">

                    <input type="text" v-model="text_content"/>
            </div>


            <!-- 点击后调用 "toggleTooltip" 方法并阻止事件传递 -->

            <!--  "text_content" 变量根据文本域内容的变化而变化 -->
            <p @click.stop="toggleTooltip">{{text_content}}</p>
        </div>
    </div>
</template>
<script>
    export default {
         name:'EditText',
         data(){
             return{
                show_tooltip:false, 
                text_content:'点我,并编辑内容。'    
             }
         },
         methods: {
             hideTooltip:function(){
                // 在模型改变时，视图也会自动更新
                 this.show_tooltip=false;   
                 console.log("hideTooltip");
             },
             toggleTooltip:function(){
                 this.show_tooltip=!this.show_tooltip;   
                  console.log("toggleTooltip");
             }
         },
    }
</script>
<style>
    [v-cloak] {
      display: none;
    }
</style>