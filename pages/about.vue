<template>
  <!-- pages/about.vue becomes route '/about' -->
  <div>
    <BaseCard title="About Our Company">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
      </p>
      <p>
        Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
        Praesent mauris. Fusce nec tellus sed augue semper porta.
      </p>
    </BaseCard>

    <BaseButton to="/contact">Go to Contact</BaseButton>
  </div>
</template>

<script setup>
useHead({
  title: 'About'
})
</script>