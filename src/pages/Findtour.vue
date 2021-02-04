<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <form @submit.prevent="onSubmit" class="finder">
          <div class="destinations">
            <div class="departure">
              <label for="from">Откуда летим?</label>
              <select id="from" v-model="departureCode">
                <optgroup v-for="country in countries" :key="country.id" :label="country.label">
                  <option v-for="city in country.cities" :key="city.value" :value="city.value">{{ city.name }}</option>
                </optgroup>
              </select>
            </div>
            <div class="departure">
              <label for="from">Куда летим?</label>
              <select id="from" v-model="destinationCode">
                <option v-for="destination in destinations" :key="destination.value" :value="destination.value">{{ destination.name }}</option>
              </select>
            </div>
          </div>
          <div class="date">
            <AppInput type="Date" v-model="date.from">Заезд с</AppInput>
            <AppInput type="Date" v-model="date.to">Заезд до (max. 15 дней)</AppInput>
          </div>
          <div class="clients">
            <AppInput type="number" v-model="passengers.adult">Кол-во взрослых:</AppInput>
            <AppInput type="number" v-model="passengers.children">Кол-во детей до 12 лет:</AppInput>
          </div>

          <AppButton>Test</AppButton>
        </form>
        <Results v-if="resData" :results='resData'></Results>
      </div>
    </section>
  </div>
</template>

<script>
import AppButton from '@/components/UI/Controls/Button.vue';
import AppInput from '@/components/UI/Controls/Input.vue';
import countries from '@/data/countries';
import destinations from '@/data/destinations';
import accommodations from '@/data/accommodations';
import axios from 'axios';
import Results from '@/components/Results.vue'

export default {
  components: {
    AppButton,
    AppInput,
    Results,
  },
  data() {
    return {
      departureCode: 1002131,
      destinationCode: 5732,
      passengers: {
        adult: "2",
        children: "0",
        birthday: '04.02.2020',
        childrenSend: ''
      },
      date: {
        from: null,
        fromSend: null,
        to: null,
        toSend: null,
      },
      resData: null,
    }
  },
  computed: {
    localeDate() {
      this.date.fromSend = (new Date(this.date.from)).toLocaleDateString()
      this.date.toSend = (new Date(this.date.to)).toLocaleDateString()
      return
    },
    countries() {
      return countries
    },
    destinations() {
      return destinations
    },
    accommodations() {
      return accommodations.find(el => el.adult === +this.passengers.adult && el.children === +this.passengers.children).accommodationId;
    },
    childrenSend() {
      this.passengers.childrenSend = '';
      for (let i = 1; i <= +this.passengers.children; i++) {
        this.passengers.childrenSend += `&birthday${i}=${this.passengers.birthday}`
      }
      console.log(this.c)
    }
  },
  methods: {
    onSubmit() {
      this.accommodations;
      this.localeDate;
      this.childrenSend;
      return axios.get(`https://search.tez-tour.com/tariffsearch/getResult?priceMin=0&priceMax=150000&currency=18864&nightsMin=6&nightsMax=14&hotelClassId=269506&accommodationId=${this.accommodations}${this.passengers.childrenSend}&rAndBId=15350&tourType=1&locale=ru&cityId=${this.departureCode}&countryId=${this.destinationCode}&after=${this.date.fromSend}&before=${this.date.toSend}&hotelClassBetter=true&rAndBBetter=true&hotelInStop=false&specialInStop=false&noTicketsTo=false&noTicketsFrom=false&promoFlag=true&version=2&searchTypeId=3`)
        .then(res => {
          this.resData = res.data.data;
        })
      console.log(this.departureCode + this.date.fromSend + ' и до ' + this.date.toSend);
    }
  }
}
</script>

<style lang="scss">
.finder {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.date {
  width: 33%;
}
</style>