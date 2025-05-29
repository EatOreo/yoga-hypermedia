<template>
  <div class="pb-3">
    <div class="flex border-b border-[#dbdbdb] px-4 gap-8">
      <a class="flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4"
        :style="{ borderColor: hashValue === '' ? '#1c160d' : '#A4AC86'}" href="#">
        <p class="text-sm" :style="{ color: hashValue === '' ? 'inherit' : '#A4AC86'}">
          All Classes
        </p>
      </a>
      <a class="flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4"
        :style="{ borderColor: hashValue === 'beginner' ? '#1c160d' : '#A4AC86'}" href="#beginner">
        <p class="text-sm" :style="{ color: hashValue === 'beginner' ? 'inherit' : '#A4AC86'}">
          Beginner
        </p>
      </a>
      <a class="flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4"
        :style="{ borderColor: hashValue === 'intermediate' ? '#1c160d' : '#A4AC86'}" href="#intermediate">
        <p class="text-sm" :style="{ color: hashValue === 'intermediate' ? 'inherit' : '#A4AC86'}">
          Intermediate
        </p>
      </a>
      <a class="flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4"
        :style="{ borderColor: hashValue === 'advanced' ? '#1c160d' : '#A4AC86'}" href="#advanced">
        <p class="text-sm" :style="{ color: hashValue === 'advanced' ? 'inherit' : '#A4AC86'}">
          Advanced
        </p>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const hashValue = computed(() => route.hash.replace('#', ''));
</script>

<style></style>