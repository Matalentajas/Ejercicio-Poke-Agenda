<template>
  <div class="min-h-screen bg-yellow-100">
  <nav class="flex items-center justify-between p-4 bg-orange-800">
    <div>
      <img class="w-24" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Logo de Pokémon">
    </div>
    <ul class="flex space-x-4">
      <li><router-link to="/profile"><button class="cursor-pointer px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Perfil</button></router-link></li>
    </ul>
  </nav>

  <div class="flex justify-center mt-4">
    <input type="text" placeholder="Buscar Pokémon favorito" class="px-4 py-2 border rounded-l-md focus:outline-none" v-model="searchQuery"/>
    <button class="px-4 py-2 font-bold text-white bg-blue-500 rounded-r-md hover:bg-blue-700" @click="searchPokemon">Buscar</button>
  </div>
  </div>
  </template>
  
  <script>
  export default {
    name: "PokedexView",
    data(){
      return{
        
      }
    }
  
  }
  </script>
  
  <style>
  
  </style>