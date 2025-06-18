<script setup>
const props = defineProps({
  name: String,
  image: String
})
</script>

<template>
  <div
    class="bg-white shadow-md rounded-xl overflow-hidden flex flex-col gap-2 cursor-pointer transition-transform duration-200 hover:scale-102"
    @click="$router.push(`/teachers/${encodeURIComponent(name)}`)"
  >
    <div
      class="w-full bg-center bg-no-repeat aspect-square bg-cover"
      :style="`background-image:url('${image}')`"
    ></div>
      <p class="text-center text-xl font-bold mb-2">{{ name }}</p>
  </div>
</template>