<template>
<div>
    <div class="page" id="home">
        
        <app-header title="首页">
            <span class="router gps" slot="left" @click="gpsAction()">定位</span>
            <span  class="router more" slot="right"  @click="moreAction()">更多</span>
        </app-header>

        <div class="content has-header" >
            <ul class="list">
                <li @click="goDetail(goods)"  class="item" v-for="goods in goodsList" :key="goods.id">
                    {{goods.title}}
                </li>
            </ul>
        </div>
        
    </div>
    <router-view/>
</div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: [
        { title: "衬衫", id: "11111", price: 99 },
        { title: "毛衣", id: "22222", price: 199 },
        { title: "短袖", id: "33333", price: 299 },
        { title: "牛仔", id: "44444", price: 399 },
        { title: "短裤", id: "55555", price: 499 },
        { title: "鞋子", id: "66666", price: 599 },
        { title: "皮带", id: "77777", price: 699 }
      ]
    };
  },
  methods: {
    gpsAction() {
      this.$router.push({ name: "Gps" });
    },
    moreAction() {
      this.$router.push({ name: "More" });
    },
    goDetail(goods){
      this.$router.push({name:'Detail',params:{name:goods.title,id:goods.id}})
    }
  },
  created() {
    this.$center.$on("data", (name, id) => {
      this.goodsList.map((goods, index) => {
        if (goods.id == id) {
          goods.title = name;
        }
      });
    });
  }
};
</script>

<style scoped>
.item {
  display: block;
  padding-left: 10px;
  line-height: 50px;
  border-bottom: 1px solid #ddd;
  position: relative;
  color: #333;
}

.item:after {
  content: ">";
  position: absolute;
  right: 10px;
  color: #999;
}
</style>
