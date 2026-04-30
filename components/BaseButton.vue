<template>
  <!-- Simple reusable button style using NuxtLink -->
  <NuxtLink :to="to" class="base-button">
    <slot />
  </NuxtLink>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    default: '/'
  }
})
</script>