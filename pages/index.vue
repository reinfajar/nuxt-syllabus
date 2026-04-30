<template>
  <!--
    File-based routing:
    pages/index.vue becomes route '/'
  -->
  <div>
    <section class="hero">
      <p class="hero-kicker">Simple Company Profile</p>
      <h2 class="hero-title">Welcome to White Belt Company</h2>
      <p class="hero-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <BaseButton to="/about">Learn More</BaseButton>
    </section>

    <!-- Auto-import demo: BaseCard is used without manual import -->
    <BaseCard title="Our Intro">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris.
      </p>
    </BaseCard>
  </div>
</template>

<script setup>
useHead({
  title: 'Home'
})
</script>