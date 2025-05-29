<template>
  <div class="flex justify-center">
    <img src="/images/Classes.svg" alt="Yoga Classes" class="h-64" />
  </div>
  <div class="px-40 flex flex-1 justify-center pb-5">
    <div class="layout-content-container flex flex-col max-w-[960px] flex-1 bg-[#FFFDF5] rounded-2xl">
      <h2 class="text-[#213315] text-2xl leading-tight px-4 pb-3 pt-5">Find your flow</h2>
      <Selector />
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-4">
        <ClassCard image="/images/class-1.png" title="Vinyasa"
          subtitle="Flowing sequences synchronize movement with breath" intensity="intermediate" />
        <ClassCard image="/images/class-2.png" title="Hatha"
          subtitle="A slower-paced practice focused on breathing and alignment" intensity="beginner" />
        <ClassCard image="/images/class-3.png" title="Meditation" subtitle="Cultivate mindfulness and self-awareness"
          intensity="beginner" />
        <ClassCard image="/images/class-4.png" title="Prenatal" subtitle="Prepare your body and mind for birth"
          intensity="beginner" />
        <ClassCard image="/images/class-5.png" title="Yin"
          subtitle="Deep stretches held for several minutes to release tension" intensity="intermediate" />
        <ClassCard image="/images/class-6.png" title="Restorative" subtitle="Relax and renew with supported postures"
          intensity="beginner" />
        <ClassCard image="/images/class-7.png" title="Ashtanga" subtitle="A dynamic and physically demanding practice"
          intensity="advanced" />
        <ClassCard image="/images/class-8.png" title="Yoga for beginners"
          subtitle="Learn the basics and build a strong foundation" intensity="beginner" />
        <ClassCard image="/images/class-9.png" title="Yoga for athletes"
          subtitle="Enhance flexibility, mobility, and recovery" intensity="advanced" />
        <ClassCard image="/images/class-10.png" title="Yoga for back pain"
          subtitle="Alleviate discomfort and improve spinal health" intensity="beginner" />
        <ClassCard image="/images/class-11.png" title="Yoga for stress relief"
          subtitle="Calm your mind and soothe your nervous system" intensity="beginner" />
        <ClassCard image="/images/class-12.png" title="Yoga for core strength"
          subtitle="Tone your abdominal muscles and improve posture" intensity="intermediate" />
        <ClassCard image="/images/class-13.png" title="Yoga for runners"
          subtitle="Prevent injuries and enhance performance" intensity="intermediate" />
        <ClassCard image="/images/class-14.png" title="Yoga for balance"
          subtitle="Strengthen your stabilizing muscles and focus" intensity="beginner" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>