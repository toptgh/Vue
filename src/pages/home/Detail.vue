<template>
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
        <div class="page sub" id="detail">
            <app-header :title="title">
                <router-link class="backhome" to='/' slot="left">&lt;</router-link>
            </app-header>

            <div class="content has-header">
                <input type="text" v-model="value"/>
                <button @click="btn()">确定</button>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  data() {
    var goodsName = this.$route.params.name;
    return {
      title: goodsName,
      value: goodsName
    };
  },
  methods: {
      btn(){
         
      }
  },
  created() {
    // console.log(this.$route.params.id);
  }
};
</script>

<style scoped>
#detail {
  background: darkcyan;
}
</style>

