<template>
    <div 
    class="lg:grid lg:grid-cols-4 lg:gap-2 m-4 max-w-8xl bg-gray-100 p-4 rounded-xl">
        <Client
        v-for="client in props.clients" :client="client"
        />
    </div>
</template>

<script setup>
import Client from "@/components/clients/Client.vue"
import { defineProps } from "vue";

const props = defineProps({
    clients: Array
})

</script>