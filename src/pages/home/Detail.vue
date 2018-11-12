<template>
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
        <div class="page sub" id="detail">
            <app-header :title="title">
                <span class="backhome" @click="backAction()" slot="left">&lt;</span>
            </app-header>

            <div class="content has-header">
                <input type="text" v-model="value"/>
                <button @click="backAction(value)">确定</button>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  data() {
    let goodsName = this.$route.params.name;
    return {
      title: goodsName,
      value: goodsName
    };
  },
  methods: {
      backAction(value){
          this.$center.$emit('data',this.value,this.$route.params.id);
          this.$router.back();
      }

  },
//   created() {
//     //ajax传id
//   }
};
</script>

<style scoped>
#detail {
  background: darkcyan;
}
</style>

