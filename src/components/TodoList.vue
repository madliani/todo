<script setup lang="ts">
import TodoItem from '@/components/TodoItem.vue'
import { useTodosStore } from '@/stores/todos'
import { storeToRefs } from 'pinia'

const todosStore = useTodosStore()

const { todos } = storeToRefs(todosStore)
</script>

<template>
  <v-card class="mb-4 w-75" variant="elevated">
    <v-card-title class="my-4 text-center text-h3">Tasks</v-card-title>

    <p class="text-center text-h5" v-if="!todos.length">There are no tasks.</p>

    <v-card-item>
      <v-list>
        <TodoItem
          :description="todo.description"
          :id="todo.id"
          :key="todo.id"
          :title="todo.title"
          v-for="todo in todos"
        />
      </v-list>
    </v-card-item>
  </v-card>
</template>
