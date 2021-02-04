<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <table>
          <tbody>
            <tr v-for="(result, index) in results" :key="index">
              <td>
                <img :src="result[6][2]" :alt="result[6][1]">
              </td>
              <td>
                <h3>{{ result[6][1] }}</h3>
                <h6>Дата вылета: {{ result[0]}}</h6>
                <h6>Кол-во дней: {{ result[3] }}</h6>
                <h6>Дата возврата: {{ result[4] }}</h6>
                <h6>Рацион: {{ result[7][1] }}</h6>
                <small>Номер: {{ result[8][1] }}</small>
              </td>
              <td>
                <h2>{{ result[10].total }} {{ result[10].currency }}</h2>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    results: {
      type: Array,
      required: true,
    }
  },
  mounted() {
    console.log(this.results);
  }
}
</script>