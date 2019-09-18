<template>
    <div>
        <cmt-box  @func="loadComments"></cmt-box>

        <ul>
            <li v-for="item in commentList" :key="item.id">
                   <span>评论人:{{item.user}}</span>
                   {{item.content}} 
            </li>
        </ul>
    </div>
</template>
<script>
    var commentBox={
        data() {
            return {
                user:'',
                content:''
            }
        },
        template:`<div>
        <div><label>评论人：</label><input type="text"  v-model="user"></div>
        <div><label>评论内容：</label><textarea  v-model="content"></textarea></div>
        <div><input type="button" value="发表评论"  @click="postComment"></div>
        </div>`,
        methods: {
            postComment(){
              var comment={id:Date.now(),user:this.user,content:this.content}
              var list=JSON.parse(localStorage.getItem('cmts')||'[]')
              list.unshift(comment)
              localStorage.setItem('cmts',JSON.stringify(list))
              this.user=this.content=''
              this.$emit('func')  
            }
        },
    }


    export default {
          name:"Comment",
          data() {
              return {
                 commentList:[
                    
                 ]
              }
          },
          created() {
            this.loadComments()                  
          },
          methods: {
              loadComments(){
                  var list=JSON.parse(localStorage.getItem('cmts')||'[]')
                  this.commentList=list
              }
          },
          components:{
              'cmt-box':commentBox
          }
    }
</script>
<style scoped>



</style>