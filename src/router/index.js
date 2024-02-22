import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/WebLayout.vue'),
    children: [
      {
        path: '',
        name: 'HomeDefault',
        component: () => import('../views/HomeView.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/AboutView.vue'),
      },
      {
        path: '/privacy',
        name: 'Privacy',
        component: () => import('../views/PrivacyView.vue'),
      },
      {
        path: '/terms',
        name: 'Terms',
        component: () => import('../views/TermsView.vue'),
      },
      {
        path: '/signup',
        name: 'Signup',
        component: () => import('../views/SignupView.vue'),
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/LoginView.vue'),
      },
      {
        path: '/loginhex',
        name: 'LoginHex',
        component: () => import('../views/LoginHex.vue'),
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/NotFoundView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/backend/DashboardView.vue'),
    children: [
      {
        path: '',
        name: 'Vote',
        component: () => import('../views/backend/VoteView.vue'),
      },
      {
        path: 'account',
        name: 'Account',
        component: () => import('../views/backend/AccountView.vue'),
      },
      {
        path: 'resetpassword',
        name: 'ResetPassword',
        component: () => import('../views/backend/ResetPassword.vue'),
      },
      {
        path: 'pushpic',
        name: 'TestPushPic',
        component: () => import('../views/backend/TestPushPic.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
