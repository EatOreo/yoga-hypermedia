<template>
  <NuxtLink :to="`/events/${encodeURIComponent(event.title)}`" class="block bg-white shadow-md rounded-2xl overflow-hidden h-full flex flex-col cursor-pointer">
    <img :src="event.image" alt="Event Image" class="w-full h-48 object-cover">
    <div class="p-4 flex flex-col flex-grow">
      <div class="flex justify-between items-center mb-2">
        <span class="text-xs font-semibold text-white px-2 py-1 rounded-full capitalize"
          :class="{
            'bg-lorange': event.type === 'retreat',
            'bg-lblue': event.type === 'workshop',
            'bg-lgreen': event.type === 'community',
          }"
        >{{ event.type }}</span>
        <span class="text-sm text-lgreen">{{ event.date }}</span>
      </div>
      <h3 class="text-xl font-bold mb-2">{{ event.title }}</h3>
      <p class="text-sm text-dark mb-4 flex-grow">{{ event.description }}</p>
      <div class="bg-lgreen text-white text-center font-bold py-2 px-4 rounded-full w-full mt-auto">
        Register Now
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { EventItem } from '~/utils/types/event-item';

defineProps<{
  event: EventItem
}>()
</script>