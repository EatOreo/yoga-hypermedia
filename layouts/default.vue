<template>
  <div class="min-h-screen w-full bg-lgrey flex flex-col">
    <NuxtRouteAnnouncer />
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
useHead({ // here head for entire page is defined
  title: 'Yogaga',
  link: [
    { rel: 'stylesheet', href: '/yoga-hypermedia/styles/output.css' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kavivanar:wght@400;700&display=swap' }
  ],
})
</script>

<style>
html, body{
  font-family: 'Kavivanar', sans-serif;
}
</style>