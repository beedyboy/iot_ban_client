import { createWebHistory, createRouter } from "vue-router"

import SignUp from '../views/SignUp'
import Login from  '../views/Login'
import Home from '../views/Home'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  }, {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: '/login',
      name: "Login",
    component: Login,
  },
]

 
const router = createRouter({
  history: createWebHistory (process.env.BASE_URL),
  routes,
})

export default router


