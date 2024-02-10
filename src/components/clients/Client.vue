<template>
    <div class="mt-2 lg:mt-0 py-1 lg:py-2 lg:px-1 bg-blue-200 rounded-lg text-center">
        <p class="text-black">الأسم: {{ $props.client.name }}</p>
        <p class="text-black">العنوان: {{ $props.client.address }}</p>
        <p class="text-black">الرقم: {{ $props.client.mobile_number }}</p>
        <p class="text-black">واتساب: {{ $props.client.whatsapp_number }}</p>
        <p class="text-black">الرقم القومي: {{ $props.client.national_id }}</p>
       
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    client: Object
});

</script>