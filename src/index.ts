import './style.scss'
import Vue from 'vue'
import App from './components/App.vue'
import { provide } from './provide'
import { router } from './router'

const vm = new Vue({
  render: h => h(App),
  provide,
  router,
})

vm.$mount('#app')
