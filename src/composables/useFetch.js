import {ref} from "vue";

export function useFetch(url) {
    const data = ref(null);
    const isLoading = ref(false);
    const error = ref(null);

    const fetchData = async () => {
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