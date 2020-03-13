<template>
  <div class="scroll-list-wrap">
      <cube-sticky :pos="scrollY">
            <cube-scroll
              :scroll-events="scrollEvents"
              @scroll="scrollHandler">
              <div v-for="(item,index) in menu" :key="index">
                    <cube-sticky-ele :ele-key=item.name >
                      <ul class="sticky-header">
                        <li>{{item.name}}</li>
                      </ul>
                    </cube-sticky-ele>
                    <ul>
                      <li class="aaa" v-for="(son,sindex) in item.info" :key="sindex">
                        <router-link to="/about"> {{son.name}}</router-link> 
                      </li>
                    </ul>
              </div>
            </cube-scroll>  
            <template slot="fixed" slot-scope="props">
              <ul class="sticky-header">
                <li>{{props.current}}</li>
              </ul>
            </template>
      </cube-sticky>
    </div>
</template>

<script>
import menu from '../common/js/menu.js';
export default {
   name:'main',
   data(){
      return {
      scrollEvents: ['scroll'],
      scrollY: 0,
      menu:menu
    }
   },
   methods: {
    scrollHandler({ y }) {
      this.scrollY = -y
    }
  }
}
</script>
<style lang="less">
.scroll-list-wrap{
  width: 100%;
  height: 100%;
  overflow: hidden;
  .sticky-header{
    font-size: 16px;
    background-color: #f7f7f7;
    li{
      color: #999999;
      padding: 16px 16px 10px;
    }
   
  }
}
</style>
