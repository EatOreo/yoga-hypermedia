<template>
    <Background v-if="posts" suntitle="Blog">
        <h2 class="text-dark text-2xl p-4 text-center"> Expand your horizons.</h2>
        <div class="p-4">
            <NuxtLink :to="'/blog/' + posts[0].title" class="block cursor-pointer">
                <div
                    class="bg-white rounded-xl shadow-lg overflow-hidden mb-8 transition-transform duration-200 hover:scale-102">
                    <div class="md:flex">
                        <div class="md:w-1/2 p-6">
                            <img :src="posts[0].image" alt="Featured Article"
                                class="h-64 md:h-full w-full object-cover rounded-lg" />
                        </div>
                        <div class="md:w-1/2 p-8 flex flex-col">
                            <span class="text-lgreen text-primary font-semibold">Featured Article</span>
                            <h2 class="text-2xl font-bold mt-2 mb-4">{{ posts[0].title }}</h2>
                            <p class="text-dark mb-4 flex-grow">{{ posts[0].teaser }}</p>
                            <p class="text-sm text-lblue italic">Read More →</p>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            <NuxtLink v-for="p in posts.slice(1)" :key="p.title" :to="'/blog/' + p.title" class="block cursor-pointer">
                <article
                    class="bg-white rounded-xl shadow-lg overflow-hidden h-full transition-transform duration-200 hover:scale-102">
                    <div class="p-6 flex flex-col h-full">
                        <img :src="p.image" alt="Yoga Poses" class="h-48 w-full object-cover rounded-lg mb-6" />
                        <span class="text-sm text-lgreen">{{ format(new Date(p.date), 'd. MMMM yyyy') }}</span>
                        <h3 class="text-xl font-bold mt-2 mb-3">{{ p.title }}</h3>
                        <p class="text-dark mb-4 flex-grow">{{ p.teaser }}</p>
                        <p class="text-sm text-lblue italic">Read More →</p>
                    </div>
                </article>
            </NuxtLink>
        </div>
    </Background>
</template>

<script lang="ts" setup>
useSeoMeta({
    title: 'Yogaga Blog',
    description: 'Discover our latest articles, tips, and insights on yoga, wellness, and mindful living.',
});

import { format } from 'date-fns'

const posts = await useApi().getBlogPosts();

</script>