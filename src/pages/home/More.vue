<template>
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
        <div class="page sub" id="more">
            <app-header title="更多">
                <span class="backhome" @click="backAction()" slot="left">&lt;</span>
            </app-header>
        </div>
    </transition>
</template>

<script>
export default {
  methods: {
    backAction() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
#more {
  background: darkcyan;
}
</style>