<template>
  <header class="z-30 flex md:px-10 h-20 py-2 bg-lgreen items-center">
    <router-link to="/">
      <div class="md:pl-10 flex items-center text-dark">
        <icon />
        <h2 class="text-dark text-3xl">Yogaga </h2>
      </div>
    </router-link>
    <div class="flex flex-1 justify-end md:px-10">
      <div class="hidden md:flex items-center gap-8">
        <router-link class="text-dark text-md font-medium" to="/classes">Classes</router-link>
        <router-link class="text-dark text-md font-medium" to="/events">Events</router-link>
        <router-link class="text-dark text-md font-medium" to="/teachers">Teachers</router-link>
        <router-link class="text-dark text-md font-medium" to="/blog">Blog</router-link>
        <router-link class="text-dark text-md font-medium" to="/aboutus">About Us</router-link>
      </div>
      <button class="md:hidden mr-4" @click="open = !open">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
          <rect y="4" width="24" height="2" rx="1" fill="currentColor"/>
          <rect y="11" width="24" height="2" rx="1" fill="currentColor"/>
          <rect y="18" width="24" height="2" rx="1" fill="currentColor"/>
        </svg>
      </button>
      <div v-if="open" class="absolute top-16 right-4 bg-bright shadow-lg rounded p-4 flex flex-col gap-4 md:hidden z-50">
        <router-link class="text-dark text-md font-medium" to="/classes" @click="open = false">Classes</router-link>
        <router-link class="text-dark text-md font-medium" to="/events" @click="open = false">Events</router-link>
        <router-link class="text-dark text-md font-medium" to="/teachers" @click="open = false">Teachers</router-link>
        <router-link class="text-dark text-md font-medium" to="/blog" @click="open = false">Blog</router-link>
        <router-link class="text-dark text-md font-medium" to="/aboutus" @click="open = false">About Us</router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>