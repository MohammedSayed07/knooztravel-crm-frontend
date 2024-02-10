<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Knooz Logo" class="mt-2 mr-1" src="@/assets/logo.png" width="32" height="32" />

    <div class="wrapper mt-4">
      <nav class="flex flex-col pl-4 text-lg text space-y-1">
        <RouterLink to="/" class="hover:bg-blue-100" active-class="bg-blue-100">الصفحة الرئيسية</RouterLink>
        <RouterLink to="/clients" class="hover:bg-blue-100" active-class="bg-blue-100">العملاء</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
