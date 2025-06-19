<template>
  <Background suntitle="Contact Us">
    <div class="py-16 px-6">
      <div class="max-w-5xl mx-auto">

        <div class="grid md:grid-cols-2 gap-12 items-start">

          <div class="md:mt-8">
            <h2 class="text-3xl font-bold text-dark mb-4">Get in Touch</h2>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              We'd love to hear from you! Whether you have a question about our classes, events, or anything else, our team is ready to answer all your questions.
            </p>
            <div class="space-y-6">
              <div class="flex items-center">
                <div class="flex-shrink-0 bg-lblue text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <p class="text-gray-600">Via della Serenità 12, 20121 Milano MI, Italy</p>
              </div>
              <div class="flex items-center">
                <div class="flex-shrink-0 bg-lblue text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <p class="text-gray-600">hello@yogaga.com</p>
              </div>
              <div class="flex items-center">
                <div class="flex-shrink-0 bg-lblue text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <p class="text-gray-600">+39 333 123 4567</p>
              </div>
            </div>
          </div>

          <div>
            <div class="bg-white p-8 rounded-xl shadow-lg">
              <form @submit.prevent>
                <div class="mb-5">
                  <label for="name" class="block text-dark font-semibold mb-2">Name</label>
                  <input type="text" id="name" name="name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lblue">
                </div>
                <div class="mb-5">
                  <label for="email" class="block text-dark font-semibold mb-2">Email</label>
                  <input type="email" id="email" name="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lblue">
                </div>
                <div class="mb-5">
                  <label for="subject" class="block text-dark font-semibold mb-2">Subject</label>
                  <input type="text" id="subject" name="subject" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lblue">
                </div>
                <div class="mb-5">
                  <label for="message" class="block text-dark font-semibold mb-2">Message</label>
                  <textarea id="message" name="message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lblue"></textarea>
                </div>
                <button type="submit" class="w-full bg-lgreen text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div class="mt-20">
           <h2 class="text-3xl font-bold text-center text-dark mb-8">Find Us Here</h2>
           <div class="rounded-xl overflow-hidden shadow-lg border">
             <iframe
                width="100%"
                height="450"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://www.openstreetmap.org/export/embed.html?bbox=9.1777,45.4595,9.2023,45.4689&amp;layer=mapnik&amp;marker=45.4612,9.1900"
                style="border: 1px solid black"
                aria-label="Yoga Studio Location"
              ></iframe>
           </div>
        </div>

      </div>
    </div>
  </Background>
</template>

<script lang="ts" setup>
</script>

<style>
</style>