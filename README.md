# 📱 PokeApp - Tu Pokédex Interactiva Personal

PokeApp es una aplicación web dinámica y visualmente cautivadora, desarrollada con **Vue.js y TailwindCSS**, que simula una Pokédex interactiva. Como proyecto central de mi portfolio, he tomado un concepto colaborativo y lo he mejorado y adaptado para exhibir mis habilidades en desarrollo frontend y diseño UI/UX.

La aplicación permite a los usuarios explorar una lista detallada de Pokémon obtenida de la [PokeAPI](https://pokeapi.co), visualizar sus fichas individuales con estadísticas y sprites, y consultar información de entrenadores personalizados, incluyendo enlaces a sus perfiles y las tecnologías que dominan.

Inspirada en el diseño clásico de la Pokédex original, esta aplicación combina funcionalidad, una estética retro cuidadosamente elaborada y mi visión personal para ofrecer una experiencia única.

---

## 🚀 Live Demo

**¡Explora la aplicación en vivo aquí!** 👉 [https://pokeapp-oscargaal.netlify.app/](https://pokeapp-oscargaal.netlify.app/)

---

### UI/UX Design & Prototyping

El diseño de la interfaz fue una parte fundamental del proyecto, buscando replicar la experiencia de una Pokédex clásica con un toque moderno.

[Figma Prototype](https://www.figma.com/design/YBaATa7HcFsyJYW7kBQ5Dn/POKE-API?node-id=0-1&p=f&t=eSbMdBA94hUjCrpB-0)

## 📸 Demo Visual

Aquí te dejo algunas vistas de la aplicación. Para una experiencia completa, ¡visita la demo en vivo!


![Demo en acción](./images/pokeapp-demo.gif)

---

## 🛠️ Tecnologías Clave

Este proyecto ha sido construido utilizando las siguientes tecnologías y herramientas:

-   **Frontend:**
    * **Vue.js 3 + Vite:** Para la construcción de la interfaz de usuario reactiva y un entorno de desarrollo rápido.
    * **TailwindCSS:** Para un desarrollo CSS ágil y altamente personalizable.
    * **JavaScript (ES6+):** Lógica principal de la aplicación.
    * **HTML5 / CSS3:** Estructura y estilos base.
-   **Herramientas y Diseño:**
    * **Git / GitHub:** Control de versiones y colaboración.
    * **Figma:** Prototipado y diseño de interfaz.
    * **Adobe Illustrator & Photoshop:** Creación y edición de recursos visuales y sprites.
-   **API:**
    * **PokeAPI:** Fuente de datos para la información de Pokémon.

---

## ⚙️ Funcionalidades Implementadas

La PokeApp ofrece las siguientes características principales:

-   🔎 **Listado Interactivo de Pokémon:** Obtención y visualización de Pokémon desde la [PokeAPI](https://pokeapi.co).
-   📄 **Fichas Detalladas de Pokémon:** Consulta individual de cada Pokémon con información como tipo, estadísticas base y sprites.
-   👨‍🏫 **Listado Personalizado de Entrenadores:** Gestión de un listado de entrenadores ficticios con datos relevantes.
-   💼 **Fichas de Entrenador:** Visualización de detalles de cada entrenador, incluyendo nombre, título, tecnologías dominadas y enlaces a perfiles de GitHub.
-   🎵 **Efectos de Sonido Retro:** Botón de activación/desactivación de sonidos con efectos de click y melodías de introducción para una experiencia inmersiva.
-   🎮 **Interfaz Clásica de Pokédex:** Diseño visual meticuloso que emula una Pokédex real, logrado con CSS personalizado y la flexibilidad de TailwindCSS.

---

## 🧠 Retos y Soluciones
Durante el desarrollo de PokeApp, me enfrenté a varios desafíos que me permitieron crecer y aplicar soluciones efectivas:

1.  **Gestión de la API y Optimización de Llamadas:**
    * **Reto:** La PokeAPI proporciona datos segmentados (lista de Pokémon, luego detalles de cada uno, luego datos de especies). Esto requería múltiples llamadas `fetch` anidadas, que podían ralentizar la carga.
    * **Solución:** Implementé un manejo asíncrono eficiente con `async/await` en los hooks de ciclo de vida de Vue (`mounted`) para asegurar que los datos se cargaran en el orden correcto y se mostraran progresivamente. También se consideró la estructura de datos para minimizar las llamadas innecesarias al mostrar fichas individuales.
2.  **Diseño Retro y Responsividad:**
    * **Reto:** Replicar la estética de la Pokédex original y, al mismo tiempo, asegurar que la interfaz fuera completamente responsiva y funcional en diferentes tamaños de pantalla (móvil, tablet, escritorio).
    * **Solución:** Utilicé TailwindCSS para la maquetación flexible y un enfoque "mobile-first" en la mayoría de los componentes. Para los detalles retro, se combinaron clases de Tailwind con CSS personalizado para lograr los bordes, sombras y texturas que evocan la consola Game Boy.
3.  **Manejo de Estados Complejos en Vue.js:**
    * **Reto:** Gestionar el estado de la aplicación (datos de Pokémon, estado de carga, visibilidad de fichas, etc.) de manera centralizada y reactiva sin caer en el "prop drilling" excesivo.
    * **Solución:** Se utilizó el patrón de componentes de Vue.js para encapsular la lógica. Para estados compartidos, se aprovechó el sistema de reactividad de Vue y la comunicación `props`/`emit` entre componentes padre-hijo.


---

## 📈 Aprendizajes Clave

Este proyecto fue una experiencia de aprendizaje invaluable. Algunos de los conocimientos y habilidades clave que consolidé o adquirí incluyen:

-   Dominio avanzado de **Vue.js 3** y su ecosistema (Vue Router, Vite).
-   Experiencia práctica en el desarrollo de interfaces responsivas con **TailwindCSS**.
-   Implementación de **llamadas a API externas** (`fetch` / `Axios) y manejo de datos asíncronos.
-   **Optimización del rendimiento** y la experiencia de usuario en aplicaciones de una sola página (SPA).
-   Mejora en la **estructura de proyectos frontend** y la modularización de componentes.
-   Refuerzo de principios de **diseño UI/UX** aplicados a la práctica.
-   Gestión de un proyecto de software utilizando **Git y GitHub**, incluyendo resolución de conflictos y mantenimiento del historial.

---

## 📁 Estructura del proyecto

```text
pokepapp/
├── public/
│   └── sonidos y assets visuales (SVG, MP3)
├── src/
│   ├── assets/
│   │   └── # Navbar, Card, etc.
│   ├── components/
│   ├── views/         # PokémonList, TrainerList, Fichas
│   ├── App.vue
│   ├── main.js
│   ├── router.js
│   ├── style.css
│   └── trainersDB.js  # Datos locales de entrenadores
├── .env               # Archivo de variables de entorno
├── .gitignore         # Archivos y carpetas a ignorar por Git
├── index.html
├── package-lock.json
├── package.json
├── README.md          # Este archivo
└── vite.config.js
```

## 👥 Mi Rol y Contribuciones (Ex-proyecto Colaborativo)

Este proyecto comenzó como una colaboración en equipo. Mi rol principal y las áreas en las que centré mis esfuerzos fueron:

-   **Diseño completo de la interfaz de la Pokédex:** Creación de la estructura visual principal, diseño de botones y elementos interactivos, y la integración de la estética retro.
-   **Funcionalidad del listado y fichas de Pokémon:** Implementación de la lógica para obtener y mostrar los datos de Pokémon desde la PokeAPI, incluyendo la visualización de sprites, tipos y estadísticas.
-   **Integración de efectos de sonido:** Desarrollo del botón de sonido y la lógica para reproducir efectos retro en interacciones clave.
-   **Refactorización y optimización del código:** Mejoras en la estructura y legibilidad del código para mi portfolio personal.

Quiero reconocer las valiosas contribuciones de mis compañeros originales:
| Nombre       | Tareas principales (Proyecto original)                                             |
|--------------|------------------------------------------------------------------------------------|
| **Corinne**  | Navbars, funcionalidad del botón activar/desactivar música y diseño de entrenadores|
| **Jair**     | Listado de entrenadores y componente Card                                          |
| **Tatiana**  | Vistas de fichas de Pokémon, entrenadores y base de datos de entrenadores          |

---

## 🖥️ Instalación y Ejecución Local

Para clonar y ejecutar este proyecto en tu máquina local:

1.  Clona este repositorio
    ```bash
    git clone https://github.com/oscargaal/PokeApp.git
    cd PokeApp
    ```

2.  Instala las dependencias del proyecto:
    ```bash
    npm install
    ```

3.  Inicia la aplicación en modo desarrollo:
    ```bash
    npm run dev
    ```
    La aplicación debería abrirse en tu navegador, normalmente en `http://localhost:5173/` (o un puerto similar).

---

## 📄 Licencia

Este proyecto es de uso educativo y no tiene fines comerciales. Pokémon es una marca registrada de Nintendo y Game Freak.

---

## 💬 Contacto

¡Me encantaría conectar y discutir sobre este y otros proyectos!

-   **Mi Perfil de GitHub:** [https://github.com/oscargaal](https://github.com/oscargaal)
-   **LinkedIn:** [https://www.linkedin.com/in/oscar-garc%C3%ADa-b4a755308/](https://www.linkedin.com/in/oscar-garc%C3%ADa-b4a755308/)

Puedes encontrar más detalles sobre los entrenadores y sus perfiles de GitHub directamente en la aplicación.

---