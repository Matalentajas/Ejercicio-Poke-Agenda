<template>
  <div class="min-h-screen bg-yellow-100">
  <nav class="flex items-center justify-between p-4 bg-orange-800">
    <div>
      <img class="w-24" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Logo de Pokémon">
    </div>
    <ul class="flex space-x-4">
      <li><router-link to="/pokedex"><button class="cursor-pointer px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Pokedex</button></router-link></li>
    </ul>
  </nav>
  <div>

  </div>
  <div class="container mx-auto p-4">
    <div class="bg-white shadow-md rounded-lg p-6">
      <div class="flex items-center space-x-4">
        <div>
          <h2 class="text-2xl font-bold">Nombre del Usuario</h2>
          <p class="text-gray-600">Correo electrónico: </p>
        </div>
      </div>
      <div class="mt-6">
        <h3 class="text-xl font-semibold">Pokémon Favoritos</h3>
      </div>
    </div>
  </div>

  </div>
</template>
  
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  </style>stylestyle