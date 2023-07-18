import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import User from "@/views/user-center/index";

Vue.use(VueRouter);

const routes = [
  {
    /* 使用路由组件的页面 */
    path: "/",
    component: Home,
    redirect: "/competition",
    children: [
      {
        /* 比赛服务 */
        path: "competition",
        component: () => import("@/views/competition/index"),
      },
      {
        path:"competition-details/competition1/:id",
        component:() => import("@/views/competition-details/competition1")
      },
      {
        path:"competition-details/competition2/:id",
        component:() => import("@/views/competition-details/competition2")
      },
      {
        path:"competition-details/competition3/:id",
        component:() => import("@/views/competition-details/competition3")
      },
      {
        path:"competition-details/competition4/:id",
        component:() => import("@/views/competition-details/competition4")
      },
    ],
  },
  {
    /* 登录页面 */
    path: "/login",
    component: () => import("@/views/login/index"),
  },
  {
    /* 注册页面 */
    path: "/register",
    component: () => import("@/views/register/index"),
  },
  {
    /* 忘记密码页面 */
    path: "/forget",
    component: () => import("@/views/forget/index"),
  },
  {
    /* 用户个人中心 */
    path: "/user",
    component: User,
    redirect: "/user/index",
    children: [
      {
        /* 个人资料 */
        path: "/user/index",
        component: () => import("@/views/user-center/components/center"),
      },
      // {
      //   /* 班级信息 */
      //   path: "/user/class",
      //   component: () => import("@/views/user-center/components/class"),
      // },
      // {
      //   /* 订单中心 */
      //   path: "/user/order",
      //   component: () => import("@/views/user-center/components/order"),
      // },
      {
        /* 修改密码 */
        path: "/user/change",
        component: () => import("@/views/user-center/components/change"),
      },
    ],
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404"),
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  // mode: "hash",
  routes,
});

export default router;
