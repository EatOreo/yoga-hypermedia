<script setup>
const props = defineProps({
  name: String,
  image: String
})
</script>

<template>
  <div
    class="flex flex-col gap-3 cursor-pointer"
    @click="$router.push(`/teachers/${encodeURIComponent(name)}`)"
  >
    <div
      class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
      :style="`background-image:url('${image}')`"
    ></div>
    <div>
      <p class="text-dark text-base text-center font-medium leading-normal">{{ name }}</p>
      <p class="bg-lgreen text-white text-center font-bold py-1 px-2 rounded-full w-full mt-auto">Discover more</p>
    </div>
  </div>
</template>