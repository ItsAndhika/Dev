<script setup>
import { mobileNavigation } from "@/data/dummy";
import { Link } from "@inertiajs/vue3";

defineProps({
    username: String,
});
</script>

<template>
    <header class="items-center justify-center w-full">
        <nav
            class="fixed bottom-0 z-10 w-full p-4 border-t md:left-0 md:right-10 md:border-r md:border-t-0"
        >
            <ul>
                <li class="flex items-center justify-around md:flex-col">
                    <Link
                        :href="item.url"
                        v-for="(item, index) in mobileNavigation"
                        :key="index"
                    >
                        <v-icon
                            :name="item.iconName"
                            :scale="item.scale"
                            class="transition duration-300 hover:scale-105"
                        />
                    </Link>
                    <Link :href="username">
                        <img
                            src="/images/default-profile.jpg"
                            :alt="username"
                            class="w-8"
                        />
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
</template>
