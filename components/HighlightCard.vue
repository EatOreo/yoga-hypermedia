<template>
  <NuxtLink
    :to="link"
    class="bg-white shadow-md rounded-2xl overflow-hidden h-full flex flex-col cursor-pointer w-full transition-transform duration-200 hover:scale-102"
  >
    <img :src="image" alt="Event Image" class="h-48 object-cover">
    <div class="p-4 flex flex-col flex-grow">
      <div class="flex justify-between items-center mb-2">
        <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
        <span class="text-xs font-semibold text-white px-2 py-1 rounded-full capitalize"
          :class="{
            'bg-lblue': badge === 'event',
            'bg-lgreen': badge === 'class',
          }"
        >{{ badge }}</span>
      </div>
      <p class="text-sm text-lgreen mb-2 flex-grow">{{ subtitle }}</p>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>

defineProps<{
  title: String,
  subtitle: String,
  image: String,
  badge: String,
  link: String,
}>()
</script>