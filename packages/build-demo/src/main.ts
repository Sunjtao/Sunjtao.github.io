import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Rem } from 'bee-utils'
import BeeUI from 'bee-ui'
Rem.bindRem()
Vue.use(BeeUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
