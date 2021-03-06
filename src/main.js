// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routers from './router/index'
import ElementUI  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import moment from 'moment';

Vue.prototype.$http = axios;
Object.defineProperty(Vue.prototype, '$moment', { value: moment });
moment.locale("zh-cn")

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  routes:routers
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //components: { App },
  //template: '<App/>'
  render: h => h(App)
})
