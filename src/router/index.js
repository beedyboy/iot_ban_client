import { createWebHistory, createRouter } from "vue-router"

import SignUp from '../views/SignUp'
import Login from  '../views/Login'
import Home from '../views/Home'
import Records from '../views/Records'
import Doctor from '../views/Doctor'


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
   {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: '/login',
      name: "Login",
    component: Login,
  },
  {
    path: '/records',
    name:  "Records",
    component: Records,
  },
  {
    path: '/doctor',
    name:  "Doctor",
    component: Doctor,
  },
  

]






const router = createRouter({
  history: createWebHistory (process.env.BASE_URL),
  routes,
})

export default router


