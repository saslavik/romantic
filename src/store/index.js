import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    // 'https://search.tez-tour.com/tariffsearch/references?locale=ru&formatResult=true&xml=false'
    getList() {
      // return axios.get('https://search.tez-tour.com/tariffsearch/getResult?priceMin=0&priceMax=150000&currency=5561&nightsMin=6&nightsMax=14&hotelClassId=269506&accommodationId=2&rAndBId=15350&tourType=1&locale=ru&cityId=345&countryId=5732&after=03.02.2021&before=15.02.2021&hotelClassBetter=true&rAndBBetter=true&hotelInStop=false&specialInStop=false&noTicketsTo=false&noTicketsFrom=false&promoFlag=true&version=2&searchTypeId=6')
      //   .then(res => {
      //     console.log(res);
      //   })
    }
  },
  modules: {
  }
})
