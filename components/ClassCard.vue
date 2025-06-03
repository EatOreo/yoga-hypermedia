<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  image: String,
  intensity: String
})

import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const hashValue = computed(() => route.hash.replace('#', ''));

const shouldShow = computed(() => {
  return !hashValue.value || props.intensity === hashValue.value;
});
</script>

<template>
  <div
    v-if="shouldShow"
    class="flex flex-col gap-3 pb-3 cursor-pointer"
    @click="$router.push(`/classes/${encodeURIComponent(title)}`)"
  >
    <div
      class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
      :style="`background-image:url('https://eatoreo.github.io/yoga-hypermedia${image}')`"
    ></div>
    <div>
      <p class="text-lblue text-base font-medium leading-normal">{{ title }}</p>
      <p class="text-lorange text-sm font-normal leading-normal">{{ subtitle }}</p>
    </div>
  </div>
</template>