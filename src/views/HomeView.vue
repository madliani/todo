<script setup lang="ts">
import TodoCreator from '@/components/TodoCreator.vue'
import TodoList from '@/components/TodoList.vue'
import ItemIcon from '@/views/icons/IconItem.vue'
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="To Do" />

    <v-navigation-drawer>
      <TodoCreator />
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center">
      <TodoList>
        <template #icon>
          <ItemIcon />
        </template>
      </TodoList>
    </v-main>
  </v-layout>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
