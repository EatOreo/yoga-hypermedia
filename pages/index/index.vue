<template>
    <section class="py-2 hero bg-gradient-to-b from-primary/10 to-white">
        <div class="flex flex-col items-center justify-between pt-12 md:pt-20 px-8">
            <h1 class="text-4xl md:text-5xl font-bold mb-2">Find Your Inner Peace with Yogaga</h1>
            <p class="text-lgreen text-md">Discover the perfect balance of mind, body, and soul through our
                expert-led yoga classes.</p>
            <div class="flex gap-4 pt-4 justify-end">
                <NuxtLink to="/classes" class="text-sm text-lblue italic">Start Your Journey</NuxtLink>
                <NuxtLink to="/aboutus" class="text-sm text-lblue italic">Learn More</NuxtLink>
            </div>
        </div>
        <div class="flex flex-col items-center border-b border-[#dbdbdb]">
            <h3 class="text-3xl pb-2 text-dark pt-20">Our Highlights:</h3>
        </div>
        <Highlights class="pt-8 " />
    </section>

    <section class="py-20">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">Why Choose Yogaga?</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="feature-card p-6 rounded-xl shadow-lg">
                    <img src="/images/beach.png" alt="Expert Teachers"
                        class="w-16 h-16 rounded-full mb-4 object-cover shadow-md" />
                    <h3 class="text-xl font-semibold mb-3">Expert Teachers</h3>
                    <p>Learn from certified instructors with years of experience in various yoga styles.</p>
                </div>
                <div class="feature-card p-6 rounded-xl shadow-lg">
                    <img src="/images/beach.png" alt="Flexible Schedule"
                        class="w-16 h-16 rounded-full mb-4 object-cover shadow-md" />
                    <h3 class="text-xl font-semibold mb-3">Flexible Schedule</h3>
                    <p>Choose from morning, afternoon, and evening classes that fit your lifestyle.</p>
                </div>
                <div class="feature-card p-6 rounded-xl shadow-lg">
                    <img src="/images/beach.png" alt="Community"
                        class="w-16 h-16 rounded-full mb-4 object-cover shadow-md" />
                    <h3 class="text-xl font-semibold mb-3">Community Focus</h3>
                    <p>Join a supportive community of like-minded individuals on their wellness journey.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-primary/5 py-20">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold mb-6">Ready to Begin Your Yoga Journey?</h2>
            <p class="text-xl mb-8">Join us today and experience the transformative power of yoga.</p>
            <NuxtLink to="/classes" class="text-sm text-lblue italic">Explore Classes</NuxtLink>
        </div>
    </section>
</template>
