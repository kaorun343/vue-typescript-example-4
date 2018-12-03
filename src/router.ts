import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Links from './components/Links.vue'
import Settings from './components/Settings.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
    },
    { path: '/links', component: Links, name: 'links' },
    { path: '/settings', component: Settings, name: 'settings' },
  ],
})
