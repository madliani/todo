<script setup lang="ts">
import { useTodos } from '@/stores/todos'
import { useField, useForm } from 'vee-validate'

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    description(value: string) {
      const minLength = 1
      const maxLength = 80

      if (value?.length >= minLength && value?.length <= maxLength) {
        return true
      }

      return 'The description must contain a minimum of one character and a maximum of eighty characters.'
    },
    title(value: string) {
      const minLength = 1
      const maxLength = 10

      if (value?.length >= minLength && value?.length <= maxLength) {
        return true
      }

      return 'The title must contain a minimum of one character and a maximum of ten characters.'
    }
  }
})
const title = useField('title')
const description = useField('description')
const { addTodo } = useTodos()

const submit = handleSubmit((values) => {
  try {
    const { description: formDescription, title: formTitle } = values

    addTodo(formTitle, formDescription)
    handleReset()
  } catch (exception) {
    console.error(exception)
  }
})
</script>

<template>
  <form @submit.prevent="submit">
    <v-text-field
      :counter="10"
      :error-messages="title.errorMessage.value"
      label="Title"
      v-model="title.value.value"
    ></v-text-field>

    <v-textarea
      :counter="80"
      :error-messages="description.errorMessage.value"
      label="Description"
      v-model="description.value.value"
    ></v-textarea>

    <v-btn class="me-4" type="submit">Add</v-btn>

    <v-btn @click="handleReset">Clear</v-btn>
  </form>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
