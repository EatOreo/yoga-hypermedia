<template>
  <NuxtLink v-if="size === 'normal'" :to="`/events/${encodeURIComponent(event.title)}`" class="bg-white shadow-md rounded-2xl overflow-hidden h-full flex flex-col cursor-pointer transition-transform duration-200 hover:scale-102">
    <img :src="event.image" alt="Event Image" class="h-48 object-cover">
    <div class="p-4 flex flex-col flex-grow">
      <div class="flex justify-between items-center mb-2">
        <span class="text-xs font-semibold text-white px-2 py-1 rounded-full capitalize"
          :class="{
            'bg-lorange': event.type === 'retreat',
            'bg-lblue': event.type === 'workshop',
            'bg-lgreen': event.type === 'community',
          }"
        >{{ event.type }}</span>
        <span class="text-sm text-lgreen">
          {{ format(new Date(event.date), 'd. MMMM yyyy') }}
        </span>
      </div>
      <h3 class="text-xl font-bold mb-2">{{ event.title }}</h3>
      <p class="text-sm text-dark flex-grow">{{ event.description }}</p>
    </div>
  </NuxtLink>

  <NuxtLink v-else :to="`/events/${encodeURIComponent(event.title)}`" class="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col gap-0 cursor-pointer transition-transform duration-200 hover:scale-102">
    <div
      class="w-full bg-center bg-no-repeat aspect-square bg-cover"
      :style="`background-image:url('${event.image}')`"
    ></div>
    <div class="p-2">
      <p class="text-dark text-lg font-bold">{{ event.title }}</p>
      <p class="text-dark text-sm capitalize">{{ event.type }} - {{ event.date }}</p>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { EventItem } from '~/utils/types/event-item';
import { format } from 'date-fns'

withDefaults(defineProps<{
  event: EventItem,
  size?: 'normal' | 'small'
}>(), {
  size: 'normal'
});
</script>