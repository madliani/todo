<script setup lang="ts">
import { useTodosStore } from '@/stores/todos'
import { useField, useForm } from 'vee-validate'

type Props = {
  edit: () => void
  id: number
}

const { handleReset, handleSubmit } = useForm({
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

const description = useField('description')
const title = useField('title')
const { updateTodo } = useTodosStore()
const { id, edit } = defineProps<Props>()

const submit = handleSubmit((values) => {
  try {
    const { description: formDescription, title: formTitle } = values

    updateTodo(id, formTitle, formDescription)
    handleReset()
  } catch (exception) {
    console.error(exception)
  }
})

const close = () => {
  handleReset()
  edit()
}
</script>

<template>
  <v-card class="mr-4" variant="outlined">
    <v-card-item>
      <form @submit.prevent="submit" class="ma-4">
        <v-text-field
          :counter="10"
          :error-messages="title.errorMessage.value"
          class="mb-2"
          clearable
          label="Title"
          v-model="title.value.value"
          variant="outlined"
        ></v-text-field>

        <v-textarea
          :counter="80"
          :error-messages="description.errorMessage.value"
          class="mb-2"
          clearable
          label="Description"
          v-model="description.value.value"
          variant="outlined"
        ></v-textarea>

        <v-btn class="mr-4" color="primary" type="submit" variant="elevated">Update</v-btn>

        <v-btn @click="close" color="secondary" variant="elevated">Close</v-btn>
      </form>
    </v-card-item>
  </v-card>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
