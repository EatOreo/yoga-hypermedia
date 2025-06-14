<template>
  <div v-if="teacherItem">
    <BreadCrumb :items="[
      { label: 'Teachers', to: '/teachers' },
      { label: name }
    ]" />
    <div class = "text-center">
    <img :src="teacherItem.image" alt="Huy Tran Vin" class="w-40 h-40 rounded-full shadow-md">
    </div>
    <Background>
        <div class="container flex mx-auto p-6">        
          <div class="flex flex-col md:flex-row items-center md:items-start">
            <div class="md:ml-6 mt-4 md:mt-0">
              <h3 class="text-2xl text-teal-900 font-semibold">{{ teacherItem?.name }}</h3>
              <p class="italic text-yellow-300 mt-2">{{ teacherItem?.quote }}</p>
              <p class="mt-4 text-gray-700">{{ teacherItem?.description }}</p>
            </div>
          </div>
          <div class="mt-6">
          <h4 class="text-xl text-teal-500 font-semibold">Contact (email)</h4>
          <p class="text-gray-600">{{ teacherItem?.email }}</p>
          </div>
          <div class="flex">
            <h3 class="text-xl text-teal-500 font-semibold">Classes</h3>
            <div class="grid grid-cols-2">
              <ClassCard v-for="classItem in classes.filter(t => t.teacherId === teacherItem.id)" :key="classItem.title"
              :title="classItem.title" :subtitle="classItem.subtitle" :intensity="classItem.intensity" :image="classItem.image" />
            </div>
          </div>
          <div class="flex ">
            <h3 class="text-xl text-teal-500 font-semibold"> Events </h3>
            <div class="grid grid-cols-2">
              <EventCard v-for="eventItem in events.filter(e => teacherItem.id in e.teacherIds)" :key="eventItem.title" :event="eventItem" />
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
</script>
