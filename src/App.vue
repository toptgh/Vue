<template>
  <div id="app">
    <router-view/>

    <div class="tabs">
      <router-link :to="{path:navItem.path}" class="tab" v-for="(navItem,index) in navList" :key='index'>
        <span :class='navItem.icon'></span>
        <span>{{navItem.name}}</span>
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { name: "首页", path: "/Home", icon: "iconfont icon-yemian-copy" },
        { name: "热点", path: "/Hot", icon: "iconfont icon-redian-copy" },
        { name: "发现", path: "/Discover", icon: "iconfont icon-sousuo" },
        { name: "设置", path: "/Setting", icon: "iconfont icon-shezhi" }
      ]
    };
  }
};
</script>


<style>
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
.tabs {
  width: 100%;
  height: 49px;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  border-top: 1px solid #ccc;
}
.tab{
  flex: 1;
  text-align: center;
  color: #333;
  display: flex;
  flex-direction: column;
}
.tab>span{
  flex: 1;
}
.router-link-active {
  color: #1E90FF;
  text-decoration: none;
}
.tab span:nth-child(1){
  padding-top: 5px;
  font-size: 20px;
}
.tab span:nth-child(2){
  font-size: 12px;
}

.page {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 49px;
  background: #fff;
}
.sub{
  bottom: 0;
  z-index: 9;
}

.content{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.has-header{
   padding-top: 44px;
}

.backhome{
    color: #fff;
    font-size: 20px;
    position: absolute;
    left: 10px;
    line-height: 44px;
    padding: 0 10px;
}

</style>
