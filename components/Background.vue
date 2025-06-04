<template>
  <div class="relative">
    <div v-if="suntitle"
      class="absolute inset-0 bg-no-repeat bg-top bg-[url('/yoga-hypermedia/images/sun.svg')] bg-[length:800px] md:bg-[length:1160px] -top-[224px] md:-top-[300px]">
    </div>
    <div class="flex flex-col" :class="[
        suntitle ? 'pt-22 md:pt-38' : ''
      ]">
      <h1 v-if="suntitle" class="text-dark text-4xl z-20 text-center p-2">{{ suntitle }}</h1>
      <div class="px-4 flex flex-1 justify-center pb-5" >
        <div class="z-20 flex flex-col max-w-[960px] flex-1 bg-bright rounded-2xl">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  suntitle: {
    type: String,
    required: false,
    default: ''
  }
})
</script>