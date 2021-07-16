import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import EvaIcons from 'vue-eva-icons'
import VueConfetti from 'vue-confetti'
 
Vue.config.productionTip = false

Vue.use(EvaIcons)
Vue.use(VueConfetti)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
