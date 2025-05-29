<script setup>
defineProps({
  title: String,
  subtitle: String,
  image: String
})
</script>

<template>
  <div class="flex flex-col gap-3 pb-3">
    <div
      class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
      :style="`background-image:url('${image}')`"
    ></div>
    <div>
      <p class="text-[#2A9D8A] text-base font-medium leading-normal">{{ title }}</p>
      <p class="text-[#F0A436] text-sm font-normal leading-normal">{{ subtitle }}</p>
    </div>
  </div>
</template>