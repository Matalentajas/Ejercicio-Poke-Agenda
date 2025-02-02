import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/db/firebase'
import Home from '../views/HomeView.vue'
import Loging from '../views/LogingView.vue'
import Register from '../views/RegisterView.vue'
import Profile from '../views/ProfileView.vue'
import Pokedex from '../views/PokedexView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Loging
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {requiredAuth: true}
  },
  {
    path: '/pokedex',
    name: 'Pokedex',
    component: Pokedex
  }   
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach( (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiredAuth)
  if (requiresAuth){
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        next() // el usuario esta autenticado, permite la navegación
      }else{
        next({name: 'login'}) //lleva al login
      }
      unsubscribe()
    })
  }else{
    next() //si la ruta no requiere autentificación permite la navegación
  }
})
export default router