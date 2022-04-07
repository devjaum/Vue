import {createRouter, createWebHistory} from 'vue-router'

const routes =[
    {
        path:'/',
        name:'Home',
        component: ()=> import('../views/home.vue')
    },
    {
        path: '/cadastro',
        name: 'Cadastrar',
        component: () => import('../views/admUser.vue')
    },
    {
        path:'/alterar',
        name:'Alterar',
        component: () => import('../views/alterar.vue')
    },
    {
        path:'/deletar',
        name:'Deletar',
        component: () => import('../views/deletar.vue')
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router