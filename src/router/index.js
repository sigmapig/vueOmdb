import Vue from 'vue'
import Router from 'vue-router'
import Adminlte from '../views/Adminlte.vue'
import Search1 from '../views/Search1.vue'
import { authGuard } from "../auth/authGuard"

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
    {
        path: '/',
        name: 'Search1',
        component: Search1,
    },
    // {
    //     path: '/',
    //     name: 'Search2',
    //     component: Search2,
    // },
    {
        path: '/Contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue'),
    },
    {
        path: '/admin',
        name: 'Adminlte',
        component: Adminlte,
        beforeEnter: authGuard
    },
    {
        path: '/event/:id',
        name: 'roll',
        component: () => import('../views/Roll.vue'),
        beforeEnter: authGuard,
    },
    {
        path: "/",
        alias: "/collections",
        name: "tutorials",
        component: () => import("./components/CollectionList")
      },
      {
        path: "/collections/:id",
        name: "collections-details",
        component: () => import("./components/Collection")
      },
      {
        path: "/add",
        name: "add",
        component: () => import("./components/AddCollection")
      }
  ]
})