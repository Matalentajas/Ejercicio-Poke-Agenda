<template>
  <div class="min-h-screen bg-yellow-100">
  <nav class="flex items-center justify-between p-4 bg-orange-800">
    <div>
      <img class="w-24" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Logo de Pokémon">
    </div>
    <ul class="flex space-x-4">
      <li><router-link to="/register"><button class="cursor-pointer px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Registrate</button></router-link></li>
    </ul>
  </nav>

  <form @submit.prevent="logingUser" class="max-w-md mx-auto mt-40 p-6 bg-white rounded shadow-md">
    <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">Iniciar Sesion</h1>
    <div class="mb-4">
    <label for="email" class="block text-gray-700 font-bold mb-2">Correo Electrónico</label>
    <input type="email" id="email" v-model="email" placeholder="correoejemplo@ejem.com" required class="w-full px-3 py-2 border rounded">
    </div>
    <div class="mb-4">
    <label for="password" class="block text-gray-700 font-bold mb-2">Contraseña</label>
    <input type="password" id="password" v-model="password" placeholder="**********" required class="w-full px-3 py-2 border rounded">
    </div>
    <div class="flex items-center justify-between">
    <button type="submit" class="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700">Iniciar Sesión</button>
    <p class="text-gray-700">¿No tienes cuenta? <router-link to="/register" class="text-blue-500 hover:underline">Registrarse</router-link></p>
    </div>
  </form>
  </div>
</template>
  
  <script>
  import { auth } from "@/db/firebase";
  import { signInWithEmailAndPassword } from "firebase/auth";
  export default {
    name:"LogingView",
    components:{

    },
    data(){
      return{
        email:"",
        password:""
      }
    },
    methods: {
      async logingUser(){
        try{
          await signInWithEmailAndPassword(auth, this.email, this.password)
          console.log("Usuario Logeado con exito");
          this.$router.push('/profile')
        }catch(error){
          console.log("Error al iniciar sesion: ",error.message);
          
        }
      }
    }
  }
  </script>