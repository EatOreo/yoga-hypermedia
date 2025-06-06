<template>
  <div>
    <BreadCrumb :items="[
      { label: 'Teachers', to: '/teachers' },
      { label: slug }
    ]" />
    <Background>
      <img :src="teacher?.image" alt="Teacher Image" class="w-10 h-10 mr-2 rounded-2xl" />
      {{ teacher?.name }}
    </Background>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug as string

const teacher = await api.getTeacherByName(slug);
</script>