<script setup lang="ts">
import ImageTodo from '@/assets/images/logo.png'
import { RouterView } from 'vue-router'
import { Routes } from './types/routes'
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar>
      <template v-slot:prepend>
        <RouterLink :to="Routes.HOME">
          <v-img :src="ImageTodo" :width="48"></v-img>
        </RouterLink>
      </template>

      <v-app-bar-title>Checklist</v-app-bar-title>
    </v-app-bar>

    <RouterView />
  </v-layout>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
