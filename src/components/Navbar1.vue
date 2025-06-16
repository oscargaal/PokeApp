<template>
    <nav class="flex items-center bg-red-600 border-amber-200 h-20">

        <ul class="flex items-center justify-between gap-10 py-4 px-12 ">
            <router-link to="/" :class="pokemonClass" class="font-bold text-sm mt-2 whitespace-nowrap">
                Pokemons
            </router-link>
        <img src="/src/assets/pokeball.svg" alt="Pokeball" class="w-12 h-12 motion-safe:animate-bounce" />
        <li>
            <router-link to="/trainer" :class="trainerClass" class="font-bold text-sm">
                Trainers
            </router-link>
        </li>
        <img
    src="/src/assets/sonido.svg"
    alt="Mute"
    @click="emitToggle"
    class="w-10 h-10 cursor-pointer" :class="{'opacity-50': isMuted}"
    />
        </ul>
    </nav>
</template>

<script>
import eventBus from '../eventBus';

export default {
    name: "Navbar1",
    
    data() {
        return {
            isMuted: false,
        };
    },
    computed: {
        pokemonClass() {
            return {
                'text-white': this.$route.path === '/',
                'text-black': this.$route.path !== '/',
                'opacity-50': this.$route.path !== '/',
            };
        },
        trainerClass() {
            return {
                'text-white': this.$route.path === '/trainer',
                'text-black': this.$route.path !== '/trainer',
                'opacity-50': this.$route.path !== '/trainer',
            };
        }
    },

    methods: {

        emitToggle() {
            this.isMuted = !this.isMuted
            eventBus.emit('toggle-mute');
        },
        navigateRight() {
            this.selectedItem = 'trainers';
            this.$router.push('/trainer');
        },

        navigateLeft() {
            this.selectedItem = 'pokemons';
            this.$router.push('/');
        },

        handleNavbarNavigation(direction) {
            if (direction === 'left') {
                this.navigateLeft();
            } else if (direction === 'right') {
                this.navigateRight();
            }
        }
    },
    mounted() {
        eventBus.on('navbar-navigate', this.handleNavbarNavigation);
    },
    beforeUnmount() {
        eventBus.off('navbar-navigate', this.handleNavbarNavigation);
    },

};
</script>


<style scoped>
nav router-link,
nav a {
    color: unset;
}

.text-amber-200 {
    color: #facc15 !important;
}

.text-white {
    color: white !important;
}

.text-black {
    color: black !important;
}

nav {
    font-weight: bold;
}

nav a:hover {
    color: #facc15 !important;
    text-decoration: underline;
}
</style>