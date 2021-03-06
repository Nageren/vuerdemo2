// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';//引入文件
Vue.prototype.$http = axios;

// 引用API文件
// import api from './api/index.js'
// 将API方法绑定到全局
// Vue.prototype.$api = api
// Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
