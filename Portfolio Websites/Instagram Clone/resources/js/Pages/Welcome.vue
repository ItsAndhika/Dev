<script setup>
import { Head } from "@inertiajs/vue3";
import Login from "./Auth/Login.vue";

defineProps({
    canLogin: {
        type: Boolean,
    },
});
</script>

<template>
    <Head title="Instagram" />
    <Login />
</template>
