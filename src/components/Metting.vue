<template>
    <div class="container">
          
           <div class="header">会议纪要</div>
           <div class="meetingbody">
                <div class="left">
                    <div class="left-line">会议日期</div>
                    <div class="left-line">会议地点</div>
                    <div class="second-line line">参会人员</div>
                    <div class="second-line line">会议背景</div>
                    <div class="second-line line">会议内容</div>
                    <div class="second-line line">会议结果</div>
                    <div class="bottom-line line">下部工作</div>
                </div>
                <div class="right">
                    <div class="right-line">
                                
                                <div class="item "><textarea v-model="metting_time"></textarea></div>
                                <div class="item line">开始时间</div>
                                <div class="item "><textarea v-model="metting_start_time"></textarea></div>
                                <div class="item line">结束时间</div>
                                <div class="item"><textarea v-model="metting_end_time"></textarea></div>
                    </div> 
                    <div class="right-line">
                                
                                <div class="item "><textarea v-model="metting_locate"></textarea></div>
                                <div class="item line">&#8194编制人&#8194</div>
                                <div class="item ">
                                    <select name="public-choice" v-model="CompileSelected" @change="getCompileSelected">                                        
                                            <option :value="compile.id" v-for="compile in CompileList" :key="compile.id">{{compile.name}}</option>                                    
                                    </select>
                                </div>
                                <div class="item line">编制日期</div>
                                <div class="item"><textarea v-model="metting_date"></textarea></div>
                    </div> 
                    <div class="second-line" @click="showPopop">            
                       <span v-for="item in selected" :key="item.id">{{ item.name }}、</span> 
                    </div>
                    <div class="second-line">            
                        <div></div>
                    </div>
                    <div class="second-line">            
                        <div></div>
                    </div>
                    <div class="second-line">            
                        <div></div>
                    </div>
                    <div class="bottom-line">            
                        <div></div>
                    </div>
                </div>
               
           </div>
           <Model :show="show" :title="title" @hideModel="hideModel" @submit="submit">
               
                    <div style="width: 400px;height:200px">

                        <ul style="width: 150px;height:200px;float:left;overflow:scroll">
                            <li class="myli "  v-for="item in PersonList" :key="item.id" @click="PersonSelected(item)">
                                <span v-if="showSelected(item.id)" class="person-selected" >{{item.name}}</span>
                                <span v-else >{{item.name}}</span>
                            </li>     
                        </ul>
                        
                        <PersonBox v-for="box in selected" :key="box.id" v-bind:parentmsg="box" @func="deletePerson"></PersonBox>
                    </div>
           </Model>
    </div>
</template>
<script>
    import Model from './Model.vue'

    var PersonBox={
        data() {
            return {
                user:'张飞',
                pic:require("../assets/ic_search closed.png")
            }
        },
        template:`<div class="personBox">
                    <span>{{parentmsg.name}}</span>
                    <img  :src="pic" @click="mydelete" style="width:18px;height:18px;float:right;position:relative;top:0;right:0;cursor:pointer" >
                  </div>`,
        methods: {
            mydelete(){
                this.$emit('func', this.parentmsg.id)
            }
        },
        props: ['parentmsg'],
    }



    export default {
         name:'Metting',
         data() {
             return {
                metting_time:'',
                metting_start_time:'',
                metting_end_time:'',
                metting_locate:'',
                metting_date:'',
                CompileList:[
                        {
                            id: '1',
                            name: '张三'
                        },
                        {
                            id: '2',
                            name: '李四'
                        },
                        {
                            id: '3',
                            name: '王五'
                        },
                        {
                            id: '4',
                            name: '马六'
                        }
            
                    ],
                CompileSelected: '',
                title: '参会人员选择框',
                show: false,
                selected: [],
                PersonList:[
                     {
                            id: '1',
                            name: '刘备'
                    },
                    {
                            id: '2',
                            name: '关羽'
                    },
                    {
                            id: '3',
                            name: '张飞'
                    },
                    {
                            id: '4',
                            name: '赵云'
                    },
                    {
                            id: '5',
                            name: '马超'
                    },
                    {
                            id: '6',
                            name: '黄忠'
                    },
                    {
                            id: '7',
                            name: '魏延'
                    },
                    {
                            id: '8',
                            name: '廖化'
                    },
                    {
                            id: '9',
                            name: '关兴'
                    },
                    {
                            id: '10',
                            name: '张苞'
                    },
                    {
                            id: '11',
                            name: '王平'
                    },
                    {
                            id:'12',
                            name:'马谡'
                    }
                ]
             } 
         },
         methods: {
                 getCompileSelected(){
                     
                       
                },
                showPopop(){
                    this.show = true
                },
                hideModel() {
                    // 取消弹窗回调
                    this.show = false
                    this.selected=[];
                },
                submit() {
                    // 确认弹窗回调
                    this.show = false
                },
                PersonSelected(person){
                    var index=this.selected.findIndex(item=>{
                        if(item.id==person.id){
                            return true;
                        }    
                    })
                   
                    if(index==-1){
                         this.selected.push(person)
                    }
                },
                showSelected(id){

                    var index=this.selected.findIndex(item=>{
                        if(item.id==id){
                            return true;
                        }    
                    })
                    if(index==-1){
                        return false;
                    }else{
                        return true;
                    }
                },
                deletePerson(id){

                    var index=this.selected.findIndex(item=>{
                        if(item.id==id){
                            return true;
                        }    
                    })

                    this.selected.splice(index,1) 
                }
        },
        components: {
            Model,
            PersonBox
        },
    
    }
</script>
<style scoped>
    textarea { 
        width:98%;
        height: 54px;
        border:none;
        outline:none;
        resize:none;
        text-align: center;
        line-height: 54px;
    }
    .container{
        height: 370px;
        font-weight:bold;
        border: 1px solid black
    }
    .container .header{

        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid black
    }
    .container .meetingbody{
        display: flex;    
    }

    .container .left{
        flex: 1;
        display: flex;
        flex-direction:column;
    }
    .container .right{
        flex: 5;
        display: flex;
        flex-direction:column;
        justify-content: center;
    }
    .container  .left-line{
         height: 60px;
         line-height: 60px;
         border-bottom: 1px solid black;
         border-right: 1px solid black;
    }
    .container .right-line{
        display: flex;
        flex-direction: row ;
        justify-content: center;
        height: 60px;
        border-bottom: 1px solid black;
    }
    .container .right-line .item{
        flex: 1  ;
        line-height: 60px;
    }
    .container  .line{
        border-right: 1px solid black;
        border-left: 1px solid black;
    }
    .container .second-line{
        height: 30px;
        border-bottom: 1px solid black;
        line-height: 30px;
    }
    .container .bottom-line{
        height: 93px;
        line-height: 90px;
    }
    select {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        border:none;
        outline:none;
        /*以上三项,为清除select自带样式*/
        width: 100%;
        height: 54px;
        cursor: pointer;
        font-weight:bold;
    }
    option{
        text-align: center;
    }

    .myli{
        list-style: none;
        padding: 8px;
        width: 100%; 
    }

    .person-selected{
        background-color: aqua;
        display: block;
        width: 100%;    
    }
    .personBox{
        width: 60px;
        height: 30px;
        float: left;
        text-align: center;
        line-height: 30px;
        border: 1px solid lightskyblue
        
    }
   
</style>