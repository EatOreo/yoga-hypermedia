<template>
  <div v-if="classItem">
    <BreadCrumb :items="[
      { label: 'Classes', to: '/classes' },
      { label: classItem.title }
    ]" />
    <Background>
      <div class="md:flex p-4">
        <div class="flex-1 p-4">
          <div class="flex flex-col justify-between gap-2">
            <p class="text-dark text-[32px]">{{ classItem?.title }}</p>
            <p class="text-lgreen text-sm"> {{ classItem?.subtitle }} </p>
          </div>
          <p class="text-dark pt-4 text-justify">
            {{ classItem?.description }}
          </p>
        </div>
        <div class="flex-1 p-4">
          <img :src="classItem?.image" alt="Class Image" class="w-full rounded-xl object-cover mb-4" />
          <h3 class="text-lblue mt-8 text-lg pb-2">Class
            Details</h3>
          <div class="grid grid-cols-[20%_1fr] gap-x-6">
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbdbdb] py-3 items-center">
              <p class="text-lgreen text-sm self-center">Teacher</p>
              <NuxtLink class="text-dark text-sm flex items-center" :to="'/teachers/' + teacher?.name">
                <img :src="teacher?.image" alt="Teacher Image"
                  class="w-10 h-10 mr-2 rounded-2xl transition-transform duration-200 hover:scale-102" />
                {{ teacher?.name }}
              </NuxtLink>
            </div>
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbdbdb] py-5">
              <p class="text-lgreen text-sm">Intensity</p>
              <p class="text-dark text-sm capitalize">{{ classItem?.intensity }}</p>
            </div>
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbdbdb] py-5">
              <p class="text-lgreen text-sm">Schedule</p>
              <p class="text-dark text-sm"> {{ classItem?.schedule }}
              </p>
            </div>

          </div>
          <div class="flex flex-col items-center pt-4">
            <button
              class="bg-lblue text-white text-lg md:text-xl font-bold py-2 px-8 md:py-4 md:px-10 rounded-full cursor-pointer hover:bg-green-700 transition-colors duration-200">Join
              Now</button>
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

const route = useRoute()
const title = route.params.title as string

const api = useApi();
const classItem = await api.getClassByTitle(title);
const teacher = classItem ? await api.getTeacherById(classItem!.teacherId) : null;
</script>