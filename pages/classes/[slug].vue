<template>
  <div>
  <div class="flex justify-center">
    <div class="flex flex-wrap gap-2 p-4 pt-5 w-full max-w-[960px]">
      <router-link class="text-lgreen font-medium leading-normal" to="/classes">Classes</router-link>
      <span class="text-lgreen font-medium leading-normal">/</span>
      <span class="text-dark font-medium leading-normal">{{ slug }}</span>
    </div>
  </div>
    <div class="px-40 flex flex-1 justify-center pb-5">
      <div class="layout-content-container flex flex-col max-w-[960px] flex-1 bg-bright rounded-2xl">
        <div class="flex flex-row px-4 pt-5 gap-8">
          <div class="flex-1">
            <div class="flex flex-wrap justify-between gap-3 p-4">
              <div class="flex min-w-72 flex-col gap-3">
                <p class="text-dark tracking-light text-[32px] font-bold leading-tight">{{ slug }}</p>
                <p class="text-lgreen text-sm font-normal leading-normal">A gentle, foundational practice for all
                  levels.</p>
              </div>
            </div>
            <p class="text-dark font-normal leading-normal pb-3 pt-1 px-4">
              Hatha yoga is a classical Indian yoga system. It's a gentle, foundational practice that focuses on holding
              poses for longer periods, emphasizing breath control and
              alignment. This class is suitable for all levels, from beginners to experienced practitioners.
            </p>
            <h3 class="text-lblue mt-8 text-lg font-bold leading-tight px-4 pb-2 pt-4">Class
              Details</h3>
            <div class="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbdbdb] py-5">
                <p class="text-lgreen text-sm font-normal leading-normal">Intensity</p>
                <p class="text-dark text-sm font-normal leading-normal">Beginner</p>
              </div>
              <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbdbdb] py-5">
                <p class="text-lgreen text-sm font-normal leading-normal">Schedule</p>
                <p class="text-dark text-sm font-normal leading-normal">Mondays &amp; Wednesdays, 6:00 PM - 7:15 PM
                </p>
              </div>
            </div>
          </div>
          <div class="flex-1">
            <img src="/images/class-1.png" alt="Class Image" class="w-full rounded-xl object-cover my-4 max-h-64" />
            <h3 class="text-lblue text-lg font-bold leading-tight px-4 pb-2 pt-5">Meet the
              Teacher</h3>
            <div class="flex items-center gap-4 bg-lgrey px-4 min-h-[72px] py-2 mb-12 rounded-xl">
              <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
              style='background-image: url("https://api.dicebear.com/9.x/adventurer/svg?seed=Sarah");'>
              </div>
              <div class="flex flex-col justify-center">
              <p class="text-lorange font-medium leading-normal line-clamp-1">Sarah Miller</p>
              <p class="text-sm font-normal leading-normal line-clamp-2">Certified Yoga Instructor
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug as string
</script>

<style></style>