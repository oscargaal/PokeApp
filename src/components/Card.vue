<template>
  
  <div class="w-[600px] h-[75px] grid grid-cols-[auto_auto_1fr_auto] justify-between items-center bg-white rounded-xl px-4 py-2 mb-2 shadow-md gap-4">
    <div class="w-[75px] h-full flex items-center justify-start rounded-4xl ">
      <img
        :src="icon"
        alt="Pokéball"
        class="w-[40px] h-[40px] object-contain"
      />
    </div>
    <div class="w-[60px] h-[60px] rounded-full overflow-hidden flex items-center justify-center">
      <img :src="image" :alt="name" class="w-full h-full object-contain" />
    </div>
    <div>
      <span class="text-xs text-gray-500 ml-8">N.º {{ number }}</span>
    </div>
    <div>
      <span class=" text-lg font-semibold">{{ name }}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'PokemonCard',
  props: {
    name: {
      type: String,
      required: true,
    },
    number: {
      type: [String, Number],
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
