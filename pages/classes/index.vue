<template>
  <div class="hidden lg:flex justify-center">
    <img src="/images/Classes.svg" alt="Yoga Classes" class="h-64" />
  </div>
  <Background class="pt-4 lg:p-0">
    <Selector />
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-4">
      <ClassCard v-for="classItem in classes.filter(c => !filterValue || c.intensity === filterValue)"
        :key="classItem.title" :title="classItem.title" :subtitle="classItem.subtitle" :intensity="classItem.intensity"
        :image="classItem.image" />
    </div>
  </Background>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router';
import type { ClassItem } from '~/types/class-item';

const route = useRoute();
const filterValue = computed(() => (route.query.filter as string) || '');

const classes = ref<ClassItem[]>([])

onMounted(async () => {
  const res = await fetch('/yoga-hypermedia/api/classes.json')
  if (res.ok) {
    classes.value = await res.json() as ClassItem[]
  }
})
</script>