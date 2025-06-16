<template>
    <nav>
        <Navbar1 />
    </nav>
    <div ref="scrollContainer" class="flex flex-col w-full h-[79.5%] items-center gap-3 pt-6 pb-6 overflow-y-auto">
        <router-link v-for="(pokemon, index) in pokemonList" :key="pokemon.id" :to="`/pokemon/${pokemon.id}`"
            class="w-full flex justify-center">
            <PokemonCard :class="{ 'border-red-600 border-4 text-red-600': index === selectedIndex }"
                :name="pokemon.name" :number="pokemon.id" :image="pokemon.image" :icon="pokeBallIcon" />
        </router-link>
    </div>
</template>

<script>
import PokemonCard from '../components/Card.vue';
import pokeBallIcon from '../assets/pokeballicon.png';
import Navbar1 from '../components/Navbar1.vue';
import eventBus from '../eventBus';

export default {
    name: 'PokemonList',
    components: {
        PokemonCard,
        Navbar1
    },
    data() {
        return {
            pokemonList: [],
            pokeBallIcon,
            selectedIndex: 0,

        };
    },
    async mounted() {
        // Obtener los primeros 100 Pokémon
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await response.json();

        const promises = data.results.map(async (pokemon) => {
            try {
                const res = await fetch(pokemon.url);
                const details = await res.json();
                console.log(details);
                return {
                    id: details.id,
                    name: details.name,
                    image: details.sprites.front_default,
                };
            } catch (error) {
                console.error(`Error al obtener detalles de ${pokemon.name}:`, error);
                return null; // Puedes filtrar luego los nulos
            }
        });

        const results = await Promise.all(promises);
        this.pokemonList = results.filter(p => p !== null);

        eventBus.on('navigate-list', this.moveSelection);
        eventBus.on('select-pokemon', this.navigateToSelectedPokemon);

        this.$nextTick(() => {
            this.scrollToSelected();
        });
    },
    beforeUnmount() {
        eventBus.off('navigate-list', this.moveSelection);
        eventBus.off('select-pokemon', this.navigateToSelectedPokemon);
    },
    methods: {
        moveSelection(direction) {
            if (this.pokemonList.length === 0) return;

            let newIndex = this.selectedIndex;

            if (direction === 'down') {
                newIndex = this.selectedIndex + 1;
                if (newIndex >= this.pokemonList.length) {
                    newIndex = this.pokemonList.length - 1;
                }
            } else if (direction === 'up') {
                newIndex = this.selectedIndex - 1;
                if (newIndex < 0) {
                    newIndex = 0;
                }
            }
            this.selectedIndex = newIndex;

            this.scrollToSelected();
        },

        scrollToSelected() {
            this.$nextTick(() => {
                const container = this.$refs.scrollContainer;

                if (container) {
                    const allRouterLinks = container.querySelectorAll('a[href^="/pokemon/"]');
                    const selectedRouterLink = allRouterLinks[this.selectedIndex];

                    if (selectedRouterLink) {
                        selectedRouterLink.scrollIntoView({
                            behavior: 'smooth',
                            block: 'nearest',
                        });

                    }
                };
            })
        },
        navigateToSelectedPokemon() {
            if (this.pokemonList.length === 0) {
                return;
            }

            const selectedPokemon = this.pokemonList[this.selectedIndex];

            if (selectedPokemon) {
                this.$router.push(`/pokemon/${selectedPokemon.id}`);
            }
        }
    }
    
};
</script>
