<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <form @submit.prevent="onSubmit">
          <AppInput type="Date" v-model="date.from">Заезд с</AppInput>
          <AppInput type="Date" v-model="date.to">Заезд до</AppInput>
          <select>
            <optgroup v-for="country in countries" :key="country.name" :label="country.name">
              <option v-for="city in country.cities" :key="city.name" value="">{{ city.name }}</option>
            </optgroup>
          </select>
          <AppButton>Test</AppButton>

        </form>
      </div>
    </section>
  </div>
</template>

<script>
import AppButton from '@/components/UI/Controls/Button.vue';
import AppInput from '@/components/UI/Controls/Input.vue';

export default {
  components: {
    AppButton,
    AppInput,
  },
  data() {
    return {
      date: {
        from: null,
        fromSend: null,
        to: null,
        toSend: null,
      },
      countries: [
        {
          name: 'Беларусь',
          cities: {
            Brest: {
              name: 'Брест'
            },
            Breansk: {
              name: 'Брянск'
            },
            Minsk: {
              name: 'Минск'
            },
        },
        },
        {
          name: 'Молдова',
          cities: {
            Chisinau: {
              name: 'Кишинев'
            }
          }
        }
      ]
    }
  },
  mounted() {
    this.$store.dispatch('getList')
  },
  computed: {
    localeDate() {
      this.date.fromSend = (new Date(this.date.from)).toLocaleDateString()
      this.date.toSend = (new Date(this.date.to)).toLocaleDateString()
      return
    },
  },
  methods: {
    onSubmit() {
      this.localeDate;
      console.log(this.date.fromSend + ' и до ' + this.date.toSend);
    }
  }
}
</script>