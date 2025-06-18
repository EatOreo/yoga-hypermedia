<template>
    <Background v-if="posts" suntitle="Blog">
        <!-- Featured Article -->
         <div class="p-4">
            <div class="featured-article bg-white rounded-xl shadow-lg overflow-hidden mb-12">
                <div class="md:flex">
                    <div class="md:w-1/2 p-6">
                        <img :src="posts[0].image" alt="Featured Article" class="h-64 md:h-full w-full object-cover rounded-lg" />
                    </div>
                    <div class="md:w-1/2 p-8">
                        <span class="text-primary font-semibold">Featured Article</span>
                        <h2 class="text-2xl font-bold mt-2 mb-4">{{posts[0].title}}</h2>
                        <p class="text-gray-600 mb-4">{{ posts[0].teaser }}</p>
                        <NuxtLink :to="'/blog/' + posts[0].title" class="text-primary font-semibold">Read More →</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-20"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            <article v-for="p in posts.slice(1)" class="bg-white rounded-xl shadow-lg overflow-hidden">
                <div class="p-6">
                    <img :src="p.image" alt="Yoga Poses" class="h-48 w-full object-cover rounded-lg mb-6" />
                    <span class="text-sm text-gray-500">{{ p.date }}</span>
                    <h3 class="text-xl font-bold mt-2 mb-3">{{ p.title }}</h3>
                    <p class="text-gray-600 mb-4">{{ p.teaser }}</p>
                    <NuxtLink :to="'/blog/' + p.title" class="text-primary font-semibold">Read More →</NuxtLink>
                </div>
            </article>
        </div>
    </Background>
</template>

<script lang="ts" setup>

const posts = await useApi().getBlogPosts();

</script>

<style>

</style>