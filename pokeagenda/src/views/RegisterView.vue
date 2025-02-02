<template>
    <div class="min-h-screen bg-yellow-100">
    <nav class="flex items-center justify-between p-4 bg-orange-800">
      <div>
        <img class="w-24" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Logo de Pokémon">
      </div>
      <ul class="flex space-x-4">
        <li><router-link to="/login"><button class="cursor-pointer px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700">Iniciar Sesión</button></router-link></li>
      </ul>
    </nav>

    <form @submit.prevent="registerUser" class="max-w-md mx-auto mt-40 p-6 bg-white rounded shadow-md">
      <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">Registrarse</h1>
      <div class="mb-4">
      <label for="email" class="block text-gray-700 font-bold mb-2">Correo Electrónico</label>
      <input type="email" id="email" v-model="email" placeholder="correoejemplo@ejem.com" required class="w-full px-3 py-2 border rounded">
      </div>
      <div class="mb-4">
      <label for="password" class="block text-gray-700 font-bold mb-2">Contraseña</label>
      <input type="password" id="password" v-model="password" placeholder="**********" required class="w-full px-3 py-2 border rounded">
      </div>
      <div class="flex items-center justify-between">
      <button type="submit" class="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700">Registrarse</button>
      <p class="text-gray-700">¿Ya tienes cuenta? <router-link to="/login" class="text-blue-500 hover:underline">Iniciar Sesión</router-link></p>
      </div>
    </form>
    </div>
</template>
  
  <script>
  import { auth } from "@/db/firebase";
  import { createUserWithEmailAndPassword } from "firebase/auth"

  export default {
    name: "RegisterView",
    components: {
    },
    data(){
      return{
        email:"",
        password:""
      }
    },
    methods:{
      async registerUser(){
        try {
          await createUserWithEmailAndPassword(auth, this.email, this.password)
          this.$router.push('/Profile')
          console.log("Usuario creado con exito");
        
        }catch(error){
          console.log("Error al registrar el usuario: ", error.message);
        }
      }
    }
  }

  </script>