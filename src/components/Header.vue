<template>
  <header class="header">
    <slot></slot>
    <h1 v-text="title"></h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: [
    'title',
  ]
}
</script>

<style scoped>
.header {
  font-size: 0.7rem;
  display: grid;
  grid-template-columns: 1em 1fr;
  background-color: var(--dark);
  color: var(--light);
  padding: 0.9em;
}
</style>
