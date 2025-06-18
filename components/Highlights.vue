<script lang="ts" setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import HighlightCard from './HighlightCard.vue';

const carouselConfig = {
  itemsToShow: 1,
  breakpoints: {
    640: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    768: {
      itemsToShow: 2,
      snapAlign: 'start',
    },
    1024: {
      itemsToShow: 3,
      snapAlign: 'center',
    },
    1280: {
      itemsToShow: 4,
      snapAlign: 'start',
    },
  },
  gap: 32,
  autoplay: 4000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
} as const;
const api = useApi();
const events = [await api.getEventByTitle("Beach Yoga"), await api.getEventByTitle("Goat Yoga Retreat"), await api.getEventByTitle("Plane Yoga")].filter(e => !!e);
const classes = await api.getHighlightedClasses();
</script>

<template>
  <Carousel v-bind="carouselConfig" class="px-8">
    <Slide v-for="e in events" :key="e?.title" class="py-4">
      <HighlightCard :title="e.title" :image="e.image" :subtitle="e.description" badge="event" :link="'/events/' + e.title"/>
    </Slide>
    <Slide v-for="c in classes" :key="c?.title" class="py-4">
      <HighlightCard :title="c.title" :image="c.image" :subtitle="c.subtitle" badge="class" :link="'/classes/' + c.title"/>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>