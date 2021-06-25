import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Main from "../views/MainPage.vue";
import RoomReserve from "../views/RoomReserves.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Login,
    children: [],
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
  },
  {
    path: "/Reservar",
    name: "Reserve",
    component: RoomReserve,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
