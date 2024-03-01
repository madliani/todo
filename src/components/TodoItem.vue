<script setup lang="ts">
import { useTodosStore } from '@/stores/todos'
import type { TodoItem } from '@/types/todo'

type Props = TodoItem

const { deleteTodo } = useTodosStore()

defineProps<Props>()
</script>

<template>
  <v-card variant="outlined">
    <v-card-item>
      <v-list-item>
        <v-text-field :value="title" />
        <v-textarea :value="description" />
      </v-list-item>
    </v-card-item>
    <v-card-actions>
      <v-btn @click="() => deleteTodo(id)" color="red" variant="elevated">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
