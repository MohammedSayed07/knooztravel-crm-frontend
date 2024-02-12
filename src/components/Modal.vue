<script setup>

</script>

<template>
<div class="fixed inset-0 bg-gray-500 bg-opacity-60 grid place-items-center -mt-80">
    <div class="bg-white p-1 w-6/12 rounded-lg pt-4">
        <header class="flex justify-center text-2xl font-medium">
            <slot name="header">

            </slot>
        </header>
        <main class="mt-6">
            <slot>

            </slot>
        </main>
        <footer class="flex justify-center gap-x-4 mt-10 mb-8">
            <slot name="footer">
                
            </slot>
        </footer>
    </div>
</div>
</template>
