<script setup lang="ts">
import { Routes } from '@/types/routes'
import IconTodo from '@/views/icons/icon.png'
import { RouterLink } from 'vue-router'
</script>

<template>
  <v-main class="d-flex flex-column align-center justify-center">
    <v-avatar :image="IconTodo" size="256" />
    <p class="text-h3 text-center">
      <span class="d-none d-sm-inline">Your tasks </span>
      <RouterLink :to="Routes.TODO">-></RouterLink>
    </p>
  </v-main>
</template>
