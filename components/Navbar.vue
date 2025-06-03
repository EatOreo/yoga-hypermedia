<template>
  <header class="flex px-10 py-4 bg-[#A4AC86]">
    <router-link to="/">
      <div class="pl-10 flex items-center gap-4 text-[#213315]">
        <div class="size-4">
          <icon class="absolute left-16 top-2"/>
        </div>
        <h2 class="text-[#213315] text-3xl">Yogaga </h2>
      </div>
    </router-link>
    <div class="flex flex-1 justify-end gap-8">
      <div class="flex items-center gap-9">
        <router-link class="text-[#213315] text-md font-medium" to="/classes">Classes</router-link>
        <router-link class="text-[#213315] text-md font-medium" to="/events">Events</router-link>
        <router-link class="text-[#213315] text-md font-medium" to="/teachers">Teachers</router-link>
        <router-link class="text-[#213315] text-md font-medium" to="/blog">Blog</router-link>
        <router-link class="text-[#213315] text-md font-medium" to="/aboutus">About Us</router-link>
      </div>
    </div>
  </header>
</template>