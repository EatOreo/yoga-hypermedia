<template>
  <div class="flex justify-center">
    <img src="/images/Classes.svg" alt="Yoga Classes" class="h-64" />
  </div>
  <div class="px-40 flex flex-1 justify-center pb-5">
    <div class="layout-content-container flex flex-col max-w-[960px] flex-1 bg-bright rounded-2xl">
      <h2 class="text-dark text-2xl leading-tight px-4 pb-3 pt-5">Find your flow</h2>
      <Selector />
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-4">
        <ClassCard v-for="classItem in classes.filter(c => !hashValue || c.intensity === hashValue)"
          :key="classItem.title" :title="classItem.title" :subtitle="classItem.subtitle"
          :intensity="classItem.intensity" :image="classItem.image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const hashValue = computed(() => route.hash.replace('#', ''));

interface ClassItem {
  title: string
  subtitle: string
  intensity: string
  image: string
}

const classes = ref<ClassItem[]>([])

onMounted(async () => {
  const res = await fetch('/api/classes.json')
  if (res.ok) {
    const data = await res.json() as ClassItem[]
    console.log('Fetched classes:', data)
    classes.value = data
  }
})
</script>