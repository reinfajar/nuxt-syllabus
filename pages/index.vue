<template>
  <!--
    File-based routing:
    pages/index.vue becomes route '/'
  -->
  <div>
    <section class="hero">
      <p class="hero-kicker">Simple Company Profile</p>
      <h2 class="hero-title">Welcome to Nuxt Syllabus Company</h2>
      <p class="hero-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <BaseButton to="/about">Learn More</BaseButton>
    </section>

    <!--
      LazyBaseCard: prefix 'Lazy' to defer loading the component
      until it is actually needed — this is Nuxt's built-in lazy loading.
    -->
    <LazyBaseCard title="Our Intro">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris.
      </p>
    </LazyBaseCard>
  </div>
</template>

<script setup>
// useHead: sets dynamic <title> and <meta> tags for SEO.
useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'Welcome to Nuxt Company — a beginner-friendly Nuxt 3 project demo.' }
  ]
})
</script>