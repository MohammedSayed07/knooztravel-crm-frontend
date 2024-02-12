<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="flex flex-col items-center lg:ml-3 ml-0 bg-sky-950">
    <img alt="Knooz Logo" class="mt-2" src="@/assets/logo.png" width="32" height="32" />

    <div class="wrapper mt-8  ">
      <nav class="text-base space-y-4 text-gray-500">
        <RouterLink to="/" class="transition-colors duration-300 hover:text-white hover:bg-gray-500 flex flex-col text-center items-center rounded py-1" active-class="text-white bg-gray-500">
          <img src="@/assets/home.png" width="32"/>
          <p>
            الصفحة الرئيسية
          </p>
        </RouterLink>
        <RouterLink to="/clients" class="transition-colors duration-300 hover:text-white hover:bg-gray-500 flex flex-col text-center items-center rounded py-1" active-class="text-white bg-gray-500">
          <img src="@/assets/clients.png" width="32"/>
          <p>العملاء</p>
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
