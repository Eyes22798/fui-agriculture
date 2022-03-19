import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'

Vue.config.productionTip = false
Vue.use(dataV)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
