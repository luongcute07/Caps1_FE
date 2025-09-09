import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: () => import('../layout/wrapper/index.vue'),
    children: [
      {
        path: 'admin/danhmuc',
        component: () => import('../components/admin/danhmuc/danhmuc.vue')
      },
      {
        path: 'admin/sanpham',
        component: () => import('../components/admin/sanpham/sanpham.vue')
      }
    ]
  },
  {
    path: "/admin/lich-hen",
    component: () => import("../components/Admin/lichhen/index.vue"),
    meta: {
      layout: "admin",
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
