import AdminDashboardView from '@/views/AdminDashboardView.vue';
import DashboardView from '@/views/DashboardView.vue';
import LoginView from '@/views/LoginView.vue';
import ProfileView from '@/views/ProfileView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: { role: 'user' },
    },
    {
      path: '/admin',
      name: 'admin-login',
      component: LoginView,
      meta: { role: 'admin' },
    },
    {
      path: '/home',
      name: 'home',
      component: DashboardView,
    },
    {
      path: '/admin-dashboard',
      name: 'admin-dashboard',
      component: AdminDashboardView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    }
  ],
});

export default router;
