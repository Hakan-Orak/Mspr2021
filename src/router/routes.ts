import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'listePromotion', component: () => import('pages/listePromotion.vue') },
      { path: 'qrcode', component: () => import('pages/lecteurQRcode.vue') },
      { path: 'qrcode/:id', component: () => import('pages/lecteurQRcode.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
