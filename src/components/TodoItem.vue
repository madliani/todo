<script setup lang="ts">
type Props = {
  description: string
  title: string
}

withDefaults(defineProps<Props>(), {
  description: 'Short description.',
  title: 'New item'
})
</script>

<template>
  <v-list-item :title="title">
    <span>{{ description }}</span>
  </v-list-item>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
