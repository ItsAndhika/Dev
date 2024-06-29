<script setup>
import Navbar from "@/Components/Navbar.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { Head, router } from "@inertiajs/vue3";

defineProps({
    username: String,
});

const handleLogout = () => {
    router.post("/logout");
};
</script>

<template>
    <Head title="User Dashboard" />
    <form @submit.prevent="handleLogout">
        <PrimaryButton type="submit">Logout</PrimaryButton>
        <Navbar :username="username" />
    </form>
</template>
