<template>
  <div class="flex justify-center">
    <div class="flex flex-wrap gap-2 p-4 pt-5 w-full max-w-[960px]">
      <template v-for="(item, idx) in items" :key="idx">
        <router-link v-if="item.to" :to="item.to" class="text-lgreen font-medium">
          {{ item.label }}
        </router-link>
        <span v-else class="text-dark font-medium">
          {{ item.label }}
        </span>
        <span v-if="idx < items.length - 1" class="text-lgreen font-medium">/</span>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

interface BreadCrumbItem {
  label: string
  to?: string
}

const props = defineProps<{
  items: BreadCrumbItem[]
}>()
</script>