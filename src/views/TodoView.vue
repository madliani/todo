<script setup lang="ts">
import TodoCreator from '@/components/TodoCreator.vue'
import TodoList from '@/components/TodoList.vue'
</script>

<template>
  <v-main class="d-flex align-center justify-center">
    <TodoCreator />
    <TodoList />
  </v-main>
</template>

<style scoped>
@media (max-width: 1024px) {
  .v-main {
    flex-direction: column;
  }
}
</style>
