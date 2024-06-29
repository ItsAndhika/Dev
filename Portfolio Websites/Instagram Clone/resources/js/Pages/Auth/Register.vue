<script setup>
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import LoginCard from "@/Components/LoginCard.vue";
import GuestLayout from "@/Layouts/GuestLayout.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";

const form = useForm({
    email: "",
    full_name: "",
    username: "",
    password: "",
    password_confirmation: "",
});

const handleSubmit = () => {
    form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation"),
    });
};
</script>

<template>
    <Head title="Instagram - Register" />
    <form @submit.prevent="handleSubmit">
        <GuestLayout>
            <LoginCard>
                <h1 class="text-3xl font-bold italic mb-5">Instagram</h1>
                <p class="text-slate-500 text-base">
                    Sign up to see photos and videos from your friends.
                </p>
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
                        type="text"
                        placeholder="Full Name"
                        v-model="form.full_name"
                        required
                    />
                    <InputError :message="form.errors.full_name" />
                </div>
                <div class="w-full flex flex-col items-start gap-2">
                    <TextInput
                        type="text"
                        placeholder="Username"
                        v-model="form.username"
                        required
                    />
                    <InputError :message="form.errors.username" />
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
                <div class="w-full flex flex-col items-start gap-2">
                    <TextInput
                        type="password"
                        placeholder="Confirm Password"
                        required
                        v-model="form.password_confirmation"
                    />
                    <InputError :message="form.errors.password_confirmation" />
                </div>
                <PrimaryButton type="submit">Register</PrimaryButton>
                <p class="text-xs text-slate-500">
                    People who use our service may have uploaded your contact
                    information to Instagram. Learn More
                </p>
                <p class="text-xs text-slate-500">
                    By signing up, you agree to our Terms , Privacy Policy and
                    Cookies Policy .
                </p>
            </LoginCard>
            <LoginCard>
                <p>
                    Already have an account?
                    <Link
                        :href="route('login')"
                        class="text-sky-500 transition hover:text-sky-600"
                        >Sign In</Link
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
