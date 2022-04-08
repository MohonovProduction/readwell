<template>
  <article>
    <Header title="Шульте">
      <a href="/menu" class="btn_return"></a>
    </Header>
    <div class="main">
      <article class="task_setup card" v-if="step === 0">
        <section>
          <label class="task_setup__lable">Количество ячеек {{shulte.cellCount}}</label><br>
          <input class="task_steup__range" type="range" min="2" max="7" step="1" v-model="shulte.cellCount">
        </section>
        <button class="btn_start" @click="generate(shulte)"></button>
      </article>
      <article class="shulte card" v-if="step === 1">
        <table class="shulte_table">
          <tr v-for="tr of shulte.table">
            <td v-for="td of tr">{{td}}</td>
          </tr>
        </table>
      </article>
      <article class="finish card" v-if="step === 2">

      </article>
    </div>
</article>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: "Shulte",
  components: {
    Header
  },
  data() {
    return {
      step: 0,
      shulte: {
        timer: 0,
        cellCount: null,
        table: null,
      }
    }
  },
  methods: {
    generate(shulte) {
      this.step = 1

      const numbers = []
      for (let i = 0; i <= shulte.cellCount ** 2; i++) numbers.push(String(i))
      console.log(numbers, 1)

      const table = []

      for (let i = 0; i < shulte.cellCount; i++) {
        const row = []
        for (let i = 0; i < shulte.cellCount; i++) {
          let index = Math.floor(Math.random() * numbers.length)
          console.log(index, 2)
          const number = numbers.splice(index, 1)[0]
          console.log(numbers)
          console.log(number, 3)
          row.push(number)
        }
        table.push(row)
      }

      shulte.table = table
    }
  }
}
</script>

<style scoped>
.main {
  padding: 1em;
}
.shulte_table {
  border-collapse: collapse;
}
.shulte_table td {
  width: 2em;
  height: 2em;
  border: 2px solid var(--font-black)
}
</style>
