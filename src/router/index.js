import { createWebHistory, createRouter } from "vue-router"

import SignUp from '../views/SignUp'
import Login from  '../views/Login'
import Home from '../views/Home'
import Records from '../views/Records'
import Doctor from '../views/Doctor'
import OTPModal from '../views/OTPModal'


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
  {
    path: '/otpmodal',
    name:  "OTPModal",
    component: OTPModal,
  },

]






const router = createRouter({
  history: createWebHistory (process.env.BASE_URL),
  routes,
})

export default router


