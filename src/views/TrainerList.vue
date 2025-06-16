<template>
  <nav>
    <Navbar1 />
  </nav>
  <div ref="scrollContainer" class="flex flex-col w-full h-[79.5%] items-center gap-3 pt-6 pb-6 overflow-y-auto">
    <router-link v-for="(trainer, index) in trainers" :key="trainer.id" :to="`/trainer/${trainer.id}`"
      class="w-full flex justify-center">
      <Card :class="{ 'border-red-600 border-4 text-red-600': index === selectedIndex }" :name="trainer.name"
        :number="trainer.id" :image="trainer.image" :icon="pokeBallIcon" />
    </router-link>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import pokeBallIcon from '../assets/pokeballicon.png';
import trainersDB from '../trainersDB.js';
import Navbar1 from '../components/Navbar1.vue';
import eventBus from '../eventBus';

export default {
  name: 'TrainerList',
  components: {
    Card,
    Navbar1
  },
  data() {
    return {
      trainers: trainersDB,
      pokeBallIcon,
      selectedIndex: 0,
    };
  },
  methods: {
    moveSelection(direction) {
      if (this.trainers.length === 0) return;

      let newIndex = this.selectedIndex;

      if (direction === 'down') {
        newIndex = this.selectedIndex + 1;
        if (newIndex >= this.trainers.length) {
          newIndex = this.trainers.length - 1;
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
          const allRouterLinks = container.querySelectorAll('a[href^="/trainer/"]');
          const selectedRouterLink = allRouterLinks[this.selectedIndex];

          if (selectedRouterLink) {
            selectedRouterLink.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
            });
          }
        }
      });
    },
    navigateToSelectedTrainer() {
      if (this.trainers.length === 0) {
        return;
      }

      const selectedTrainer = this.trainers[this.selectedIndex];

      if (selectedTrainer) {
        this.$router.push(`/trainer/${selectedTrainer.id}`);
      }
    },
  },
  async mounted() {
    eventBus.on('navigate-list', this.moveSelection);
    eventBus.on('select-pokemon', this.navigateToSelectedTrainer);

    this.$nextTick(() => {
      this.scrollToSelected();
    });
  },
  beforeUnmount() {
    eventBus.off('navigate-list', this.moveSelection);
    eventBus.off('select-pokemon', this.navigateToSelectedTrainer);
  },
};
</script>