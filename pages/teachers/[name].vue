<template>
  <div v-if="teacherItem">
    <BreadCrumb :items="[
      { label: 'Teachers', to: '/teachers' },
      { label: slug }
    ]" />
    <Background>
      <div class="container mx-auto p-6">        
        <div class="flex flex-col md:flex-row items-center md:items-start">
          <img src="path/to/image.jpg" alt="Huy Tran Vin" class="w-40 h-40 rounded-full shadow-md">
          <div class="md:ml-6 mt-4 md:mt-0">
            <h3 class="text-2xl font-semibold">{{ teacherItem?.name }}</h3>
            <p class="italic text-gray-500 mt-2">{{ teacherItem?.quote }}</p>
            <p class="mt-4 text-gray-700">{{ teacherItem?.description }}</p>
          </div>
        </div>
      </div>
        
        <div class="mt-6">
          <h4 class="text-xl font-semibold">Contact (email)</h4>
          <p class="text-gray-600">{{ teacherItem?.email }}</p>
        </div>
      
      <div class="md:flex p-4">
        <div class="flex-1 p-4">
          <div class="flex flex-col justify-between gap-2">
            <p class="text-dark text-[32px]">{{ teacherItem?.name }}</p>
            <p class="text-lgreen text-sm"> {{ teacherItem?.quote }} </p>
          </div>
          <p class="text-dark pt-4 text-justify">
            {{ teacherItem?.description }}
          </p>
        </div>
        <div class="flex-1 p-4">
          <img :src="teacherItem?.image" alt="Class Image" class="w-full rounded-xl object-cover mb-4" />
          <h3 class="text-lblue mt-8 text-lg pb-2">Class
            Details</h3>
          <div class="grid grid-cols-[20%_1fr] gap-x-6">
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbdbdb] py-3 items-center">
              <p class="text-lgreen text-sm self-center">Teacher</p>
              <router-link class="text-dark text-sm flex items-center" :to="'/teachers/' + teacher?.name">
                <img :src="teacher?.image" alt="Teacher Image" class="w-10 h-10 mr-2 rounded-2xl" />
                {{ teacher?.name }}
              </router-link>
            </div>
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbdbdb] py-5">
              <p class="text-lgreen text-sm">Intensity</p>
              <p class="text-dark text-sm capitalize">{{ teacherItem?.email }}</p>
            </div>
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbdbdb] py-5">
              <p class="text-lgreen text-sm">Schedule</p>
              <p class="text-dark text-sm"> {{ teacherItem?.gender }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </BackGround>
  </div>
  <div v-else class="text-red-700 text-center w-full pt-8 pb-8">
    Sorry, teacher not found.
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const name = route.params.name as string

<<<<<<< HEAD:pages/teachers/[slug].vue
const teacherItem = await api.getTeacherByTitle(slug);
const teacher = await api.getTeacherById(teacherItem!.teacherId);
=======
const classItem = await api.getClassByTitle(name);
const teacher = await api.getTeacherById(classItem!.teacherId);
>>>>>>> 0f3053a942254052c851fd23b1e0abc03da28c6b:pages/teachers/[name].vue
</script>
