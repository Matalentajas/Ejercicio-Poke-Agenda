import { createRouter, createWebHistory } from 'vue-router'

import { Home } from "../views/HomeView.vue";
import { Login } from "../views/LogingView.vue";
import { Pokedex } from "../views/PokedexView.vue";
import { Profile } from "../views/ProfileView.vue";
import { Register } from "../views/RegisterView.vue";

const routers = [
    {
        path:"/",
        name:"Home",
        component:Home
    },
    {
        path:"/Login",
        name:"Login",
        component:Login
    },
    {
        path:"/Pokedex",
        name:"Pokedex",
        component:Pokedex
    },
    {
        path:"/Profile",
        name:"Profile",
        component:Profile,
        meta:{requiredAuth: true}
    },
    {
        path:"/Register",
        name:"Register",
        component:Register
    },
]

const router = createRouter({
    history: createWebHistory(process.env.Base_URL),
    routers
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