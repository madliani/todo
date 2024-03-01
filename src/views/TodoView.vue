<script setup lang="ts">
import TodoCreator from '@/components/TodoCreator.vue'
import TodoList from '@/components/TodoList.vue'
</script>

<template>
  <v-main class="v-main d-flex align-center justify-center">
    <TodoCreator />
    <v-layout class="d-flex flex-column align-center justify-center">
      <p class="text-h3 my-4">Checklist</p>
      <TodoList />
    </v-layout>
  </v-main>
</template>

<style scoped>
@media (max-width: 1024px) {
  .v-main {
    flex-direction: column;
  }
}
</style>
