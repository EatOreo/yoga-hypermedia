<template>
  <Background suntitle="Our Team">
    <h2 class="text-dark text-2xl p-4 text-center"> Meet our talented yoga teachers.</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4 pb-6">
      <TeacherCard v-for="teacherItem in teachers" :key="teacherItem.id"
        :name="teacherItem.name" :image="teacherItem.image" :description="teacherItem.description"
        :email="teacherItem.email" :quote="teacherItem.quote" :gender="teacherItem.gender"/>
    </div>
  </Background>
</template>

<script lang="ts" setup>

const teachers = await useApi().getTeachers();
</script>