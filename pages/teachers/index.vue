<template>
  <Background suntitle="Our Team">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-7 p-4 pb-6">
      <TeacherCard v-for="teacherItem in teachers" :key="teacherItem.id"
        :name="teacherItem.name" :image="teacherItem.image" :description="teacherItem.description"
        :email="teacherItem.email" :quote="teacherItem.quote" :gender="teacherItem.gender"/>
    </div>
  </Background>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute();
const selected = computed(() => (route.query.select as string) || '');

const teachers = await api.getTeachers();
</script>