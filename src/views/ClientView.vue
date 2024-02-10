<script setup>
import { useFetch } from "@/composables/useFetch";
import ClientList from "@/components/clients/ClientList.vue"
import { onMounted } from "vue";

    const {data, isLoading, error, fetchData} = useFetch("http://127.0.0.1:8000/api/clients")    
    
    onMounted(()=> {
        fetchData();
    })
</script>

<template>
    <main>
        <div>
            <p v-if="isLoading">Loading...</p>
            <p v-else-if="error">{{ error }}</p>

            <ClientList 
            v-else :clients="data"/>
        </div>
    </main>
</template>
