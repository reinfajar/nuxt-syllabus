<template>
  <section class="base-card">
    <h2 v-if="title" class="base-card-title">{{ title }}</h2>
    <div class="base-card-content">
      <slot />
    </div>
  </section>
</template>

<script setup>
// Reusable component prop.
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>