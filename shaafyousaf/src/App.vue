<script setup lang="ts">
import { motion } from 'motion-v';

</script>

<template>
 <motion.div
    :initial="{ opacity: 0, y: 50 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.8, ease: 'easeOut' }"
  >
    Hello Motion!
  </motion.div> 
</template>

<style scoped></style>
