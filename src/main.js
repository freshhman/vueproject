import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/main.css'

axios.defaults.baseURL = 'http://localhost:8000/'
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
const app = new Vue({
  router,
  render: h => h(App)
})
app.$mount('#app')
