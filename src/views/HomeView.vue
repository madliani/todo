<script setup lang="ts">
import ItemIcon from '@/views/icons/IconItem.vue'
import TodoList from '@/components/TodoList.vue'
</script>

<template>
  <TodoList>
    <template #icon>
      <ItemIcon />
    </template>
  </TodoList>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
