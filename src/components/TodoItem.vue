<script setup lang="ts">
import { useTodosStore } from '@/stores/todos'
import type { TodoItem } from '@/types/todo'
import { ref } from 'vue'
import TodoItemCreator from './TodoItemCreator.vue'

type Props = TodoItem

const { deleteTodo } = useTodosStore()
const isEditing = ref(false)

const edit = () => {
  isEditing.value = !isEditing.value
}

defineProps<Props>()
</script>

<template>
  <v-list-item variant="outlined">
    <TodoItemCreator v-if="isEditing" :edit="edit" :id="id" />
    <v-card v-if="!isEditing">
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-item>
        {{ description }}
      </v-card-item>
      <v-card-actions>
        <v-btn @click="edit" color="primary" variant="elevated">Update</v-btn>
        <v-btn @click="() => deleteTodo(id)" color="red" variant="elevated">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </v-list-item>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
