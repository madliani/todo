<script setup lang="ts">
import { useTodosStore } from '@/stores/todos'
import { storeToRefs } from 'pinia'
import { useField, useForm } from 'vee-validate'

type Props = {
  edit: () => void
  id: number
}

const { id, edit } = defineProps<Props>()

const todosStore = useTodosStore()
const { todos } = storeToRefs(todosStore)
const { updateTodo } = todosStore
const todo = todos.value.find((todo) => todo.id === id)

const { handleReset, handleSubmit } = useForm({
  initialValues: {
    description: todo?.description ?? '',
    title: todo?.title ?? ''
  },
  validationSchema: {
    description(value: string) {
      const minLength = 1
      const maxLength = 80

      if (value.length >= minLength && value.length <= maxLength) {
        return true
      }

      return 'The description must contain a minimum of one character and a maximum of eighty characters.'
    },
    title(value: string) {
      const minLength = 1
      const maxLength = 10

      if (value.length >= minLength && value.length <= maxLength) {
        return true
      }

      return 'The title must contain a minimum of one character and a maximum of ten characters.'
    }
  }
})

const description = useField('description')
const title = useField('title')

const close = () => {
  handleReset()
  edit()
}

const submit = handleSubmit((values) => {
  try {
    const { description: formDescription, title: formTitle } = values

    updateTodo(id, formTitle, formDescription)
    close()
  } catch (exception) {
    console.error(exception)
  }
})
</script>

<template>
  <v-card>
    <v-card-item>
      <form @submit.prevent="submit" class="my-2">
        <v-text-field
          :counter="10"
          :error-messages="title.errorMessage.value"
          class="mb-2"
          clearable
          label="Title"
          v-model="title.value.value"
          variant="outlined"
        />

        <v-textarea
          :counter="80"
          :error-messages="description.errorMessage.value"
          class="mb-2"
          clearable
          label="Description"
          v-model="description.value.value"
          variant="outlined"
        />

        <v-btn class="mr-4 mb-2" color="primary" type="submit" variant="elevated">Update</v-btn>

        <v-btn @click="close" class="mb-2" color="secondary" variant="elevated">Close</v-btn>
      </form>
    </v-card-item>
  </v-card>
</template>
