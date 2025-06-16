<template>
  <div>
    <!-- Navbar info -->
    <nav>
      <Navbar2 />
    </nav>

    <!-- mostrar info del pokemon con un tiempo para que se vea pikachu corriendo -->
    <div v-if="!showLoader && pokemonData" class="grid grid-cols-2 items-center">

      <!-- columna 1 imagen -->

      <div class="flex justify-end">
        <img :src="pokemonData.sprites.front_default" :alt="pokemonData.name" class="w-80" />
      </div>

      <!-- columna 2 información del pokemon -->

      <div class="flex flex-col gap-6 ml-10">

        <!-- nº pokemon y categoria -->

        <div class=" gap-2 flex flex-col nes-container is-rounded bg-white p-0! w-60 h-20 shadow-lg  shadow-gray-700">
          <div class="flex justify-center items-center! p-2 rounded-md bg-red-700">
            <img src="/src/assets/pokeball.svg" alt="Pokeball" class="w-6 h-6" />
            <p class="text-xs text-white -mb-1! ml-3">{{ pokemonData.id.toString().padStart(3, '0') /*maximo 3
              numeros*/}} {{ capitalize(pokemonData.name) }}</p>
          </div>
          <div>
            <p class="text-xs text-gray-500 text-center">{{ speciesData?.genera }}</p>
          </div>
        </div>

        <!-- tipo de pokemon -->

        <div class="flex justify-start gap-2">
          <div v-for="typeInfo in pokemonData.types" :key="typeInfo.type.name"
            class="flex text-center items-center nes-container is-rounded text-white text-sm w-28 h-10 shadow-lg shadow-gray-700 justify-center"
            :class="getTypeColor(typeInfo.type.name)">
            {{ typeInfo.type.name.toUpperCase() }}
          </div>
        </div>

        <!-- información ataque/defensa -->

        <div
          class="nes-container is-rounded !p-0 bg-white border border-black text-sm w-60 h-18 shadow-lg shadow-gray-700">
          <div class="flex flex-col text-center">
            <div class="flex justify-around">
              <span class="font-semibold">Attack</span>
              <span>{{ getStat('attack') }}</span>
            </div>

            <!-- linea divisoria entre ataque/defensa -->
            <div class="border-dotted border-3 border-gray-500 my-2"></div>

            <div class="flex justify-around">
              <span class="font-semibold">Defense</span>
              <span>{{ getStat('defense') }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- mostrar el pikachu mientras carga -->

    <div v-else class=" text-center text-xl">
      <div class="flex items-center justify-center mt-10 mb-8">
        <img src="https://i.gifer.com/2iiJ.gif" alt="pikachu" width="200px">
      </div>
      Cargando datos del Pokemon...
    </div>
  </div>

</template>

<script>
import Navbar2 from '../components/Navbar2.vue';

export default {
  name: "PokemonInfo",
  components: {
    Navbar2
  },
  data() {
    return {
      pokemonData: null,
      speciesData: null,
      showLoader: true,
    };
  },
  async mounted() {
    const id = this.$route.params.id;

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      this.pokemonData = data;

      const speciesResponse = await fetch(data.species.url);
      const speciesDetails = await speciesResponse.json();
      const genera = speciesDetails.genera.find(g => g.language.name === 'en');
      this.speciesData = {
        genera: genera?.genus || "Unknown Pokemon"
      };
    } catch (error) {
      console.error("Error al cargar los datos del Pokemon:", error);
    }

    // para que se vea el pikachu corriendo xD
    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  },

  methods: {
    getStat(name) {
      if (!this.pokemonData) return '-';
      const stat = this.pokemonData.stats.find(s => s.stat.name === name);
      return stat ? stat.base_stat : '-';
    },
    capitalize(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    },
    getTypeColor(type) {
      const typeColors = {
        normal: 'bg-gray-400',
        fire: 'bg-red-500',
        water: 'bg-blue-500',
        electric: 'bg-yellow-500',
        grass: 'bg-green-500',
        ice: 'bg-cyan-300',
        fighting: 'bg-orange-700',
        poison: 'bg-purple-500',
        ground: 'bg-yellow-700',
        flying: 'bg-indigo-300',
        psychic: 'bg-pink-500',
        bug: 'bg-lime-500',
        rock: 'bg-yellow-800',
        ghost: 'bg-purple-800',
        dragon: 'bg-indigo-700',
        dark: 'bg-gray-800',
        steel: 'bg-gray-500',
        fairy: 'bg-pink-300'
      };

      return typeColors[type] || 'bg-gray-200';
    }
  }

}

</script>

<style></style>