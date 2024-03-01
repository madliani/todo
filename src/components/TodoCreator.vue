<script setup lang="ts">
import { useTodosStore } from '@/stores/todos'
import { useField, useForm } from 'vee-validate'

const { addTodo } = useTodosStore()

const { handleReset, handleSubmit } = useForm({
  initialValues: {
    description: '',
    title: ''
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

const submit = handleSubmit((values) => {
  const { description: formDescription, title: formTitle } = values

  addTodo(formTitle, formDescription)
  handleReset()
})
</script>

<template>
  <v-card class="my-4 w-75" variant="elevated">
    <v-card-item>
      <form @submit.prevent="submit">
        <p class="text-h5 mb-2">Add a task</p>

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

        <v-btn class="mr-4" color="primary" type="submit" variant="elevated">Add</v-btn>

        <v-btn @click="handleReset" color="secondary" variant="elevated">Clear</v-btn>
      </form>
    </v-card-item>
  </v-card>
</template>
