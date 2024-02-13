<script setup>
import { useFetch } from "@/composables/useFetch";
import { onBeforeMount, watch } from "vue";

const props = defineProps({
    clientId: Number
})

let { data, isLoading, error, fetchData } = useFetch('http://127.0.0.1:8000/api/clients/');

onBeforeMount(()=>{
    fetchData(props.clientId);
})

watch(() => props.clientId, (newValue, oldValue) => {
    if (newValue !== oldValue) {
        fetchData(props.clientId);
    }
});

</script>
<template>
    <h1 class="mb-4 text-center text-2xl font-bold text-red-600">تفاصيل العميل الشخصية</h1>

    <p v-if="isLoading">Loading...</p>
    <p v-else-if="error">{{ error }}</p>
    <div v-else class="grid grid-cols-2 gap-3 p-4 rounded-xl bg-gray-100">
        <p>الأسم: {{ data.name }}</p>
        <p>العنوان: {{ data.address }}</p>
        <p>الرقم: {{ data.mobile_number }}</p>
        <p>واتساب: {{ data.whatsapp_number }}</p>
        <p>الرقم القومي: {{ data.national_id }}</p>
    </div>
</template>