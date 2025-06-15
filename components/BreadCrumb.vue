<template>
  <div class="px-4 flex flex-1 justify-center">
    <div class="flex flex-wrap gap-2 p-4 pt-5 w-full max-w-[960px]">
      <template v-for="(item, idx) in items" :key="idx">
        <NuxtLink v-if="item.to" :to="item.to" class="text-lgreen">
          {{ item.label }}
        </NuxtLink>
        <span v-else class="text-dark">
          {{ item.label }}
        </span>
        <span v-if="idx < items.length - 1" class="text-lgreen">/</span>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface BreadCrumbItem {
  label: string
  to?: string
}

const props = defineProps<{
  items: BreadCrumbItem[]
}>()
</script>