<script setup>
import ClientModal from "@/components/clients/ClientModal.vue"
import ClientDetails from "@/components/clients/ClientDetails.vue"
import { useFetch } from "@/composables/useFetch";
import ClientList from "@/components/clients/ClientList.vue"
import { onBeforeMount, ref } from "vue";

let {data, isLoading, error, fetchData} = useFetch("http://127.0.0.1:8000/api/clients");   

let clientModal = ref(false);

let clientClicked = ref(null);

onBeforeMount(()=> {
    fetchData();
})

const handleClickedClient = (payload) => {
    clientClicked.value = payload;
}

function showClientModal() {
    clientModal.value = true;
}

</script>

<template>
    <main class="flex">
        <div>
            <ClientModal :show="clientModal" @close="clientModal = false" @refetchClients="fetchData"/>
            
            <div class="space-y-2">
                <button 
                @click="showClientModal"
                class="flex lg:mt-4 py-1 lg:py-2 lg:px-1 mt-4 bg-yellow-400 rounded-lg text-black items-center justify-center">
                        إضافة عميل جديد
                </button>

                <p v-if="isLoading">Loading...</p>

                <p v-else-if="error">{{ error }}</p>

                <ClientList
                class="scroll-smooth overflow-y-auto max-height hide-scroll"
                @emitClient="handleClickedClient"
                v-else :clients="data"/>
            </div>
        </div>

        <div v-if="clientClicked" class="m-4 w-full">
            <ClientDetails :clientId="clientClicked"/>
        </div>
    </main>
</template>

<style scoped>
.max-height {
    height: 90vh;
}

.hide-scroll::-webkit-scrollbar {
  display: none;
}
</style>