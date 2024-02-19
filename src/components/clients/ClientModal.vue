<script setup>
import Modal from '@/components/Modal.vue';
import FormButton from '@/components/form/FormButton.vue'
import { ref } from 'vue';

defineProps({
    show: Boolean
})

const emits = defineEmits(['refetchClients', 'close'])

const formData = ref({
    name: '',
    mobile_number: '',
    whatsapp_number: '',
    address: '',
    national_id: '',
})

const handleSumbit = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/clients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData.value)
        });

        if (!response.ok) {
            throw new Error('Failed to submit form');
        }

        formData.value = {
            name: '',
            mobile_number: '',
            whatsapp_number: '',
            address: '',
            national_id: ''
        };

        emits('refetchClients');
    } catch (error) {
        console.error('Error submitting form', error);
    }
}
</script>

<template>
    <Modal v-show="show">
        <template #header>
            إضافة عميل جديد
        </template>

        <template #default>
            <form id="clientForm" @submit.prevent="handleSumbit">
                <div class="mx-2">
                    <label for="name" class="block text-sm font-medium leading-6 text-gray-900">اسم العميل</label>
                    <div class="mt-2 max-w-72">
                        <input id="name" name="name" type="name" autocomplete="name" v-model="formData.name" class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div class="mx-2">
                    <label for="mobile_number" class="block text-sm font-medium leading-6 text-gray-900">رقم التليفون</label>
                    <div class="mt-2 max-w-72">
                        <input id="mobile_number" name="mobile_number" type="mobile_number" autocomplete="mobile_number" v-model="formData.mobile_number" class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div class="mx-2">
                    <label for="whatsapp_number" class="block text-sm font-medium leading-6 text-gray-900">واتساب</label>
                    <div class="mt-2 max-w-72">
                        <input id="whatsapp_number" name="whatsapp_number" type="whatsapp_number" autocomplete="whatsapp_number" v-model="formData.whatsapp_number" class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div class="mx-2">
                    <label for="address" class="block text-sm font-medium leading-6 text-gray-900">العنوان</label>
                    <div class="mt-2 max-w-72">
                        <input id="address" name="address" type="address" autocomplete="address" v-model="formData.address" class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div class="mx-2">
                    <label for="national_id" class="block text-sm font-medium leading-6 text-gray-900">الرقم القومي</label>
                    <div class="mt-2 max-w-72">
                        <input id="national_id" name="national_id" type="national_id" autocomplete="national_id" v-model="formData.national_id" class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
            </form>
        </template>

        <template #footer>
            <FormButton type="submit" form="clientForm" class="bg-blue-700 hover:bg-blue-600 text-white">
                إضافة العميل 
            </FormButton>

            <FormButton class="bg-red-700 hover:bg-red-600 text-white" @click="$emit('close')">
                إلغاء القائمة
            </FormButton>
        </template>
    </Modal>
</template>

