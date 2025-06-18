<template>
  <div v-if="teacherItem">
    <BreadCrumb :items="[
      { label: 'Teachers', to: '/teachers' },
      { label: teacherItem.name }
    ]" />
    <div class="container mx-auto px-4 py-8">
      <div class="relative mb-8 h-48">
        <img :src="teacherItem.image" :alt="teacherItem.name" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] object-cover rounded-[40px] shadow-lg" />
      </div>
      <div class="bg-bright shadow-lg rounded-2xl p-5">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="flex flex-col">
            <h1 class="text-dark text-3xl font-bold">{{ teacherItem.name }}</h1>
            <p class="text-lgreen italic my-4">“{{ teacherItem.quote }}”</p>
            <div class="border-t border-b border-dark/20 py-4">
              <p class="text-dark text-justify">{{ teacherItem.description }}</p>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center">
            <h3 class="text-lblue text-2xl mb-2">Contact</h3>
            <a :href="'mailto:' + teacherItem.email" class="bg-lgreen text-white text-lg font-bold py-2 px-6 rounded-full ">{{ teacherItem.email }}</a>
          </div>
        </div>

        <div v-if="classes && classes.length > 0" class="mt-8 pt-4 border-t-2 border-dark/20">
          <h2 class="text-lblue text-xl font-semibold mb-4">Classes</h2>
          <div class="flex overflow-x-auto gap-4 pb-4">
            <div v-for="classItem in classes" :key="classItem.id" class="flex-shrink-0 w-48">
              <ClassCard :title="classItem.title" :subtitle="classItem.subtitle" :image="classItem.image" />
            </div>
          </div>
        </div>

        <div v-if="events && events.length > 0" class="mt-8 pt-4 border-t-2 border-dark/20">
          <h2 class="text-lblue text-xl font-semibold mb-4">Events</h2>
          <div class="flex overflow-x-auto gap-4 pb-4">
            <div v-for="eventItem in events" :key="eventItem.title" class="flex-shrink-0 w-64">
              <EventCard :event="eventItem" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="text-red-500 text-center w-full py-8">
    Sorry, teacher was not found.
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'

const api = useApi();
const route = useRoute()
const name = route.params.name as string

const teacherItem = await api.getTeacherByName(name);
const classes = teacherItem ? await api.getClassesByTeacherId(teacherItem.id) : [];
const events = teacherItem ? await api.getEventsByTeacherId(teacherItem.id) : [];
</script>