<template>
  <header class="z-30 flex md:px-10 h-20 py-2 bg-lgreen items-center">
    <NuxtLink to="/">
      <div class="md:pl-10 flex items-center text-dark cursor-pointer">
        <icon />
        <h2 class="text-dark text-3xl">Yogaga </h2>
      </div>
    </NuxtLink>
    <div class="flex flex-1 justify-end md:px-10">
      <div class="hidden md:flex items-center gap-8">
        <NuxtLink class="text-dark text-md font-medium" to="/">Home</NuxtLink>
        <NuxtLink class="text-dark text-md font-medium" to="/classes">Classes</NuxtLink>
        <NuxtLink class="text-dark text-md font-medium" to="/events">Events</NuxtLink>
        <NuxtLink class="text-dark text-md font-medium" to="/teachers">Teachers</NuxtLink>
        <NuxtLink class="text-dark text-md font-medium" to="/blog">Blog</NuxtLink>
        <NuxtLink class="text-dark text-md font-medium" to="/aboutus">About Us</NuxtLink>
        <NuxtLink class="text-dark text-md font-medium" to="/contacts">Contacts</NuxtLink>
      </div>
      <button class="md:hidden mr-4" @click="open = !open">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
          <rect y="4" width="24" height="2" rx="1" fill="currentColor"/>
          <rect y="11" width="24" height="2" rx="1" fill="currentColor"/>
          <rect y="18" width="24" height="2" rx="1" fill="currentColor"/>
        </svg>
      </button>
      <div v-if="open" class="absolute top-16 right-4 bg-bright shadow-lg rounded p-4 flex flex-col gap-4 md:hidden z-50">
        <NuxtLink class="text-dark text-md font-medium" to="/" @click="open = false">Home</NuxtLink>
        <NuxtLink class="text-dark text-md font-medium" to="/classes" @click="open = false">Classes</NuxtLink>
        <NuxtLink class="text-dark text-md font-medium" to="/events" @click="open = false">Events</NuxtLink>
        <NuxtLink class="text-dark text-md font-medium" to="/teachers" @click="open = false">Teachers</NuxtLink>
        <NuxtLink class="text-dark text-md font-medium" to="/blog" @click="open = false">Blog</NuxtLink>
        <NuxtLink class="text-dark text-md font-medium" to="/aboutus" @click="open = false">About Us</NuxtLink>
        <NuxtLink class="text-dark text-md font-medium" to="/contacts" @click="open = false">Contacts</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>