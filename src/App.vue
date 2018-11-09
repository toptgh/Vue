<template>
<div id="app">

    <router-view/>

    <nav class="tabs">
        <router-link v-for="(tabItem, index) in tabList" :key="index"
            class="tab" :to="tabItem.flag">
            <span>❤</span>
            <span>{{tabItem.name}}</span>
        </router-link>
    </nav>

    
</div>
</template>

<script>
export default {
    data(){
        return {
            tabList: [
                {name: '首页', flag: '/home'},
                {name: '热门', flag: '/hot'},
                {name: '发现', flag: '/discover'},
                {name: '设置', flag: '/setting'}
            ]
        }
    }

}
</script>

<style>
html, body, #app{
    width: 100%;
    height: 100%;
}
.page{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 49px;
    box-sizing: border-box;
    background: #fff;
}
.page.subpage{
    bottom: 0;
    z-index: 5;
}
.content{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}
.content.has-header{
    padding-top: 44px;  
}
.tabs{
     width: 100%;
     height: 49px;
     position: absolute;
     left: 0;
     bottom: 0;
     display: flex;
     border-top: 1px solid #ddd;
}
.tab{
    flex: 1;
    text-align: center;
    color: #333;
    display: flex;
    flex-direction: column;
}
.tab span{
    flex: 1;
}
.tab span:first-of-type{
    font-size: 20px;
}
.tab span:last-of-type{
    font-size: 12px;
}
.tab.router-link-active{
    color: dodgerblue;
}

</style>
