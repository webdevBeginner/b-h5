// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'

Vue.config.productionTip = false

import Service from '@/utils/fetch'
Vue.prototype.$axios = Service


router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
