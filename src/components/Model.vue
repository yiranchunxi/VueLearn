<template>
    <div class="model-bg" v-show="show" >
        <div class="model-container">
            <div class="model-header">
                {{ title }}
            </div>
            <div class="model-main">
                <slot></slot>
            </div>
            <div class="model-footer">
                <button  @click="hideModel">取消</button>
                <button  @click="submit">确认</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'model',
    props: {
        show: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
          
        
        }
    },
    methods: {
        hideModel() {
            this.$emit('hideModel')
        },

        submit() {
            this.$emit('submit')
        },
    }
}
</script>
<style scoped>
    .model-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.5);
        z-index: 10;
    }
    .model-container {
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .model-header {
        height: 56px;
        background: #409EFF;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: move;
    }
    .model-footer {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 57px;
        border-top: 1px solid #ddd;
    }
    .model-footer button {
        width: 100px;
    }
    .model-main {
        padding: 15px 40px;
    }
</style>