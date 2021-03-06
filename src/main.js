import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);
Vue.config.productionTip = false
import '@/assets/scss/main.scss';
import vueCarouselMin from 'vue-carousel';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
