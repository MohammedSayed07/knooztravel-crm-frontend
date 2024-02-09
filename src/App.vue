<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Knooz Logo" class="mt-2 mr-1" src="@/assets/logo.png" width="48" height="48" />

    <div class="wrapper mt-4">
      <nav class="flex flex-col pl-4 text-lg text">
        <RouterLink to="/">الصفحة الرئيسية</RouterLink>
        <RouterLink to="/clients">العملاء</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
