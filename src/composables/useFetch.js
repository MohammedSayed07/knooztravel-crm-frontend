import {ref} from "vue";

export function useFetch(url) {
    let data = ref(null);
    let isLoading = ref(false);
    let error = ref(null);

    let fetchData = async () => {
        isLoading.value = true;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw Error('Network response was not ok');
            }
            const jsonData = await response.json();
            data.value = jsonData;
        } catch (err) {
            error.value = err.message;
        } finally {
            isLoading.value = false;
        }
    }

    return { data, isLoading, error, fetchData }
}