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
      try {
        const minLength = 1
        const maxLength = 80

        if (value.length >= minLength && value.length <= maxLength) {
          return true
        }

        return 'The description must contain a minimum of one character and a maximum of eighty characters.'
      } catch (exception) {
        console.error(exception)
      }
    },
    title(value: string) {
      try {
        const minLength = 1
        const maxLength = 10

        if (value.length >= minLength && value.length <= maxLength) {
          return true
        }

        return 'The title must contain a minimum of one character and a maximum of ten characters.'
      } catch (exception) {
        console.error(exception)
      }
    }
  }
})

const { id, edit } = defineProps<Props>()

const description = useField('description')
const title = useField('title')
const { updateTodo } = useTodosStore()

const submit = handleSubmit((values) => {
  try {
    const { description: formDescription, title: formTitle } = values

    updateTodo(id, formTitle, formDescription)
    handleReset()
    edit()
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
