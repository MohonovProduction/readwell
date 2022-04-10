<template>
  <article>
    <Header title="Слова">
      <a href="/menu" class="btn_return"></a>
    </Header>
    <div class="task__main">
      <article v-if="step === 0" class="card">
        <p>Найди непохожие пары слов</p>
        <button class="btn_start" @click="generate(words)"></button>
      </article>
      <article v-if="step === 1" class="words_table card">
        <button
          v-for="(word, index) of words.table"
          @click="checkCell(String(index), words)"
          class="words_table__cell"
          :class="{ 'bg_success--action': words.success === index }"
        >
          <label>{{word.words[0]}}</label>
          <label>{{word.words[1]}}</label>
        </button>
      </article>
      <article v-if="step === 2" class="card">
        <p>Молодец!</p>
        <!--<button class="training__btn">Завершить</button>
        <button class="training__btn">Продолжить</button>!-->
        <button class="btn_primary" @click="generate(words)">Повторить</button>
      </article>
    </div>
  </article>
</template>

<script>
import Header from '@/components/Header.vue'
import Words from '@/models/Tasks/Words.js'

export default {
  name: "Words",
  components: {
    Header
  },
  data() {
    return {
      step: 0,
      words: {
        table: null,
        map: null,
        total: 0,
        count: 0,
        success: null
      }
    }
  },
  methods: {
    generate(words) {
      words.count = 0
      words.total = 0

      words.table = Words.generateTable(12)
      words.map = Words.generateMap(words.table)
      words.total = words.map.length

      this.step = 1
    },
    checkCell(index, words) {
      for (let id of words.map) {
        if (id === index) {
          words.success = Number(index)
          setTimeout(() => words.success = null, 500)
          words.count++
        }
        if (words.count === words.total) setTimeout(() => this.finish(), 1000)
      }
    },
    finish() {
      this.step = 2
    }
  }
}
</script>

<style scoped>
.words_table {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.words_table__cell {
  display: grid;
  grid-gap: .3em;
  padding: .8em;
  box-shadow: 0 0 10px 2px var(--shadow);
  width: min-content;
  border-radius: .3em;
  transition: background-color .3s ease-in-out, transform .3s;
}
</style>
