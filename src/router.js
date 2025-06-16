import { createWebHistory, createRouter } from 'vue-router';
//nuestros dos ficheros de vistas

import NotFound from "./views/NotFound.vue";
import PokemonList from './views/PokemonList.vue';
import PokemonInfo from './views/PokemonInfo.vue';
import TrainerList from './views/TrainerList.vue';
import TrainerInfo from './views/TrainerInfo.vue';

//creamos las rutas, y especificamos cada ruta que fichero/vista irá a abrir
const routes = [
    { path: '/', name: 'PokemonList', component: PokemonList },
    { path: '/pokemon/:id', name: 'PokemonInfo', component: PokemonInfo },
    { path: '/trainer', name: 'TrainerList', component: TrainerList },
    { path: '/trainer/:id', name: 'TrainerInfo', component: TrainerInfo },
    { path: "/:path(.*)", name: 'NotFound', component: NotFound }
];
//crear el router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;