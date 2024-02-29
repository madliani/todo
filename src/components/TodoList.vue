<script setup lang="ts">
import TodoItem from '@/components/TodoItem.vue'
import { useTodos } from '@/stores/todos'

const { todos } = useTodos()
</script>

<template>
  <v-list>
    <TodoItem
      :description="todo.description"
      :key="todo.id"
      :title="todo.title"
      v-for="todo in todos"
    />
  </v-list>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
