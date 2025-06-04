<template>
  <Background suntitle="Classes">
    <Selector :options="[
      { label: 'All Classes', query: '' },
      { label: 'Beginner', query: 'beginner' },
      { label: 'Intermediate', query: 'intermediate' },
      { label: 'Advanced', query: 'advanced' },
    ]" />
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-4 pb-6">
      <ClassCard v-for="classItem in classes.filter(c => !selected || c.intensity === selected)" :key="classItem.title"
        :title="classItem.title" :subtitle="classItem.subtitle" :intensity="classItem.intensity"
        :image="classItem.image" />
    </div>
  </Background>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router';
import type { ClassItem } from '~/types/class-item';

const route = useRoute();
const selected = computed(() => (route.query.select as string) || '');

const classes = ref<ClassItem[]>([])

onMounted(async () => {
  const res = await fetch('/yoga-hypermedia/api/classes.json')
  if (res.ok) {
    classes.value = await res.json() as ClassItem[]
  }
})
</script>