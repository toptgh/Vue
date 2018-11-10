<template>
<div>
    <div class="page" id="home">
        
        <app-header title="首页">
            <router-link class="router gps" slot="left" to='/Home/gps'>定位</router-link >
            <router-link  class="router more" slot="right" to='/Home/more'>更多</router-link >
        </app-header>

        <div class="content has-header" >
            <ul class="list">
                <router-link  :to="'/Home/Detail/'+goods.title+'/'+goods.id" class="item" v-for="goods in goodsList" :key="goods.id">
                    {{goods.title}}
                </router-link>
            </ul>
        </div>
        
    </div>
    <router-view/>
</div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: [
        { title: "衬衫", id: "11111", price: 99 },
        { title: "毛衣", id: "22222", price: 199 },
        { title: "短袖", id: "33333", price: 299 },
        { title: "牛仔", id: "44444", price: 399 },
        { title: "短裤", id: "55555", price: 499 },
        { title: "鞋子", id: "66666", price: 599 },
        { title: "皮带", id: "77777", price: 699 }
      ]
    };
  },
  methods: {},
 
};
</script>

<style scoped>
.item {
  display: block;
  padding-left: 10px;
  line-height: 50px;
  border-bottom: 1px solid #ddd;
  position: relative;
  color: #333;
}

.item:after {
  content: ">";
  position: absolute;
  right: 10px;
  color: #999;
}
</style>
