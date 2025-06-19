<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  image: String,
})
</script>

<template>
  <div
    class="bg-white shadow-md rounded-xl overflow-hidden flex flex-col gap-2 cursor-pointer transition-transform duration-200 hover:scale-102"
    @click="$router.push(`/classes/${encodeURIComponent(title)}`)"
  >
    <div
      class="w-full bg-center bg-no-repeat aspect-square bg-cover"
      :style="`background-image:url('${image}')`"
    ></div>
    <div class="px-2 pb-2">
      <p class="text-dark text-lg font-bold">{{ title }}</p>
      <p class="text-dark text-sm">{{ subtitle }}</p>
    </div>
  </div>
</template>