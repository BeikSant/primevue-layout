import HomeView from '@/views/HomeView.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import NotFound from '@/views/NotFound.vue'


const routes = [
    {
        path: '',
        component: () => MainLayout,
        name: 'layout',
        children: [{
            path: '',
            component: () => HomeView,
            name: 'home',
        }]
    },
    {
        path: '/:catchAll(.*)*',
        component: () => NotFound
    },
]

export default routes