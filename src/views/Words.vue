<template>
  <article>
    <Header>
      <a href="/menu" class="btn_return"></a>
    </Header>
    <div class="task__main">
      <article v-if="step === 0" class="card">
        <p>Найди непохожие пары слов</p>
        <button class="btn_start"></button>
      </article>
      <article v-if="step === 1" class="words card">
        <article v-for="words of words.table">
          <p>{{words[0]}}</p>
          <p>{{words[1]}}</p>
        </article>
      </article>
      <article v-if="step === 2" class="card">

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

      }
    }
  }
}
</script>

<style scoped>

</style>
