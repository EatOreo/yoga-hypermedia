<script setup>
const props = defineProps({
  name: String,
  clickon: String
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
      <p class="text-dark text-base font-medium leading-normal">{{ name }}</p>
      <p class="text-lgreen text-sm font-normal leading-normal">{{ clickon }}</p>
    </div>
  </div>
</template>