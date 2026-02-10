import { createRouter, createWebHistory } from 'vue-router'
import information from '@/views/Information.vue'
import sliderPage from '@/views/SliderPage.vue'

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            name: 'information',
            component: information,
        },
        {
            path: '/slider',
            name: 'sliderPage',
            component: sliderPage,
        },
    ],
})

export default router
