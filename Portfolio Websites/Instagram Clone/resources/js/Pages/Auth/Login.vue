<script setup>
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import LoginCard from "@/Components/LoginCard.vue";
import GuestLayout from "@/Layouts/GuestLayout.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";

const form = useForm({
    email: "",
    password: "",
});

const handleSubmit = () => {
    form.post(route("login"));
};
</script>

<template>
    <Head title="Instagram - Login" />
    <form @submit.prevent="handleSubmit">
        <GuestLayout>
            <LoginCard>
                <h1 class="text-3xl font-bold italic mb-5">Instagram</h1>
                <div class="w-full flex flex-col items-start gap-2">
                    <TextInput
                        type="email"
                        placeholder="Email"
                        v-model="form.email"
                        required
                    />
                    <InputError :message="form.errors.email" />
                </div>
                <div class="w-full flex flex-col items-start gap-2">
                    <TextInput
                        type="password"
                        placeholder="Password"
                        v-model="form.password"
                        required
                    />
                    <InputError :message="form.errors.password" />
                </div>
                <PrimaryButton type="submit">Log In</PrimaryButton>
            </LoginCard>
            <LoginCard>
                <p>
                    Don't have an account?
                    <Link
                        :href="route('register')"
                        class="text-sky-500 transition hover:text-sky-600"
                        >Sign Up</Link
                    >
                </p>
            </LoginCard>
            <p>Get the app.</p>
            <div>
                <Link href="/">
                    <img
                        src="/images/get-on-google-play.png"
                        alt="Get On Google Play"
                        class="w-40"
                    />
                </Link>
            </div>
        </GuestLayout>
    </form>
</template>
