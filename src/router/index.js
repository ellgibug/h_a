import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta';
import axios from "axios";

import {store} from "../store/index"

import Landing from '../views/outside/landing.vue'
import PageNotFound from '../views/errors/pageNotFound.vue'

Vue.use(VueRouter)
Vue.use(Meta);

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters['user/isAuthed']) {
        next();
        return;
    }
    next("/dashboard");
};

const ifAuthenticated = (to, from, next) => {
    if (store.getters['user/isAuthed']) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${store.getters['user/token']}`;
        next();
        return;
    }
    next("/login");
};



const routes = [
    {
        path: '/',
        name: 'Landing',
        component: Landing,
        meta: {
            layout: 'OutsideLayout',
            title: 'Landing'
        }
    },
    {
        path: '/login',
        name: 'Login',
       beforeEnter: ifNotAuthenticated,
        meta: {
            layout: 'AuthLayout',
            title: 'Login'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/auth/login.vue')
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        beforeEnter: ifAuthenticated,
        meta: {
            layout: 'InsideLayout',
            title: 'Dashboard'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/inside/dashboard.vue')
        }
    },
    {
        path: '*',
        name: 'PageNotFound',
        component: PageNotFound,
        meta: {
            layout: 'ErrorLayout',
            title: 'PageNotFound'
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
