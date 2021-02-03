import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Findtour from '@/pages/Findtour.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/findtour',
      name: 'Findtour',
      component: Findtour,
    },
    // {
    //   path: '*',
    //   name: '404',
    //   component: NotFound,
    // },
  ],
});
