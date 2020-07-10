import Vue from 'vue'
import VueRouter from 'vue-router'

const HomeComponent = () => import("./components/Home.vue");
const ChoseComponent = () => import("./components/Chose.vue");
const FaceComponent = () => import("./components/Face.vue");
const FinalComponent = () => import("./components/Final.vue");


Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    hashbang: false,
    routes: [
        { path: '*',         component: HomeComponent },
        { path: '/chose',         component: ChoseComponent },
        { path: '/face',         component: FaceComponent },
        { path: '/final/:id',         component: FinalComponent },
    ]
})