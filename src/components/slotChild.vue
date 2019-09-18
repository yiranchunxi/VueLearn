<template>
    <div class="slot-child">
        //在子组件中添加slot标签
        <slot></slot>
        我是slot的子组件
        <h1>{{  price}}</h1>
        <h2>{{  computedTest}}</h2>
    </div>
</template>
<script>
var getPrice=()=>4.55;
function Person(){
    this.age=10;
    /** 
    setInterval(() => {
        // |this| 指向 person 对象
        this.age++;
    }, 1000);
*/
    setInterval(function growUp() {
        // 在非严格模式下，growUp() 函数的 this 指向 window 对象
        this.age++;
    }, 1000);
}
var person=new Person();
export default {
    name:'slotChild',
    data(){
        return{
           price:1        
        }
    },
    computed: {
        
        computedTest(){
            return this.price + '现在我用的是computed'
        }
    },
    methods: {
    
    },
    created() {
        let arr=['apple','banana','orange'];
        let breakfast=arr.map(fruit=>{
            return fruit+'s';
        });
        console.log(breakfast);
        console.log(getPrice());
        console.log(person.age);

        setTimeout(()=>{
                console.log(person.age);
        },2000)
         
        for (var i = 0; i < 10; i++) {
        setTimeout(function(){
            console.log(i);
        })
        }

        for (let j = 0; j < 10; j++) {
        setTimeout(function(){
            console.log(j);
        })
        }
        // 输出 0123456789
    },
}
</script>