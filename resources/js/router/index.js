import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "@/pages/HomeView";
import PageNotFound from "@/pages/PageNotFound";
import DutView from "@/pages/DutView";
import DutVideosView from "@/pages/DutVideosView";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component:HomeView,
    },
    {
        path: '/DUTinfo',
        name: 'DUTinfo',
        component:DutView,
    },
    {
        path: '/DUTinfo/Videos',
        name: 'DUTinfoVideos',
        component:DutVideosView,
    },
    {
        path: "*",
        component:PageNotFound,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
