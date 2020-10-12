import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/views/index/Index";

const Login = () => import('../views/login/Login')
const Test = () => import('../views/test/Test')

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Index",
        component: Index
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/test",
        name: "Test",
        component: Test
    }
];

const router = new VueRouter({
    routes
});

export default router;
