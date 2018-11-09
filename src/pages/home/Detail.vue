<template>
<div class="page subpage" id="detail">
    <app-header :title="title">
        <router-link to="/home" slot="left">&lt;</router-link>
    </app-header>
    <div class="content has-header">
        <input type="text" v-model="title"/>
        <button>确定</button>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            title: this.$route.params.name
        }
    },
    created(){
        console.log(this.$route);
        //取得id值，发送ajax请求
    }
}
</script>

<style scoped>
#detail{
    background: pink;
}
</style>
