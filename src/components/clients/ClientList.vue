<script setup>
import Client from "@/components/clients/Client.vue"
import { defineProps, ref } from "vue";

defineProps({
    clients: Array,
})


const emits = defineEmits(['emitClient'])

const handleClientClicked = (payload) => {
    emits('emitClient', payload)
}

</script>

<template>
    <div class="flex flex-col space-y-2 w-72 rounded-xl bg-gray-100">
        <Client v-for="client in clients" :client="client" @emitClient="handleClientClicked"/>
    </div>
</template>