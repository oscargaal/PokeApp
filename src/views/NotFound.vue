<template>
  <div class="w-full h-[79.5%] flex flex-col items-center justify-center bg-gray-100">
    <h1 class="text-6xl font-bold text-red-700 mb-4">404</h1>
    <h2 class="text-2xl font-semibold mb-2">Página no encontrada</h2>
    <p class="mb-6 text-gray-600 text-center">Lo sentimos, la página que buscas no existe.</p>
    <router-link to="/" class="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800 transition">
      Volver al inicio
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
}
</script>
