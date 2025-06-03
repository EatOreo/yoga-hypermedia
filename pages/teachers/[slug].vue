<template>
  <div>
    <BreadCrumb :items="[
      { label: 'Teachers', to: '/teachers' },
      { label: slug }
    ]" />
    <Background>
      {{ slug }}
    </Background>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug as string
</script>

<style></style>