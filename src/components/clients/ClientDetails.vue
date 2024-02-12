<script setup>
defineProps({
    client: Object
})

</script>
<template>
    <h1 class="mb-4 text-center text-2xl font-bold text-red-600">تفاصيل العميل الشخصية</h1>

    <div class="grid grid-cols-2 gap-3 p-4 rounded-xl bg-gray-100">
        <p>الأسم: {{ client.name }}</p>
        <p>العنوان: {{ client.address }}</p>
        <p>الرقم: {{ client.mobile_number }}</p>
        <p>واتساب: {{ client.whatsapp_number }}</p>
        <p>الرقم القومي: {{ client.national_id }}</p>
    </div>
</template>