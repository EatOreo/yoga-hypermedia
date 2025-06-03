<template>
  <div class="min-h-screen w-full bg-lgrey flex flex-col">
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
    { rel: 'stylesheet', href: new URL('/styles/output.css', import.meta.url).pathname },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kavivanar:wght@400;700&display=swap' }
  ],
})
</script>

<style>
html, body{
  font-family: 'Kavivanar', sans-serif;
}
</style>