<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  image: String,
})
</script>

<template>
  <div
    class="flex flex-col gap-3 cursor-pointer"
    @click="$router.push(`/classes/${encodeURIComponent(title)}`)"
  >
    <div
      class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
      :style="`background-image:url('${image}')`"
    ></div>
    <div>
      <p class="text-dark text-base font-medium leading-normal">{{ title }}</p>
      <p class="text-lgreen text-sm font-normal leading-normal">{{ subtitle }}</p>
    </div>
  </div>
</template>