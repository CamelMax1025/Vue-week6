import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [{
      path: '',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: 'cart',
      component: () => import('../views/CartView.vue'),
    },
    {
      path: 'products',
      component: () => import('../views/ProductsView.vue'),
    }],
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/dashboard/DashboardView.vue'),
    children: [
      {
        path: 'order',
        component: () => import('../views/dashboard/OrderView.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/dashboard/ProductsView.vue'),
      },
    ],
  },
  // 404 頁面
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFoundView.vue'),
  },
  {
    // 進入products頁面輸入不存在頁面，重新引導回Home。
    path: '/products/:pathMatch(.*)*',
    redirect: {
      name: 'Home',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
