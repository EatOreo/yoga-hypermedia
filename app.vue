<template>
  <div class="min-h-screen w-full bg-[#E7E4DA] flex flex-col">
    <NuxtRouteAnnouncer />
    <Navbar />
    <NuxtPage class="flex-1" />
    <Footer />
  </div>
</template>

<script setup>
useHead({
  title: 'Yogaga',
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kavivanar:wght@400;700&display=swap' }
  ],
  script: [
    { src: 'https://cdn.tailwindcss.com?plugins=forms,container-queries' }
  ]
})
</script>

<style>
html {
  font-family: 'Kavivanar', sans-serif;
}
</style>