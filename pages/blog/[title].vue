<template>
  <div v-if="post">
    <BreadCrumb :items="[
      { label: 'Blog', to: '/blog' },
      { label: post.title }
    ]" />
    <Background>
    <div class="pt-16 px-64 flex flex-col items-center">
      <img class="rounded-2xl" :src="post.image">
      <p class="text-sm text-lgreen italic pt-2"> {{ post.author }}, {{ post.date }}</p>
    </div>
      <div class="px-32 py-16" v-html="post.body"></div>
    </Background>
  </div>
</template>

<script lang="ts" setup>

const route = useRoute()
const title = route.params.title as string

const api = useApi();
const post = await api.getBlogByTitle(title)
</script>