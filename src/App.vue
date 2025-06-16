<template>

    <div class="flex justify-center items-center w-full min-h-screen caret-transparent select-none bg-[url('./src/assets/fondoconsolabackground.png')] bg-no-repeat bg-contain bg-center">


        <div class="relative bg-[#650908] w-[1200px] h-[760px] rounded-bl-[100px] shadow-black shadow-md">
            <div
                class="absolute left-[89.6%] translate-x-1/2 top-[60.5%] w-[250px] h-[300px] bg-[#8c0a00] rounded-r-full flex items-center shadow-black shadow-md">
                <!-- Base roja oscuro flechitas -->
                <div
                    class="relative w-[210px] h-[232px] bg-[#424244] flex justify-center items-center rounded-r-full shadow-black shadow-md">
                    <!-- Base gris oscuro flechitas -->

                    <div class="absolute left-6 w-[60px] h-[60px] bg-[#dedcdf] rounded-md shadow-black shadow-md">

                    </div>
                    <div class="absolute right-6 w-[60px] h-[60px] bg-[#dedcdf] rounded-md shadow-black shadow-md">

                    </div>
                    <div class="absolute bottom-10 w-[60px] h-[60px] bg-[#dedcdf] rounded-md shadow-black shadow-md">

                    </div>
                    <div class="absolute top-10 w-[60px] h-[60px] bg-[#dedcdf] rounded-md shadow-black shadow-md">

                    </div>
                    <div class="absolute w-[60px] h-[60px] bg-[#dedcdf] rounded-md"></div>
                    <!-- Boton "+" -->
                    <div class="absolute w-[155px] h-[55px] rounded-md flex justify-center items-center ">
                        <!-- Emitimos el mensaje de up o down -->
                        <svg @click="audioClick(); emitListNavigation('up')"
                            class="-translate-x-[2%] absolute bottom-[90%] fill-[#b1afb2] hover:fill-red-600 size-16 cursor-pointer"
                            :class="{ 'pointer-events-none cursor-not-allowed': isScreenOn, 'cursor-pointer': !isScreenOn }"
                            data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190.05 142.64">
                            <polygon points="99.99 50.05 151.31 94.84 49.31 95.4 99.99 50.05" />
                        </svg>

                        <svg @click="audioClick(); emitNavbarNavigation('right')"
                            class="-translate-x-[2%] -translate-y-[4%] absolute rotate-90 left-[65%] fill-[#b1afb2] hover:fill-red-600 size-16 cursor-pointer"
                            :class="{ 'pointer-events-none cursor-not-allowed': isScreenOn, 'cursor-pointer': !isScreenOn }"
                            data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190.05 142.64">
                            <polygon points="99.99 50.05 151.31 94.84 49.31 95.4 99.99 50.05" />
                        </svg>

                        <svg @click="audioClick(); emitListNavigation('down')"
                            class="translate-x-[4%] absolute rotate-180 top-[90%] fill-[#b1afb2] hover:fill-red-600 size-16 cursor-pointer"
                            :class="{ 'pointer-events-none cursor-not-allowed': isScreenOn, 'cursor-pointer': !isScreenOn }"
                            data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190.05 142.64">
                            <polygon points="99.99 50.05 151.31 94.84 49.31 95.4 99.99 50.05" />
                        </svg>

                        <svg @click="audioClick(); emitNavbarNavigation('left')"
                            class="translate-x-[2%] absolute rotate-270 right-[65%] fill-[#b1afb2] hover:fill-red-600 size-16 cursor-pointer"
                            :class="{ 'pointer-events-none cursor-not-allowed': isScreenOn, 'cursor-pointer': !isScreenOn }"
                            data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190.05 142.64">
                            <polygon points="99.99 50.05 151.31 94.84 49.31 95.4 99.99 50.05" />
                        </svg>
                        <!-- Botones Triangulos -->
                    </div>
                    <div class="absolute w-[45px] h-[45px] bg-[#b1afb2] rounded-full ">
                        <!-- Botones circulares -->
                    </div>
                </div>
            </div>
            <!-- Base inferior granate -->
            <div
                class="absolute left-[16%] -translate-x-1/2 top-[10%] w-[325px] h-[650px] bg-[#8c0a00] flex justify-center items-center rounded-bl-[100px] shadow-md shadow-black">
                <!-- Base roja oscuro encima de granate -->
                <div @click="audioClick(); toggleScreenAndAudio()"
                    class="absolute top-[69%] w-[150px] h-[150px] bg-gradient-botAzul hover:bg-gradient-to-r hover:from-[#7dfbff] hover:to-[#7dfbff] rounded-full shadow-md shadow-black">
                </div>
                <!-- Botón azul -->

                <div
                    class="absolute left-0 top-[8%] w-[40px] h-[40px] bg-gradient-lucesVerdes shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]">
                </div>
                <div
                    class="absolute left-0 top-[18%] w-[40px] h-[40px] bg-gradient-lucesVerdes shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]">
                </div>
                <!-- Botones verdes -->
                <div class="absolute left-0 top-[8%] w-[40px] h-[40px] bg-black"
                    :class="{ 'hidden': !showBlackOverlay }">
                </div>
                <div class="absolute left-0 top-[18%] w-[40px] h-[40px] bg-black"
                    :class="{ 'hidden': !showBlackOverlay }">
                </div>
                <!-- Botones verdes apagados -->
            </div>

            <div
                class="absolute left-[2.5%] w-[98%] h-[100px] -translate-y-1/2 top-[2.75%] rounded-md bg-gradient-bisagra shadow-md shadow-black">
                <!-- Bisagra -->
            </div>

            <div
                class="absolute left-[65%] -translate-x-1/2 top-[10%] w-[840px] h-[650px] bg-[#c3180d] flex justify-center items-center shadow-md shadow-black">
                <!-- Base roja de la pantalla -->

                <div
                    class="w-[770px] h-[550px] bg-[#424244] rounded-[25px] flex flex-wrap justify-center items-center pt-6 pb-4 shadow-md shadow-black ">
                    <!-- Borde pantalla gris oscuro -->

                    <div
                        class="w-[690px] h-[410px] bg-[#dedcdf] rounded-lg flex justify-center items-center shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]">
                        <!-- Borde pantalla gris claro -->
                        <div
                            class="w-[670px] h-[390px] bg-[url('./assets/fondoconsola.png')] bg-[length:800px_600px] bg-center bg-no-repeat shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] ">
                            <!-- Pantalla -->
                            <RouterView />
                        </div>
                        <div class="absolute w-[670px] h-[390px] bg-black transition-opacity duration-250"
                            :class="{ 'opacity-0 pointer-events-none': !showBlackOverlay, 'opacity-100': showBlackOverlay }">
                            <!-- Pantalla apagada -->
                        </div>
                    </div>

                    <div class="w-[260px] h-[50px] bg-[#000000] rounded-[10px] flex justify-center items-center gap-6 ">
                        <!-- Base negra botones -->
                        <div @click="goBack(); audioClick()"
                            :class="{ 'pointer-events-none cursor-not-allowed': isScreenOn, 'cursor-pointer': !isScreenOn }"
                            class="w-[97px] h-[27px] rounded-l-[10px] bg-[#c3180d] hover:text-amber-500 text-white flex justify-center items-center text-sm shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]">
                            Back
                        </div>
                        <div @click="emitSelectPokemon(); audioClick()"
                            :class="{ 'pointer-events-none cursor-not-allowed': isScreenOn, 'cursor-pointer': !isScreenOn }"
                            class="w-[97px] h-[27px] rounded-r-[10px] bg-[#3f884e] hover:text-amber-500 text-white flex justify-center items-center text-sm shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]">
                            Select
                        </div>
                        <!-- Botones blancos -->
                    </div>
                </div>
            </div>
            <div class="absolute right-[40.5%] translate-x-1/2 bottom-[4.5%] w-[775px] h-[650px] flex justify-center "
                :class="{ '-translate-y-1/2 bottom-[61%]': !isConsoleClosed }">
                <!--  bottom-[61%] -translate-y-1/2 -->
                <!-- -translate-y-1/2 bottom-[61%] -->

                <div
                    class="bg-[#c3180d] absolute left-[3.1%] w-[850px] h-[650px] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]">
                </div>
                <div class="absolute -translate-y-[2%] translate-x-1/11 flex justify-center items-center w-full h-full">
                    <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380.1 313.53"
                        class="absolute left-[0.09%]  fill-[#651d15]">
                        <defs>
                            <filter id="inset-shadow" x="-50%" y="-50%" width="200%" height="200%">
                                <feOffset dx="0" dy="0" in="SourceAlpha" result="offset-blur" />
                                <feGaussianBlur stdDeviation="3" in="offset-blur" result="colored-blur" />
                                <feFlood flood-color="rgba(0,0,0,0.6)" result="shadow-color" />
                                <feComposite in="shadow-color" in2="colored-blur" operator="in" result="shadow" />
                                <feComposite in="SourceGraphic" in2="shadow" operator="over" />
                            </filter>
                        </defs>
                        <g>
                            <path class="cls-1" filter="url(#inset-shadow)"
                                d="M134.68,142.64c6.73-24.27,28.96-42.08,55.36-42.08s48.64,17.82,55.36,42.08h52.88c-7.07-52.26-52.84-92.59-108.24-92.59s-101.17,40.33-108.24,92.59h52.88Z" />
                            <path class="cls-1" filter="url(#inset-shadow)"
                                d="M245.41,173.4c-6.73,24.27-28.96,42.08-55.36,42.08s-48.64-17.82-55.36-42.08h-52.51c8.17,51.04,53.36,90.08,107.87,90.08s99.7-39.05,107.87-90.08h-52.51Z" />
                        </g>
                        <g>
                            <circle class="cls-1" cx="190.05" cy="156.76" r="37.88" />
                            <circle class="cls-2" cx="190.05" cy="156.76" r="29.98" filter="url(#inset-shadow)" />
                        </g>
                    </svg>
                    <div @click="openConsole(); audioClick()"
                        class="absolute bg-[#51B064] hover:bg-[#95cfa1] w-[140px] h-[140px] rounded-full shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]">
                    </div>
                    <!-- Tapa consola -->
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import PokemonCard from './components/Card.vue'
import pokeBallIcon from './assets/pokeballicon.png'
import Navbar1 from './components/Navbar1.vue';
import Navbar2 from './components/NavBar2.vue';
import eventBus from './eventBus';

