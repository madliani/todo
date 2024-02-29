<script setup lang="ts">
import TodoItem from '@/components/TodoItem.vue'
import { useTodos } from '@/stores/todos'

const { todos } = useTodos()
</script>

<template>
  <div>
    <slot name="icon"></slot>
  </div>
  <TodoItem
    v-for="todo in todos"
    :key="todo.id"
    :description="todo.description"
    :title="todo.title"
  ></TodoItem>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
