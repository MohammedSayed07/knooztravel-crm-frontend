<script setup>
import Modal from '@/components/Modal.vue';
import FormButton from '@/components/form/FormButton.vue'

defineProps({
    show: Boolean
})
</script>

<template>
    <Modal v-show="show">
        <template #header>
            إضافة عميل جديد
        </template>

        <template #default>
            <form>
                <div class="mx-2">
                    <label for="name" class="block text-sm font-medium leading-6 text-gray-900">اسم العميل</label>
                    <div class="mt-2 max-w-72">
                        <input id="name" name="name" type="name" autocomplete="name" class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
            </form>
        </template>

        <template #footer>
            <FormButton class="bg-blue-700 hover:bg-blue-600 text-white">
                إضافة العميل 
            </FormButton>

            <FormButton class="bg-red-700 hover:bg-red-600 text-white" @click="$emit('close')">
                إلغاء القائمة
            </FormButton>
        </template>
    </Modal>
</template>

