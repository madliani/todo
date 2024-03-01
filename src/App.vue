<script setup lang="ts">
import LogoTodo from '@/assets/icons/logo.png'
import { RouterView } from 'vue-router'
import { Routes } from './types/routes'
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar>
      <template v-slot:prepend>
        <RouterLink :to="Routes.HOME">
          <v-img :src="LogoTodo" :width="48"></v-img>
        </RouterLink>
      </template>

      <v-app-bar-title>Task Manager</v-app-bar-title>
    </v-app-bar>

    <RouterView />
  </v-layout>
</template>

<style scoped>
.v-layout {
  min-height: 100%;
  min-width: 100%;
}
</style>
