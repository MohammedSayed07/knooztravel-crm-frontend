<script setup>
import ClientModal from "@/components/clients/ClientModal.vue"
import ClientDetails from "@/components/clients/ClientDetails.vue"
import { useFetch } from "@/composables/useFetch";
import ClientList from "@/components/clients/ClientList.vue"
import { onMounted, ref } from "vue";

let {data, isLoading, error, fetchData} = useFetch("http://127.0.0.1:8000/api/clients")    

let showClientModal = ref(false);

let clientClicked = ref(null);

onMounted(()=> {
    fetchData();
})

const handleClickedClient = (payload) => {
    clientClicked.value = payload;
}

</script>

<template>
    <main class="flex">
        <div class="space-y-2">
            <button class="flex lg:mt-4 py-1 lg:py-2 lg:px-1 mt-4 bg-yellow-400 rounded-lg text-black items-center justify-center">
                    إضافة عميل جديد
            </button>
            <ClientModal :show="showClientModal" @close="showClientModal = false"/>

            <p v-if="isLoading">Loading...</p>
            <p v-else-if="error">{{ error }}</p>
            <ClientList
            @emitClient="handleClickedClient"
            v-else :clients="data"/>
        </div>

        <div v-if="clientClicked" class="m-4 w-full">
            <ClientDetails :client="clientClicked"/>
        </div>
    </main>
</template>
