<template>
    <div class="flex border-b border-[#dbdbdb] px-4 gap-8 pb-3">
      <a class="flex flex-col items-center justify-center border-b-[3px] pb-3.5 pt-4"
        :class="filterValue === '' ? 'border-dark' : 'border-lgreen'" @click.prevent="setFilter('')" href="?">
        <p class="text-sm" :class="filterValue === '' ? 'text-dark' : 'text-lgreen'">
          All Classes
        </p>
      </a>
      <a class="flex flex-col items-center justify-center border-b-[3px] pb-3.5 pt-4"
        :class="filterValue === 'beginner' ? 'border-dark' : 'border-lgreen'" @click.prevent="setFilter('beginner')" href="?filter=beginner">
        <p class="text-sm" :class="filterValue === 'beginner' ? 'text-dark' : 'text-lgreen'">
          Beginner
        </p>
      </a>
      <a class="flex flex-col items-center justify-center border-b-[3px] pb-3.5 pt-4"
        :class="filterValue === 'intermediate' ? 'border-dark' : 'border-lgreen'" @click.prevent="setFilter('intermediate')" href="?filter=intermediate">
        <p class="text-sm" :class="filterValue === 'intermediate' ? 'text-dark' : 'text-lgreen'">
          Intermediate
        </p>
      </a>
      <a class="flex flex-col items-center justify-center border-b-[3px] pb-3.5 pt-4"
        :class="filterValue === 'advanced' ? 'border-dark' : 'border-lgreen'" @click.prevent="setFilter('advanced')" href="?filter=advanced">
        <p class="text-sm" :class="filterValue === 'advanced' ? 'text-dark' : 'text-lgreen'">
          Advanced
        </p>
      </a>
    </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const filterValue = computed(() => (route.query.filter as string) || '');

function setFilter(val: string) {
  router.replace({ query: val ? { ...route.query, filter: val } : {} });
}
</script>