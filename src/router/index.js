/** @format */

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin2211",
    component: () => import(/* webpackChunkName: "admin" */ "../views/Admin.vue"),
    meta: {requiresAuth: true, title: "Admin"},
  },
  {
    path: "/danh-muc",
    component: () => import(/* webpackChunkName: "admin" */ "../views/Category.vue"),
    meta: {
      title: "Danh mục",
    },
    children: [
      {
        path: "/danh-muc/:category",
        component: () => import(/* webpackChunkName: "admin" */ "../components/CategoryProducts.vue"),
        meta: {
          title: "Danh mục",
        },
      },
    ],
  },
  {
    path: "/gioi-thieu",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      title: "Giới thiệu",
    },
  },
  {
    path: "/login",
    component: () => import(/* webpackChunkName: "about" */ "../components/Login.vue"),
    name: "login",
    meta: {
      title: "Đăng nhập",
    },
  },
  {
    path: "/dat-hang",
    component: () => import(/* webpackChunkName: "about" */ "../views/Cart.vue"),
    meta: {
      title: "Đặt hàng",
    },
  },
  {
    path: "/san-pham",
    name: "Products",
    component: () => import(/* webpackChunkName: "about" */ "../views/Products.vue"),
    meta: {
      title: "Sản phẩm",
    },
  },

  {
    path: "/san-pham/id=:id/:slug",
    name: "ProductDetail",
    component: () => import(/* webpackChunkName: "about" */ "../components/ProductDetail.vue"),
    meta: {
      title: "Sản phẩm",
    },
  },
  {
    path: "/cong-trinh",
    name: "Construction",
    component: () => import(/* webpackChunkName: "about" */ "../views/Construction.vue"),
    meta: {
      title: "Công trình",
    },
  },
  {
    path: "/lien-he",
    name: "Contact",
    component: () => import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
    meta: {
      title: "Liên hệ",
    },
  },
  {
    path: "/*",
    name: "Error",
    component: () => import(/* webpackChunkName: "about" */ "../views/ErrorPage.vue"),
    meta: {
      title: "Not found",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  store.commit("setLoader");
  Vue.nextTick(() => {
    document.title = to.meta.title || "V-home Đà Lạt";
  });
  window.scrollTo({
    top: 0,
    left: 0,
  });

  next();
});
export default router;
