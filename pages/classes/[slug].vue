<template>
  <div v-if="classItem">
    <BreadCrumb :items="[
      { label: 'Classes', to: '/classes' },
      { label: slug }
    ]" />
    <Background>
      <div class="flex flex-row px-4 pt-5 gap-8 pb-5">
        <div class="flex-1 p-4">
          <div class="flex flex-col justify-between gap-2">
            <p class="text-dark tracking-light text-[32px] font-bold leading-tight">{{ classItem?.title }}</p>
            <p class="text-lgreen text-sm"> {{ classItem?.subtitle }} </p>
          </div>
          <p class="text-dark pt-4">
            {{ classItem?.description }}
          </p>
        </div>
        <div class="flex-1 p-4">
          <img :src="classItem?.image" alt="Class Image" class="w-full rounded-xl object-cover mb-4" />
          <h3 class="text-lblue mt-8 text-lg font-bold leading-tight pb-2">Class
            Details</h3>
          <div class="grid grid-cols-[20%_1fr_10%] gap-x-6">
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbdbdb] py-5">
              <p class="text-lgreen text-sm">Teacher</p>
              <router-link class="text-lorange text-sm" to="/teachers/Sarah%20Miller">Sarah Miller</router-link>
            </div>
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbdbdb] py-5">
              <p class="text-lgreen text-sm">Intensity</p>
              <p class="text-dark text-sm">{{ classItem?.intensity }}</p>
            </div>
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbdbdb] py-5">
              <p class="text-lgreen text-sm">Schedule</p>
              <p class="text-dark text-sm"> {{ classItem?.schedule }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </BackGround>
  </div>
  <div v-else class="text-red-500 text-center w-full py-8">
    Sorry, this class does not exist.
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import type { ClassItem } from '~/types/class-item'

const route = useRoute()
const slug = route.params.slug as string

const classItem = ref<ClassItem>()
onMounted(async () => {
  const res = await fetch('/yoga-hypermedia/api/classes.json')
  if (res.ok) {
    classItem.value = (await res.json() as ClassItem[]).filter(c => c.title === slug)[0]
  }
})
</script>

<style></style>