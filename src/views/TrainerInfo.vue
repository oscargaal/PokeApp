<template>
  <div>
    <!-- Navbar -->
    <nav>
      <Navbar2 />
    </nav>

    <!-- Mostrar info del trainer con loader -->

    <div v-if="!showLoader && trainer" class="grid grid-cols-2 items-center">

      <!-- columna imagen -->
      <div class="flex justify-center -mt-10">
       <img :src="trainer.image" alt="Foto de trainer" class="w-65 h-90" />
      </div>

      <!-- columna información -->
      <div class="flex flex-col gap-4 items-center mb-4">

        <!-- nombre y titulo -->

        <div class=" gap-2 flex flex-col nes-container is-rounded bg-white p-0! w-60 h-20 shadow-lg  shadow-gray-700">
          <div class="flex justify-center items-center! p-2 rounded-md bg-red-700">
            <img src="/src/assets/pokeball.svg" alt="Pokeball" class="w-6 h-6" />
            <p class="text-xs text-white -mb-1! ml-3">{{ trainer.id.toString().padStart(3, '0') /*maximo 3
              numeros*/}} {{ trainer.name }}</p>
          </div>
          <div>
            <p class="text-xs text-gray-500 text-center">{{ trainer.tittle }}</p>
          </div>
        </div>

        <!-- Redes sociales -->
        <div>
          <a :href="trainer.rrss.url" target="_blank">
            <i class="nes-icon github is-medium"></i>
          </a>
        </div>

        <!-- Tech skills -->

       <div class="nes-container is-rounded bg-white border border-black w-60 shadow-lg !p-0 shadow-gray-700">
        <div class="flex justify-center">
          <span class="font-semibold">Tech Skills</span>
        </div>

        <!-- línea divisoria -->
        <div class="border-dotted border-2 border-gray-500 my-2"></div>

        <!-- imagen de iconos -->
        <div class="flex justify-center">
          <img :src="trainer.icons" alt="techskills" class="w-55 h-10" />
        </div>
      </div>

      </div>
    </div>

    <!-- Loader -->
    <div v-else class="text-center text-xl">
      <div class="flex items-center justify-center mt-10 mb-8">
        <img src="https://i.gifer.com/2iiJ.gif" alt="pikachu" width="200px">
      </div>
      Cargando datos del Trainer...
    </div>
  </div>
</template>

<script>
import Navbar2 from '../components/Navbar2.vue';
import trainersDB from '../trainersDB.js';

export default {
  name: 'TrainerInfo',
  components: {
    Navbar2
  },
  data() {
    return {
      trainer: null,
      showLoader: true
    };
  },
  mounted() {
    const id = Number(this.$route.params.id);
    this.trainer = trainersDB.find(t => t.id === id);
    console.log('Trainer encontrado:', this.trainer);

    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  }
}

</script>

<style></style>