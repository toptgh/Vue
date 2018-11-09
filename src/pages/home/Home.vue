<template>
<div>
    <!-- 根页面 -->
    <div class="page" id="home">
        
        <app-header title="首页">
            <router-link slot="left" to="/home/location">定位</router-link>
            <router-link slot="right" to="/home/more">更多</router-link>
        </app-header>


        <div class="content has-header">
            <ul class="list">
                <router-link v-for="goods in goodsList" :key="goods.id"
                    class="item" :to="'/home/detail/'+goods.title+'/'+goods.id">
                    {{goods.title}}
                </router-link>
            </ul>
        </div>

    </div>

    <!-- 子页面 -->
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
        <router-view/>
    </transition>
</div>

</template>

<script>

export default {
    data(){
        return {
            goodsList: [
                {title: '鞋子', id: '3412352', price: 999},
                {title: '外套', id: '4327453', price: 399},
                {title: '衬衫', id: '9101383', price: 99},
                {title: '裤子', id: '3423467', price: 678},
                {title: '鞋子', id: '5423459', price: 99}
            ]
        }
    }
}
</script>

<style scoped>
.list .item{
    display: block;
    padding-left: 10px;
    line-height: 50px;
    border-bottom: 1px solid #ddd;
    position: relative;
}
.list .item::after{
    content: '>';
    position: absolute;
    right: 10px;
    color: #999;
}
</style>
