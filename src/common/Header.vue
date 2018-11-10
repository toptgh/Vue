<template>
    <div class="header">
        <slot name='left'/>
        <span class="header_title">{{title}}</span>
        <slot name='right'/>
    </div>
</template>

<script>
export default {
    props:{
        title:String
    }
};
</script>

<style>
.header {
  width: 100%;
  height: 44px;
  position: absolute;
  top: 0;
  left: 0;
  background: #1e90ff;
  box-sizing: border-box;
  text-align: center;
}

.header > .header_title {
  font-size: 20px;
  line-height: 44px;
  color: #fff;
}

.header > .router {
  position: absolute;
  top: 0;
  line-height: 44px;
  padding: 0 10px;
  color: #fff;
}
.header .gps {
  left: 10px;
}
.header .more {
  right: 10px;
}
</style>
