<script setup lang="ts">
type Props = {
  title: string
  description: string
}

withDefaults(defineProps<Props>(), {
  title: 'New item',
  description: 'Short description.'
})
</script>

<template>
  <div>
    <div>
      <span>{{ title }}</span>
    </div>
    <div>
      <span>{{ description }}</span>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
