<template>
  <div class="min-h-screen bg-yellow-100">
    <nav class="flex items-center justify-between p-4 bg-orange-800">
      <div>
        <img class="w-24" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Logo de Pokémon">
      </div>
      <ul class="flex space-x-4">
        <li><router-link to="/register"><button class="cursor-pointer px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Registrate</button></router-link></li>
        <li><router-link to="/login"><button class="cursor-pointer px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700">Iniciar Sesión</button></router-link></li>
      </ul>
    </nav>
    <div class="container mx-auto mt-50 text-center">
      <h1 class="mb-4 text-4xl font-bold text-orange-800">Bienvenido a la Agenda de Pokémon</h1>
      <p class="mb-6 text-lg text-gray-700">Explora el mundo de los Pokémon y descubre sus habilidades y características.</p>
      <router-link to="/register"><button class="cursor-pointer px-6 py-3 font-bold text-white bg-red-500 rounded hover:bg-red-700">Registrate para empezar la aventura</button></router-link>
      <div class="flex justify-center mt-6">
        <img class="w-48 h-48" src="https://images.gamebanana.com/img/ico/sprays/pikachu.gif" alt="Pikachu">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView"
}
</script>

<style>

</style>