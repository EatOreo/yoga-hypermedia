<template>
  <div v-if="event" class="p-4">
    <BreadCrumb :items="[
      { label: 'Events', to: '/events' },
      { label: event.title }
    ]" />
    <div class="py-4">
      <div class="max-w-6xl mx-auto bg-white overflow-hidden rounded-3xl shadow-lg ">
        <div class="md:flex">
          <div class="md:w-1/2 p-4 md:p-8 flex items-center justify-center">
            <img class="rounded-3xl shadow-lg object-cover w-full h-full" :src="event.detailsImage || event.image" :alt="event.title">
          </div>

          <div class="md:w-1/2 p-4 md:p-8 flex flex-col justify-center text-center md:text-left">
            <div class="flex items-center justify-center md:justify-start gap-4 mb-6">
              <span class="bg-lgreen text-white text-sm font-bold capitalize px-4 py-2 rounded-full">{{ event.type }}</span>
              <p class="text-dark text-sm">{{ event.date }}</p>
              <p class="text-dark text-sm">{{ event.duration }}</p>
            </div>
            
            <h1 class="text-dark text-3xl md:text-4xl font-bold leading-tight mb-4">{{ event.title }}</h1>
            <p class="text-dark text-base mb-8">{{ event.longDescription || event.description }}</p>
            
            <button class="bg-lblue text-white text-lg md:text-xl font-bold py-3 px-8 md:py-4 md:px-10 rounded-full self-center cursor-pointer hover:bg-green-700 transition-colors duration-200">Join Now</button>
          </div>
        </div>
      </div>

      <div v-if="event.location" class="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg my-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 p-6 md:p-10">
          <div>
              <h3 class="text-lblue text-2xl md:text-3xl mb-2">Location</h3>
              <p class="text-dark text-lg md:text-xl">{{ event.location }}</p>
          </div>
          <div v-if="event.price">
              <h3 class="text-lblue text-2xl md:text-3xl mb-2">Price</h3>
              <p class="text-dark text-lg md:text-xl">{{ event.price }}</p>
          </div>
          <div v-if="event.whoIsThisFor">
              <h3 class="text-lblue text-2xl md:text-3xl mb-2">Who is this for?</h3>
              <p class="text-dark text-lg md:text-xl">{{ event.whoIsThisFor }}</p>
          </div>
          <div v-if="event.inquiries">
              <h3 class="text-lblue text-2xl md:text-3xl mb-2">Inquiries</h3>
              <p class="text-dark text-lg md:text-xl">{{ event.inquiries.email }}</p>
              <p class="text-dark text-lg md:text-xl">{{ event.inquiries.phone }}</p>
          </div>
        </div>
      </div>

      <div v-if="teachers.length > 0" class="max-w-5xl mx-auto py-10">
        <h2 class="text-dark text-3xl md:text-4xl text-center mb-8">Meet your teachers!</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <NuxtLink v-for="teacher in teachers" :key="teacher.id" :to="`/teachers/${teacher.name}`" class="block bg-white rounded-lg p-6 text-center shadow-lg">
            <img :src="teacher.image" :alt="teacher.name" class="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-[#9C7A4A] object-cover">
            <h4 class="text-lblue text-lg font-bold">{{ teacher.name }}</h4>
            <p class="text-dark text-sm mt-2 italic">"{{ teacher.quote }}"</p>
          </NuxtLink>
        </div>
      </div>

    </div>
  </div>
  <div v-else class="text-red-500 text-center w-full py-8">
    Sorry, this event does not exist or the details are not available yet.
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import type { TeacherItem } from '~/utils/types/teacher-item';
import { ref } from 'vue';

const api = useApi();
const route = useRoute();
const title = route.params.title as string

const event = await api.getEventByTitle(title)

const teachers = ref<TeacherItem[]>([]);

if (event && event.teacherIds) {
  const teacherPromises = event.teacherIds.map(id => api.getTeacherById(id));
  const resolvedTeachers = await Promise.all(teacherPromises);
  teachers.value = resolvedTeachers.filter((t): t is TeacherItem => t !== undefined);
}
</script>