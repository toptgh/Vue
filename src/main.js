import Vue from 'vue'
import App from './App.vue'
import Header from './common/Header'
import router from './router'


Vue.component(Header.name, Header);

new Vue({
  //将路由对象配置到vue实例中
  router,
  render: h => h(App)
}).$mount('#app')
