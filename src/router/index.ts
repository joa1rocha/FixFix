// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'canalizadores',
        name: 'Canalizadores',
        component: () => import('@/views/Especialistas.vue'),
      },
      {
        path: 'canalizadores/:id',
        name: 'Canalizador',
        component: () => import('@/views/Especialista.vue'),
      },
      {
        path: 'eletricistas',
        name: 'Eletricistas',
        component: () => import('@/views/Especialistas.vue'),
      },
      {
        path: 'eletricistas/{id}',
        name: 'Eletricista',
        component: () => import('@/views/Especialista.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
