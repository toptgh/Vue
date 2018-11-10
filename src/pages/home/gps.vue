<template>
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
        <div class="page sub" id="gps">
            <app-header title="定位">
                <router-link class="backhome" to='/' slot="left">&lt;</router-link>
            </app-header>
        </div>
    </transition>
</template>

<script>
export default {

}
</script>

<style scoped>
#gps{
    background: darkcyan;
}
</style>
