import { createWebHistory, createRouter } from "vue-router"

import SignUp from '../views/SignUp'
import Login from  '../views/Login'
import Home from '../views/Home'
import Records from '../views/Records'
import Emergency from '../views/Emergency'
import NotFound from '../views/NotFound'
// import ProfileForm from '../views/ProfileForm'



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
    path: '/emergency',
    name:  "Emergency",
    component: Emergency,
  },
  // {
  //   path: '/profileform',
  //   name:  "ProfileForm",
  //   component: ProfileForm,
  // },

  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
 
]






const router = createRouter({
  history: createWebHistory (process.env.BASE_URL),
  routes,
})

export default router


