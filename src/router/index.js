import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UserList from "@/views/UserList";
import UserDetail from "@/views/UserDetail";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/user',
        name: 'User',
        component: () => import(/* webpackChunkName: "about" */ '../views/User.vue'),
        children: [
            {
                path: "",
                component: UserList
            },
            {
                path: ":id",
                component: UserDetail,
                //進入前檢查，若從/user以外轉入則轉出
                beforeEnter(to, from, next) {
                    if(from.path !== "/user"){
                        next("/user")
                    }else{
                        next()
                    }
                }
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
