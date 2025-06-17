<template>
    <Background suntitle="Blog">
        <!-- Featured Article -->
        <div class="featured-article bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div class="md:flex">
                <div class="md:w-1/2 p-6">
                    <img src="/images/beach.png" alt="Featured Article" class="h-64 md:h-full w-full object-cover rounded-lg" />
                </div>
                <div class="md:w-1/2 p-8">
                    <span class="text-primary font-semibold">Featured Article</span>
                    <h2 class="text-2xl font-bold mt-2 mb-4">The Transformative Power of Daily Yoga Practice</h2>
                    <p class="text-gray-600 mb-4">Discover how incorporating just 15 minutes of yoga into your daily routine can significantly improve your physical and mental well-being...</p>
                    <NuxtLink to="/blog" class="text-primary font-semibold">Read More →</NuxtLink>
                </div>
            </div>
        </div>

        <div class="h-20"></div>

        <!-- Blog Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Blog Post 1 -->
            <article class="bg-white rounded-xl shadow-lg overflow-hidden">
                <div class="p-6">
                    <img src="/images/beach.png" alt="Yoga Poses" class="h-48 w-full object-cover rounded-lg mb-6" />
                    <span class="text-sm text-gray-500">March 15, 2024</span>
                    <h3 class="text-xl font-bold mt-2 mb-3">5 Essential Yoga Poses for Beginners</h3>
                    <p class="text-gray-600 mb-4">Start your yoga journey with these fundamental poses that build strength and flexibility...</p>
                    <NuxtLink to="/blog" class="text-primary font-semibold">Read More →</NuxtLink>
                </div>
            </article>

            <!-- Blog Post 2 -->
            <article class="bg-white rounded-xl shadow-lg overflow-hidden">
                <div class="p-6">
                    <img src="/images/beach.png" alt="Meditation" class="h-48 w-full object-cover rounded-lg mb-6" />
                    <span class="text-sm text-gray-500">March 10, 2024</span>
                    <h3 class="text-xl font-bold mt-2 mb-3">Mindfulness Through Meditation</h3>
                    <p class="text-gray-600 mb-4">Learn how to incorporate meditation into your yoga practice for enhanced mental clarity...</p>
                    <NuxtLink to="/blog" class="text-primary font-semibold">Read More →</NuxtLink>
                </div>
            </article>

            <!-- Blog Post 3 -->
            <article class="bg-white rounded-xl shadow-lg overflow-hidden">
                <div class="p-6">
                    <img src="/images/beach.png" alt="Stress Relief" class="h-48 w-full object-cover rounded-lg mb-6" />
                    <span class="text-sm text-gray-500">March 5, 2024</span>
                    <h3 class="text-xl font-bold mt-2 mb-3">Yoga for Stress Relief</h3>
                    <p class="text-gray-600 mb-4">Discover effective yoga techniques to manage stress and anxiety in your daily life...</p>
                    <NuxtLink to="/blog" class="text-primary font-semibold">Read More →</NuxtLink>
                </div>
            </article>
        </div>
    </Background>
</template>

<script lang="ts" setup>

</script>

<style>

</style>