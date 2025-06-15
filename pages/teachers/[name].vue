<template>
  <div v-if="teacherItem">
    <BreadCrumb :items="[
      { label: 'Teachers', to: '/teachers' },
      { label: teacherItem.name }
    ]" />
    <div class="flex items-center justify-center">
      <img :src="teacherItem.image" :alt="teacherItem.name" class="rounded-xl h-64 object-cover mb-4" />
    </div>
    <Background>
      <div class="flex flex-row items-center mx-auto gap-5 p-4 border-b-2 border-lgreen">
        <div class="flex flex-col items-center md:items-start mb-4">
          <div class="mt-4">
            <h3 class="text-dark text-[32px]">{{ teacherItem?.name }}</h3>
            <p class="text-lgreen text-sm">{{ teacherItem?.quote }}</p>
            <p class="text-dark pt-4 text-justify">{{ teacherItem?.description }}</p>
          </div>
        </div>
        <div class="flex flex-col items-start mb-4">
          <p class="text-lgreen text-align text-lg">Contact</p>
          <p class="border rounded-full px-4 py-0 opacity-100
          shadow-md text-md lowercase font-bold bg-lgreen text-white-100 shadow-white-500/50">{{ teacherItem?.email }}
          </p>
        </div>
      </div>
      <div v-if="classes.length > 0" class="flex flex-row justify-start items-center flex-nowrap gap-4 p-4">
        <div>
          <h3 class="text-xl text-center lgreen font-semibold">Classes</h3>
        </div>
        <div class="flex flex-row gap-3 p-4 pb-6 overflow-x-auto">
          <div v-for="classItem in classes" :key="classItem.title" class="w-40 flex-shrink-0">
            <ClassCard :title="classItem.title" :subtitle="classItem.subtitle" :intensity="classItem.intensity" :image="classItem.image"/>
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-start items-center flex-nowrap gap-4 p-4">
        <h3 class="text-xl text-center lgreen font-semibold">Events</h3>
        <div class="flex flex-row gap-3 p-4 pb-6 overflow-x-auto">
          <div v-for="eventItem in events" :key="eventItem.title" class="w-80 flex-shrink-0">
            <EventCard :event="eventItem"/>
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