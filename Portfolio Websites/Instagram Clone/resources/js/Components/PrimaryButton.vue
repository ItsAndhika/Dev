<script setup>
defineProps({
    type: {
        type: String,
    },
});
</script>

<template>
    <button
        :type="type"
        class="bg-sky-500 rounded-lg px-2 py-1 text-base font-semibold text-white transition hover:bg-sky-600"
    >
        <slot />
    </button>
</template>
