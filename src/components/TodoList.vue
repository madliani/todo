<script setup lang="ts">
import TodoItem from '@/components/TodoItem.vue'
import { useTodosStore } from '@/stores/todos'
import { storeToRefs } from 'pinia'

const todosStore = useTodosStore()

const { todos } = storeToRefs(todosStore)
</script>

<template>
  <v-card class="ml-4" variant="outlined">
    <v-card-title class="text-h3">Checklist</v-card-title>
    <v-card-item>
      <v-list>
        <TodoItem
          :description="todo.description"
          :id="todo.id"
          :is-finished="todo.isFinished"
          :key="todo.id"
          :title="todo.title"
          v-for="todo in todos"
        />
      </v-list>
    </v-card-item>
  </v-card>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
