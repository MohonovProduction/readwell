<template>
  <article class="loader-wrapper">
    <header class="loader">
      <h1 class="loader__title">Учись легко</h1>
      <div class="loader__progress-bar" :class="{ 'loader__progress-bar--animated': loading }"></div>
    </header>
  </article>
</template>

<script>
import router from "../router";

export default {
  name: 'Loader',
  data() {
    return {
      loading: false
    }
  },
  mounted() {
    this.loading = true
    setTimeout(() => {
      router.push('/menu')
    }, 10000)
  }
}
</script>
