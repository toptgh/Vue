import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './common/header'

Vue.component('app-header',Header);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
