<script setup lang="ts">
import TodoCreator from '@/components/TodoCreator.vue'
import TodoList from '@/components/TodoList.vue'
</script>

<template>
  <v-main class="d-flex flex-column align-center justify-center">
    <TodoCreator />
    <TodoList />
  </v-main>
</template>
