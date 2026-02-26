<script setup lang="ts">
import { MotionConfig } from 'motion-v';
import { Analytics } from '@vercel/analytics/nuxt'

</script>



<template>
  <MotionConfig :inViewOptions="{ once: true }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </MotionConfig>
</template>
