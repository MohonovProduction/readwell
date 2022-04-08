<template>
  <div class="home">
    <aside v-if="menu.open" class="menu">
      <button class="btn_close" @click="this.menu.open = false"></button>
      <article class="setup_container">
        <button class="setup_btn" :class="{ 'setup_btn--active': !menu.small }" @click="this.menu.small = false">1-2 класс</button>
        <button class="setup_btn" :class="{ 'setup_btn--active': menu.small }" @click="this.menu.small = true">3-4 класс</button>
      </article>
    </aside>
    <Header title="Учись легко">
      <button class="btn_burger" @click="this.menu.open = true"></button>
    </Header>
    <header class="header_card">
      <div>
        <h2 class="header__title">
          Интенсив
          <div class="header__progress_bar">
            <div class="header__progress_bar--progressed"></div>
          </div>
        </h2>
      </div>
      <div>
        <button class="btn_primary">Открыть</button>
      </div>
    </header>
    <article class="training">
      <h2 class="training__title">Тренажёры</h2>
      <article class="training__btns">
        <button class="training__btn">Буквы и звуки</button>
        <button class="training__btn">Слоги</button>
        <button class="training__btn">Карусель</button>
        <button class="training__btn">Тексты</button>
        <button class="training__btn">Корректурная проба</button>
        <button class="training__btn">Слова</button>
        <button class="training__btn">Муха</button>
        <button class="training__btn">Шульте</button>
      </article>
    </article>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  background-color: var(--light);
}
.menu {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  grid-template-rows: repeat(3, auto) 1fr;
  grid-gap: 2em;
  width: 100%;
  height: 100vh;
  background-color: var(--dark);
  padding: 1em;
}
.btn_close {
  justify-self: end;
}
.setup_container {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 1em;
}
.setup_btn {
  font-size: 1rem;
  padding: 0.5em;
  border-radius: 0.3em;
  color: var(--light);
  background: hsl(0, 0%, 0%, 0);
  border: none;
  outline: none;
}
.setup_btn--active {
  background: var(--darken);
}
.header_card {
  display: grid;
  grid-template-columns: auto auto;
  color: var(--light);
  background-color: var(--dark);
  padding: 3em 1em;
}
.header__title {
  margin: auto;
  width: min-content;
}
.header__progress_bar {
  margin-top: 10px;
  height: 5px;
  width: 100%;
  background-color: var(--darken);
}
.header__progress_bar--progressed {
  height: 5px;
  width: 0;
  background-color: var(--green);
}

.training {
  width: 100%;
  padding: 2.5rem 1.5rem;
  color: var(--dark);
}
.training__title {
  text-align: left;
}
.training__btns {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  grid-gap: 0.5em;
  font-family: sans-serif;
  padding: 1em 0;
}
.training__btn {
  width: min-content;
  white-space: nowrap;
  padding: .5em;
  border-radius: .30em;
  box-shadow: 0 0 10px 2px hsla(29, 32%, 31%, 0.1);
  color: var(--dark);
}

</style>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  },
  data() {
    return {
      menu: {
        open: false,
        small: true
      }
    }
  }
}
</script>
