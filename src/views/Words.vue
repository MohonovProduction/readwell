<template>
  <article>
    <Header title="Слова">
      <a href="/menu" class="btn_return"></a>
    </Header>
    <div class="task__main">
      <article v-if="step === 0" class="card">
        <p>Найди непохожие пары слов</p>
        <button class="btn_start" @click="generate()"></button>
      </article>
      <article v-if="step === 1" class="words_table card">
        <button v-for="(word, index) of words.table" @click="checkCell(index)" class="words_table__cell">
          <label>{{word.words[0]}}</label>
          <label>{{word.words[1]}}</label>
        </button>
      </article>
      <article v-if="step === 2" class="card">
        <p>Молодец!</p>
        <button class="training__btn">Завершить</button>
        <button class="training__btn">Повторить</button>
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
        table: [],

      }
    }
  },
  methods: {
    generate() {
      this.words.table = Words.generateTable(12)

      this.step = 1
    },
    checkCell(number) {

    },
    finish(words) {

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
}
</style>
