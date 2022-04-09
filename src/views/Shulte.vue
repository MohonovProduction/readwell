<template>
  <article>
    <Header title="Шульте">
      <a href="/menu" class="btn_return"></a>
    </Header>
    <div class="main">
      <article class="task_setup card" v-if="step === 0">
        <div class="warn" v-if="shulte.warn.length > 0">{{shulte.warn}}</div>
        <section>
          <label class="task_setup__lable">Количество ячеек {{shulte.cellCount}}</label><br>
          <input class="task_steup__range" type="range" min="2" max="5" step="1" v-model="shulte.cellCount">
        </section>
        <button class="btn_start" @click="generate(shulte)"></button>
      </article>
      <article class="shulte card" v-if="step === 1">
        <table class="shulte_table">
          <tr v-for="tr of shulte.table">
            <td v-for="td of tr">
              <button class="shulte_table__btn" :class="{ 'shulte_table__success': shulte.success === td }"
                      @click="checkCell(td, shulte)">
                {{td}}
              </button>
            </td>
          </tr>
        </table>
      </article>
      <article class="finish card" v-if="step === 2">
        <p>Ты справился за {{shulte.time.total}}</p>
        <button @click="repeat(shulte)" class="btn_primary">Повторить</button>
      </article>
    </div>
</article>
</template>

<script>
import Header from '@/components/Header.vue'
import Shulte from '@/models/Tasks/Shulte.js'

export default {
  name: "Shulte",
  components: {
    Header
  },
  data() {
    return {
      step: 0,
      shulte: {
        time: {
          start: null,
          stop: null,
          total: null
        },
        steps: {
          now: 0,
          finish: null
        },
        success: null,
        cellCount: null,
        table: null,
        warn: ''
      }
    }
  },
  methods: {
    generate(shulte) {
      if (shulte.cellCount === null) {
        shulte.warn = 'Выберите количество ячеек'
        return
      }

      Shulte.generateTable(shulte)
      this.step = 1
    },
    checkCell(number, shulte) {
      if (shulte.steps.finish === number) {
        shulte.time.finish = new Date()
        setTimeout( () => this.finish(shulte), 1000)
      }
      if (number === shulte.steps.now) {
        shulte.success = shulte.steps.now
        setTimeout(() => shulte.success = null, 500)
        shulte.steps.now++
      }
    },
    finish(shulte) {
      Shulte.getTotalTime(shulte)
      this.step = 2
    },
    repeat(shulte) {
      shulte.cellCount = null
      this.step = 0
    }
  }
}
</script>

<style scoped>
.main {
  padding: 1em;
}
.shulte_table {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-collapse: collapse;
  width: 100%;
}
.shulte_table__btn {
  width: 3em;
  height: 3em;
  border: 1px solid var(--font-black);
  transition: background-color .3s ease-in-out, transform .3s;
}
.shulte_table__success {
  background-color: var(--green);
}

</style>
