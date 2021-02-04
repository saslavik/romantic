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
            <AppInput type="Date" v-model="date.to">Заезд до(max. 15 дней)</AppInput>
          </div>

          <AppButton>Test</AppButton>

        </form>
      </div>
    </section>
  </div>
</template>

<script>
import AppButton from '@/components/UI/Controls/Button.vue';
import AppInput from '@/components/UI/Controls/Input.vue';
import countries from '@/data/countries';
import destinations from '@/data/destinations';

export default {
  components: {
    AppButton,
    AppInput,
  },
  data() {
    return {
      departureCode: 1002131,
      destinationCode: 5732,
      date: {
        from: null,
        fromSend: null,
        to: null,
        toSend: null,
      },
    }
  },
  // mounted() {
  //   this.$store.dispatch('getList')
  // },
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
    }
  },
  methods: {
    onSubmit() {
      this.localeDate;
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