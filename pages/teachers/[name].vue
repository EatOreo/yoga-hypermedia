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

        <div v-if="(classes && classes.length > 0) || (events && events.length > 0)" class="mt-8 pt-4 border-t-2 border-dark/20">
          <div class="flex border-b border-gray-200">
            <button
              v-if="classes && classes.length > 0"
              @click="selectedTab = 'classes'"
              :class="['py-2 px-4 text-lg font-semibold', selectedTab === 'classes' ? 'border-b-2 border-lblue text-lblue' : 'text-gray-500 hover:text-lblue']"
            >
              Classes
            </button>
            <button
              v-if="events && events.length > 0"
              @click="selectedTab = 'events'"
              :class="['py-2 px-4 text-lg font-semibold', selectedTab === 'events' ? 'border-b-2 border-lblue text-lblue' : 'text-gray-500 hover:text-lblue']"
            >
              Events
            </button>
          </div>

          <div class="py-4">
            <div v-show="selectedTab === 'classes'">
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <ClassCard v-for="classItem in classes" :key="classItem.id" :title="classItem.title" :subtitle="classItem.subtitle" :image="classItem.image" />
              </div>
            </div>
            <div v-show="selectedTab === 'events'">
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <EventCard v-for="eventItem in events" :key="eventItem.title" :event="eventItem" size="small" />
              </div>
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
import { ref } from 'vue'

const api = useApi();
const route = useRoute()
const name = route.params.name as string

const teacherItem = await api.getTeacherByName(name);
const classes = teacherItem ? await api.getClassesByTeacherId(teacherItem.id) : [];
const events = teacherItem ? await api.getEventsByTeacherId(teacherItem.id) : [];

const selectedTab = ref((classes && classes.length > 0) ? 'classes' : 'events');
</script>