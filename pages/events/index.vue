<template>
  <Background suntitle="Events">
    <Selector :options="[
      { label: 'All Events', query: '' },
      { label: 'Workshops', query: 'workshop' },
      { label: 'Retreats', query: 'retreat' },
      { label: 'Community', query: 'community' },
    ]" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4 pb-6">
      <EventCard v-for="eventItem in events.filter(e => !selected || e.type === selected)" :key="eventItem.title"
        :event="eventItem" />
    </div>
  </Background>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute();
const selected = computed(() => (route.query.select as string) || '');

const events = await useApi().getEvents();
</script>