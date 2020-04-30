import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import 'views/plugins/element.js'
import ElementUI from 'element-ui'
import  'element-ui/lib/theme-chalk/index.css'
//导入字体图标
import 'assets/fonts/iconfont.css'
//导入全局样式表
//导入axios包
import axios from 'axios'
//配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios
//通过axios请求拦截器添加token，保证拥有请求数据的权限
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  //在最后必须return config
  return config
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  ElementUI
}).$mount('#app')
