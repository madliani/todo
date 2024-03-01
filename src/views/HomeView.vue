<script setup lang="ts">
import { Routes } from '@/types/routes'
import IconTodo from '@/views/icons/icon.png'
import type { RouterLink } from 'vue-router'
</script>

<template>
  <v-main class="d-flex align-center justify-center">
    <v-img :src="IconTodo" :width="300"></v-img>
    <p class="text-h2">Your checklist <RouterLink :to="Routes.TODO">-></RouterLink></p>
  </v-main>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
