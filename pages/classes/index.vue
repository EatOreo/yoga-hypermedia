<template>
  <Background suntitle="Classes">
    <h2 class="text-dark text-2xl p-4 text-center"> Discover our wide range of yoga classes for all levels.</h2>
    <Selector :options="[
      { label: 'All Classes', query: '' },
      { label: 'Beginner', query: 'beginner' },
      { label: 'Intermediate', query: 'intermediate' },
      { label: 'Advanced', query: 'advanced' },
    ]" />
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 p-4 pb-6">
      <ClassCard v-for="classItem in classes.filter(c => !selected || c.intensity === selected)" :key="classItem.title"
        :title="classItem.title" :subtitle="classItem.subtitle" :image="classItem.image" />
    </div>
  </Background>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Yogaga Classes',
  description: 'Discover our wide range of yoga classes for all levels, from beginner to advanced. Find the perfect class to suit your needs and experience the benefits of yoga with Yogaga.',
});

import { computed } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute();
const selected = computed(() => (route.query.select as string) || '');

const classes = await useApi().getClasses();
</script>