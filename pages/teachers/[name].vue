<template>
  <div v-if="teacherItem">
    <BreadCrumb :items="[
      { label: 'Teachers', to: '/teachers' },
      { label: teacherItem.name }
    ]" />
    <Background>
      <div class="md:flex p-4">
        <div class="flex-1 p-4">
            <p class="text-dark text-[32px]">{{ teacherItem.name }}</p>
          <img :src="teacherItem.image" :alt="teacherItem.name" class="w-full rounded-xl object-cover mb-4" />
            <p class="text-lgreen text-sm"> {{ teacherItem.quote }} </p>
          <p class="text-dark pt-4 text-justify">
            {{ teacherItem.description }}
          </p>
          <h3 class="text-lblue mt-8 text-lg pb-2">Teacher Info</h3>
          <div class="grid grid-cols-[20%_1fr] gap-x-6">
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbdbdb] py-5">
              <p class="text-lgreen text-sm">Contact</p>
              <p class="text-dark text-sm capitalize">{{ teacherItem?.email }}</p>
            </div>
          </div>
        </div>
        <div class="flex-1 p-4">
          <h3 class="text-lblue md:mt-8 text-lg pb-2">Classes & Events</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 py-5 border-t border-t-[#dbdbdb]">
            <ClassCard v-for="classItem in classes" :key="classItem.title" :title="classItem.title"
              :subtitle="classItem.subtitle" :image="classItem.image" />
            <EventCard v-for="eventItem in events" :key="eventItem.title" :event="eventItem" />
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