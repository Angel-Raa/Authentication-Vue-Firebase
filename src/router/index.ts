import { createRouter, createWebHistory, type Router } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { type RouteLocationNamedRaw, type NavigationGuardNext } from 'vue-router'

const authGuard = (
  to: RouteLocationNamedRaw | any,
  from: RouteLocationNamedRaw,
  next: NavigationGuardNext
): void => {
  const authStore = useAuthStore()
  const isAuthenticated = authStore.user !== null
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' })
  } else {
    next()
  }
}
const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/page/HomePage.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/page/LoginPage.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/page/RegisterPage.vue'),
      meta: {
        requiresAuth: false
      }
    }
  ]
})

router.beforeEach(authGuard)

export default router
