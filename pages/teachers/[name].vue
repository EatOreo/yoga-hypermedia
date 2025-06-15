<template>
  <div v-if="teacherItem">
    <BreadCrumb :items="[
      { label: 'Teachers', to: '/teachers' },
      { label: teacherItem.name }
    ]" />
    <Background>
      <div class="container flex-row mx-auto gap-10 p-6">
        <div class="flex flex-col items-center md:items-start">
          <div class="mt-4">
            <h3 class="text-dark text-[32px]">{{ teacherItem?.name }}</h3>
            <p class="text-lgreen text-sm">{{ teacherItem?.quote }}</p>
            <p class="text-dark pt-4 text-justify">{{ teacherItem?.description }}</p>
          </div>
        </div>
        <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbdbdb] py-5">
          <p class="text-lgreen text-sm">Contact</p>
          <p class="text-dark text-sm capitalize">{{ teacherItem?.email }}</p>
        </div>
      </div>
        <div v-if="classes.length > 0" class="flex flex-row justify-start items-center flex-nowrap gap-4 p-6">
          <div>
            <h3 class="text-xl text-center lgreen font-semibold">Classes</h3>
          </div>
          <div class="flex flex-row gap-3 p-4 pb-6 overflow-x-auto">
            <div v-for="classItem in classes" :key="classItem.title" class="w-40 flex-shrink-0">
              <ClassCard :title="classItem.title" :subtitle="classItem.subtitle" :intensity="classItem.intensity" :image="classItem.image"/>
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-start items-center flex-nowrap gap-4 p-6">
          <h3 class="text-xl text-center lgreen font-semibold">Events</h3>
          <div class="flex flex-row gap-3 p-4 pb-6 overflow-x-auto">
            <div v-for="eventItem in events" :key="eventItem.title" class="w-40 flex-shrink-0">
              <EventCard :event="eventItem"/>
            </div>
          </div>
        </div>
      </div>
    </BackGround>
  </div>
  <div v-else class="text-red-700 text-center w-full pt-8 pb-8">
    Sorry, teacher was not found.
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const name = route.params.name as string

const teacherItem = await api.getTeacherByName(name);
const classes = teacherItem ? await api.getClassesByTeacherId(teacherItem.id) : null;
const events = teacherItem ? await api.getEventsByTeacherId(teacherItem.id) : null;
</script>