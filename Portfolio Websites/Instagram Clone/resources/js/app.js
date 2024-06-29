import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
    BiInstagram,
    CoHome,
    FaFlag,
    LaFacebookMessenger,
    MdAddboxOutlined,
    MdExploreOutlined,
    MdExploreSharp,
    MdMoviefilterOutlined,
    RiZhihuFill,
} from "oh-vue-icons/icons";
import { createApp, h } from "vue";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";

addIcons(
    FaFlag,
    RiZhihuFill,
    CoHome,
    MdExploreSharp,
    MdExploreOutlined,
    MdAddboxOutlined,
    MdMoviefilterOutlined,
    LaFacebookMessenger,
    BiInstagram
);

const appName = import.meta.env.VITE_APP_NAME;

createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .component("v-icon", OhVueIcon)
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});
