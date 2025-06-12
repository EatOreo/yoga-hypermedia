<template>
  <div class="flex border-b border-[#dbdbdb] px-4 gap-8">
    <NuxtLink v-for="(option, idx) in options" :key="idx"
      class="flex flex-col items-center justify-center border-b-[3px] pb-2 pt-4"
      :class="selected === option.query ? 'border-dark' : 'border-lgreen'"
      :to="option.query ? '?select=' + option.query : '?'">
      <p class="text-sm" :class="selected === option.query ? 'text-dark' : 'text-lgreen'">
        {{ option.label }}
      </p>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const selected = computed(() => (route.query.select as string) || '');

interface SelectorOption {
  label: string
  query: string
}

const props = defineProps<{
  options: SelectorOption[]
}>()
</script>