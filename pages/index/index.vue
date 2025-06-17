<template>
    <div class="home">
        <!-- Hero Section -->
        <section class="hero min-h-screen bg-gradient-to-b from-primary/10 to-white">
            <div class="container mx-auto px-4 py-20">
                <div class="flex flex-col md:flex-row items-center justify-between">
                    <div class="md:w-1/2 mb-10 md:mb-0">
                        <h1 class="text-5xl font-bold mb-6">Find Your Inner Peace with Yogaga</h1>
                        <p class="text-xl mb-8">Discover the perfect balance of mind, body, and soul through our expert-led yoga classes.</p>
                        <div class="flex gap-4">
                            <NuxtLink to="/classes" class="btn btn-primary">Start Your Journey</NuxtLink>
                            <NuxtLink to="/aboutus" class="btn btn-outline">Learn More</NuxtLink>
                        </div>
                    </div>
                    <div class="md:w-1/2">
                        <img src="/images/home_first_image.jpg" alt="Yoga practice" class="rounded-2xl w-full h-full object-cover shadow-lg" />
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="py-20">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">Why Choose Yogaga?</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="feature-card p-6 rounded-xl shadow-lg">
                        <img src="/images/beach.png" alt="Expert Teachers" class="w-16 h-16 rounded-full mb-4 object-cover shadow-md" />
                        <h3 class="text-xl font-semibold mb-3">Expert Teachers</h3>
                        <p>Learn from certified instructors with years of experience in various yoga styles.</p>
                    </div>
                    <div class="feature-card p-6 rounded-xl shadow-lg">
                        <img src="/images/beach.png" alt="Flexible Schedule" class="w-16 h-16 rounded-full mb-4 object-cover shadow-md" />
                        <h3 class="text-xl font-semibold mb-3">Flexible Schedule</h3>
                        <p>Choose from morning, afternoon, and evening classes that fit your lifestyle.</p>
                    </div>
                    <div class="feature-card p-6 rounded-xl shadow-lg">
                        <img src="/images/beach.png" alt="Community" class="w-16 h-16 rounded-full mb-4 object-cover shadow-md" />
                        <h3 class="text-xl font-semibold mb-3">Community Focus</h3>
                        <p>Join a supportive community of like-minded individuals on their wellness journey.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="bg-primary/5 py-20">
            <div class="container mx-auto px-4 text-center">
                <h2 class="text-3xl font-bold mb-6">Ready to Begin Your Yoga Journey?</h2>
                <p class="text-xl mb-8">Join us today and experience the transformative power of yoga.</p>
                <NuxtLink to="/classes" class="btn btn-primary">Explore Classes</NuxtLink>
            </div>
        </section>
    </div>
</template>
