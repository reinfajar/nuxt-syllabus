<template>
  <div class="error-page">
    <BaseCard title="Something Went Wrong">
      <p class="error-code">Status: {{ error?.statusCode || 500 }}</p>
      <p class="error-message">{{ error?.message || 'Unexpected error occurred.' }}</p>
      <BaseButton to="/">Return to Home</BaseButton>
    </BaseCard>
  </div>
</template>

<script setup>
defineProps({
  error: {
    type: Object,
    default: () => ({})
  }
})
</script>