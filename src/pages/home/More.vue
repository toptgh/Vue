<template>
<!-- <transition enter-active-class="slideInRight" leave-active-class="slideOutRight"> -->
<div class="page subpage" id="more">
    <app-header title="更多">
        <router-link to="/home" slot="left">&lt;</router-link>
    </app-header>
</div>
<!-- </transition> -->
</template>

<script>
export default {

}
</script>

<style scoped>
#more{
    background: lightblue;
}
</style>
