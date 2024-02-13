<script setup>
import { defineProps } from 'vue';
defineProps({
    client: Object
});

const emits = defineEmits(['emitClient'])


const emitClient = (clientId) => {
    emits('emitClient', clientId)
}
</script>

<template>
    <button class="flex rounded-lg items-center p-1 hover:bg-gray-300 transition-colors duration-300" @click="emitClient(client.id)">
        <img src="@/assets/client.png" width="28"/>

        <div class="mx-4 text-start">
            <p class="text-black text-sm">{{ client.name }}</p>
            <p class="text-black text-xs">{{ client.mobile_number }}</p>      
        </div>
    </button>
</template>