export default {
    name: 'App',
    components: {
        PokemonCard,
        Navbar1,
        Navbar2
    },
    data() {
        return {
            pokeBallIcon,
            isScreenOn: true,
            showBlackOverlay: true,
            navigateDirection: null,
            isConsoleClosed: true,
            isMuted: false,
            introAudio: null,
            clickAudio: null,
            gameboyIntro: null,
        };
    },
    created() {
    eventBus.on('toggle-mute', this.toggleMute);
    },
    beforeUnmount() {
    eventBus.off('toggle-mute', this.toggleMute);
    },
    methods: {
        toggleScreenAndAudio() {
            this.isScreenOn = !this.isScreenOn;

            if (!this.isScreenOn) {

                this.showBlackOverlay = true;

                setTimeout(() => {
                    this.showBlackOverlay = false;
                }, 250);

                this.gameboyIntro = new Audio("../gameboyintro.mp3");
                this.gameboyIntro.volume = 0.5;
                this.gameboyIntro.play();

                const fadeOut = () => {
                    if (this.gameboyIntro.volume > 0) {
                        this.gameboyIntro.volume = Math.max(0, this.gameboyIntro.volume - 0.015);
                        setTimeout(fadeOut, 50);
                    } else {
                        this.gameboyIntro.pause();
                        this.gameboyIntro.volume = 0.5;
                    }
                };
                fadeOut();

                if (this.introAudio == null) {
                    this.introAudio = new Audio("../pokemonintro8bit.mp3");
                    this.introAudio.play();
                    this.introAudio.volume = 0.007;
                    this.introAudio.loop = true;
                }


            } else {
                this.showBlackOverlay = true;

                if (this.introAudio) {
                    this.introAudio.pause();
                    this.introAudio.currentTime = 0;
                    this.introAudio = null;
                }
            }
        },
        audioClick() {
            this.clickAudio = new Audio("../click.mp3");
            this.clickAudio.play();
            this.clickAudio.volume = 0.15;
        },

        goBack() {
            if (this.$route.path !== '/') {
                this.$router.go(-1);
            }
        },
        emitListNavigation(direction) {
            eventBus.emit('navigate-list', direction);
        },
        emitSelectPokemon() {
            eventBus.emit('select-pokemon');
        },
        emitNavbarNavigation(direction) {
            console.log('Emitiendo evento navbar-navigate:', direction);
            eventBus.emit('navbar-navigate', direction);
        },
        openConsole() {
            this.isConsoleClosed = !this.isConsoleClosed
        },
        toggleMute() {
            this.isMuted = !this.isMuted;

            if (this.isMuted) {
                if (this.introAudio) this.introAudio.muted = true;
                if (this.clickAudio) this.clickAudio.muted = true;
                if (this.gameboyIntro) this.gameboyIntro.muted = true;
                console.log("Audio muted");
            } else {
                if (this.introAudio) this.introAudio.muted = false;
                if (this.clickAudio) this.clickAudio.muted = false;
                if (this.gameboyIntro) this.gameboyIntro.muted = false;
                console.log("Audio unmuted");
            }
            console.log('🔈 Sonido muteado:', this.isMuted);
        }
    }
};

</script>
<style></style>
