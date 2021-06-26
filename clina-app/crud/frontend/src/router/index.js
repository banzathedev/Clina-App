import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Main from "../views/MainPage.vue";
import RoomReserve from "../views/RoomReserves.vue";
// import store from "../store/store"

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

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
//   const currentUser = store.getters.passToken 

//   if(requiresAuth && !currentUser) {
//     next('/')
//   } else if (requiresAuth && currentUser) {
//     next()
//   } 
// })

export default router;
