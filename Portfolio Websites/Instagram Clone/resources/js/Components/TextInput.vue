<script setup>
defineProps({
    type: {
        type: String,
    },
    placeholder: {
        type: String,
    },
});

const model = defineModel({
    type: String,
    required: true,
});
</script>

<template>
    <input
        :type="type"
        :placeholder="placeholder"
        v-model="model"
        class="w-full transition border border-gray-600 ring-0 rounded-sm focus:border-gray-700 focus:ring-gray-700 placeholder:text-sm"
    />
</template>
