<template>
  <div v-if="teacherItem">
    <BreadCrumb :items="[
      { label: 'Teachers', to: '/teachers' },
      { label: name }
    ]" />
    <img class = "flex justify-center items-start mb-4 w-40 h-40 rounded-full shadow-md" src="teacherItem.image" alt="">
    <Background>
      <div class="container flex-wrap mx-auto gap-10 p-6">
        <div class="flex flex-col items-center md:items-start">
          <div class="mt-4">
            <h3 class="text-2xl text-teal-900 font-semibold">{{ teacherItem?.name }}</h3>
            <p class="italic text-yellow-300 mt-2">{{ teacherItem?.quote }}</p>
            <p class="mt-4 text-gray-700">{{ teacherItem?.description }}</p>
          </div>
        </div>
        <div class="mt-6">
          <h4 class="text-xl emerald-600 font-semibold">Contact (email)</h4>
          <p class="text-gray-600">{{ teacherItem?.email }}</p>
        </div>
      </div>
        <div class="flex flex-row justify-start items-center flex-nowrap gap-4">
          <div>
            <h3 class="text-xl text-center emerald-600 font-semibold">Classes</h3>
          </div>
          <div class="flex flex-row gap-4 overflow-x-auto">
            <ClassCard v-for="classItem in classes.filter(c => c.teacherId === teacherItem!.id)" :key="classItem.title"
            :title="classItem.title" :subtitle="classItem.subtitle" :intensity="classItem.intensity" :image="classItem.image" />
          </div>
        </div>
        <div class="flex flex-row justify-start items-center flex-nowrap gap-4">
          <h3 class="text-xl text-center emerald-600 font-semibold">Events</h3>
          <div class="flex flex-row gap-4 overflow-x-auto">
            <EventCard v-for="eventItem in events.filter(e => e.teacherIds?.includes(teacherItem!.id))" :key="eventItem.title" :event="eventItem" />
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
const classes = await api.getClasses();
const events = await api.getEvents();
</script>