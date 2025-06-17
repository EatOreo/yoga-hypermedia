<script lang="ts" setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
  itemsToShow: 1,
  breakpoints: {
    640: {
      itemsToShow: 1,
    },
    768: {
      itemsToShow: 2,
      snapAlign: 'start',
    },
    1024: {
      itemsToShow: 3,
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
}
const events = [await api.getEventByTitle("Beach Yoga"), await api.getEventByTitle("Goat Yoga Retreat"), await api.getEventByTitle("Plane Yoga")];
</script>

<template>
  <Carousel v-bind="carouselConfig" class="pb-4 px-8">
    <Slide v-for="eventItem in events.filter(e => !!e)" :key="eventItem?.title" class="pb-4">
      <EventCard :event="eventItem!" />
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>