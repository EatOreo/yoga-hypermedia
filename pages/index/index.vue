<template>
    <section class="hero min-h-screen bg-gradient-to-b from-primary/10 to-white">
        <div class="container mx-auto px-4 pb-20 md:py-20">
            <div class="flex flex-col md:flex-row items-center justify-between">
                <div class="md:w-2/3 mb-10 md:mb-0">
                    <div class="flex flex-col items-center justify-between pt-12 md:pt-20 px-8" :class="[
                        'transition-opacity duration-700',
                        show ? 'opacity-100' : 'opacity-0'
                    ]">
                        <h1 class="text-4xl md:text-5xl font-bold mb-2">Find Your Inner Peace with Yogaga</h1>
                        <p class="text-lgreen text-md">Discover the perfect balance of mind, body, and soul through
                            our expert-led yoga classes.</p>
                        <div class="flex gap-8 pt-4 justify-end">
                            <NuxtLink to="/classes" class="text-sm text-lblue italic">Start Your Journey</NuxtLink>
                            <NuxtLink to="/aboutus" class="text-sm text-lblue italic">Learn More</NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="md:w-1/3">
                    <img src="/images/home_first_image.jpg" alt="Yoga practice"
                        class="rounded-2xl w-full h-full object-cover shadow-lg" />
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center border-b border-[#dbdbdb]">
            <h3 class="text-4xl pb-2 text-dark pt-4">Our Highlights:</h3>
        </div>
        <Highlights class="pt-4 pb-4" />
    </section>

    <section class="bg-primary/5 py-20">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold mb-2">Ready to Begin Your Yoga Journey?</h2>
            <p class="text-lgreen text-md mb-4">Join us today and experience the transformative power of yoga.</p>
            <NuxtLink to="/classes" class="text-sm text-lblue italic">Explore Classes</NuxtLink>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const show = ref(false)
onMounted(() => {
    show.value = true
})
</script>