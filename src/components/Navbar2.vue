<template>
    <nav class="flex items-center bg-red-600 border-amber-200 h-20">
        <ul class="flex items-center justify-between gap-10 py-4 px-12 ">
            <button @click="goBack" class="relative nes-btn is-white w-10 h-8 "><span
                    class="-top-1 right-2 absolute text-xl">←</span></button>
            <li class="text-white font-bold text-sm mt-2 whitespace-nowrap">Info</li>
            <img src="/src/assets/pokeball.svg" alt="Pokeball" class="w-12 h-12 motion-safe:animate-bounce" />
        </ul>

    </nav>
</template>

<script>
export default {
    name: "Navbar2",
    methods: {
        goBack() {
            const currentName = this.$route.name;

            if (currentName === 'PokemonInfo') {
                this.$router.push({ name: 'PokemonList' });
            } else if (currentName === 'TrainerInfo') {
                this.$router.push({ name: 'TrainerList' });
            } else {
                this.$router.push('/');
            }
        }
    }
};
</script>
<style scoped>
nav {
    font-weight: bold;
    color: white;
}

a {
    color: white;
}

nav a:hover {
    color: #facc15;
    text-decoration: underline;
}
</style>