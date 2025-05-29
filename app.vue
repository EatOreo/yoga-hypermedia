<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  title: 'Yogaga',
  script: [
    { src: 'https://cdn.tailwindcss.com?plugins=forms,container-queries' }
  ]
})
</script>