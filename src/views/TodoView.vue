<script setup lang="ts">
import TodoCreator from '@/components/TodoCreator.vue'
import TodoList from '@/components/TodoList.vue'
</script>

<template>
  <v-navigation-drawer>
    <TodoCreator />
  </v-navigation-drawer>

  <v-main class="d-flex align-center justify-center">
    <TodoList />
  </v-main>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
