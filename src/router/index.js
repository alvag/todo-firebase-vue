import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/edit/:id',
        name: 'Edit',
        component: () => import('../views/Edit')
    },
    {
        path: '/add',
        name: 'Add',
        component: () => import('../views/Add')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/Register')
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
