// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//集成mint-ui组件 是vue里面的插件 
//mui与vue无关,是这座移动端的手机插件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//use作用:将mint-ui中组件注册成全局组件
Vue.use(MintUI)
import '@/lib/mui/css/mui.min.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
