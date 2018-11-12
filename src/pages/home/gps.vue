<template>
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
        <div class="page sub" id="gps">
            <app-header title="定位">
                <span class="backhome" @click="backAction()" slot="left">&lt;</span>
            </app-header>
        </div>
    </transition>
</template>

<script>
export default {
methods:{
    backAction(){
        this.$router.back();
    }
}
}
</script>

<style scoped>
#gps{
    background: darkcyan;
}
</style>
