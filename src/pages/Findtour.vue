<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <form @submit.prevent="onSubmit" class="finder">
          <div class="departure">
            <label for="from">Откуда летим?</label>
            <select id="from" v-model="departure">
              <optgroup v-for="country in countries" :key="country.name" :label="country.name">
                <option v-for="city in country.cities" :key="city.value" :value="city.value">{{ city.name }}</option>
              </optgroup>
            </select>
          </div>
          <div class="date">
            <AppInput type="Date" v-model="date.from">Заезд с</AppInput>
            <AppInput type="Date" v-model="date.to">Заезд до</AppInput>
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

export default {
  components: {
    AppButton,
    AppInput,
  },
  data() {
    return {
      departure: 1002131,
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
              name: 'Брест',
              value: 12384,
            },
            Vitebsk: {
              name: 'Витебск',
              value: 2548,
            },
            Gomel: {
              name: 'Гомель',
              value: 4387,
            },
            Grodno: {
              name: 'Гродно',
              value: 293302,
            },
            Minsk: {
              name: 'Минск',
              value: 786,
            },
            Mogilev: {
              name: 'Могилев',
              value: 331488,
            },
          },
        },
        {
          name: 'Болгария',
          cities: {
            Varna: {
              name: 'Варна',
              value: 4102819,
            },
            Sofia: {
              name: 'София',
              value: 11870,
            },
          },
        },
        {
          name: 'Египет',
          cities: {
            Kair: {
              name: 'Каир',
              value: 257707,
            },
          },
        },
        {
          name: 'Казахстан',
          cities: {
            Actobe: {
              name: 'Актобе',
              value: 5200,
            },
            Almaty: {
              name: 'Алматы',
              value: 2707,
            },
            Karagandy: {
              name: 'Караганды',
              value: 30693,
            },
            Kostanai: {
              name: 'Костанай',
              value: 3008373,
            },
            NurSultan: {
              name: 'Нур-Султан',
              value: 18992,
            },
            UstKamenogorsk: {
              name: 'Усть-Каменогорск',
              value: 39792,
            },
            Symkent: {
              name: 'Шыкмент',
              value: 50415,
            },
          },
        },
        {
          name: 'Молдова',
          cities: {
            Chisinau: {
              name: 'Кишинев',
              value: 1002131,
            },
          }
        },
        {
          name: 'Россия',
          cities: {
             Abakan: {
              name: 'Абакан',
              value: 100,
            },
            Arhangelsk: {
              name: 'Архангельск',
              value: 100,
            },
            Astrahan: {
              name: 'Астрахань',
              value: 100,
            },
            Barnaul: {
              name: 'Барнаул',
              value: 100,
            },
            Belgorod: {
              name: 'Белгород',
              value: 100,
            },
            Vladivostok: {
              name: 'Владивосток',
              value: 100,
            },
            Volgograd: {
              name: 'Волгоград',
              value: 100,
            },
            Voronej: {
              name: 'Воронеж',
              value: 100,
            },
            Groznii: {
              name: 'Грозный',
              value: 100,
            },
            Ekaterinburg: {
              name: 'Екатеринбург',
              value: 100,
            },
            Irkutsk: {
              name: 'Иркутск',
              value: 100,
            },
            Kazan: {
              name: 'Казань',
              value: 100,
            },
            Kemerovo: {
              name: 'Кемерово',
              value: 100,
            },
            Krasnodar: {
              name: 'Краснодар',
              value: 100,
            },
            Krasnoiarsk: {
              name: 'Красноярск',
              value: 100,
            },
            Magnitogorsk: {
              name: 'Магнитогорск',
              value: 100,
            },
            Mahachkala: {
              name: 'Махачкала',
              value: 100,
            },
            MineralVodi: {
              name: 'Минеральные Воды',
              value: 100,
            },
            Mosckva: {
              name: 'Москва',
              value: 100,
            },
            Murmansk: {
              name: 'Мурманск',
              value: 100,
            },
            NaberejnieChelni: {
              name: 'Набережные Челны',
              value: 100,
            },
            Nijnevartovsk: {
              name: 'Нижневартовск',
              value: 100,
            },
            Nijnekamsk: {
              name: 'Нижнекаменск',
              value: 100,
            },
            NijniiNovgorod: {
              name: 'Нижний Новгород',
              value: 100,
            },
            Novokuznetsk: {
              name: 'Новокузнецк',
              value: 100,
            },
            Novosibirsk: {
              name: 'Новосибирск',
              value: 100,
            },
            Omsk: {
              name: 'Омск',
              value: 100,
            },
            Orenburg: {
              name: 'Оренбург',
              value: 100,
            },
            Perm: {
              name: 'Пермь',
              value: 100,
            },
            RostovNaDonu: {
              name: 'Ростов на Дону',
              value: 100,
            },
            Samara: {
              name: 'Самара',
              value: 100,
            },
            SanktPetersburg: {
              name: 'Санкт Петербург',
              value: 100,
            },
            Saratov: {
              name: 'Саратов',
              value: 100,
            },
            Sochi: {
              name: 'Сочи',
              value: 100,
            },
            Stavropoli: {
              name: 'Ставрополь',
              value: 100,
            },
            Surgut: {
              name: 'Сургут',
              value: 100,
            },
            Siktivkar: {
              name: 'Сыктывкар',
              value: 100,
            },
            Tomsk: {
              name: 'Томск',
              value: 100,
            },
            Tiumeni: {
              name: 'Тюмень',
              value: 100,
            },
            Ulianovsk: {
              name: 'Ульяновск',
              value: 100,
            },
            Ufa: {
              name: 'Уфа',
              value: 100,
            },
            Habarovsk: {
              name: 'Хабаровск',
              value: 100,
            },
            Cheliabinsk: {
              name: 'Челябинск',
              value: 100,
            },

          }
        },
      ],
      destination: [
        
      ]
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
  },
  methods: {
    onSubmit() {
      this.localeDate;
      console.log(this.departure + this.date.fromSend + ' и до ' + this.date.toSend);
    }
  }
}
</script>

<style lang="scss">
.finder {
  display: flex;
  align-items: center;

}
.date {
  width: 33%;
}
</style>