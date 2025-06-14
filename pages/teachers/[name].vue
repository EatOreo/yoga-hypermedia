<template>
  <div v-if="teacherItem">
    <BreadCrumb :items="[
      { label: 'Teachers', to: '/teachers' },
      { label: name }
    ]" />
    <img :src="teacherItem.image" alt="Huy Tran Vin" class="w-40 h-40 rounded-full shadow-md">
    <Background>
      <div class="container flex mx-auto p-6">        
        <div class="flex flex-col md:flex-row items-center md:items-start">
          <div class="md:ml-6 mt-4 md:mt-0">
            <h3 class="text-2xl font-semibold">{{ teacherItem?.name }}</h3>
            <p class="italic text-gray-500 mt-2">{{ teacherItem?.quote }}</p>
            <p class="mt-4 text-gray-700">{{ teacherItem?.description }}</p>
          </div>
        </div>
        <div class="mt-6">
        <h4 class="text-xl font-semibold">Contact (email)</h4>
        <p class="text-gray-600">{{ teacherItem?.email }}</p>
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
