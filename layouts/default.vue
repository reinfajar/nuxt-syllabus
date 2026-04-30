<template>
  <div class="site-wrapper">
    <header class="site-header">
      <h1 class="site-title">Nuxt Company</h1>

      <!--
        Navigation uses NuxtLink.
        NuxtLink enables client-side navigation (no full page reload).
      -->
      <nav class="site-nav" aria-label="Main navigation">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
        <NuxtLink to="/posts">Posts</NuxtLink>
      </nav>
    </header>

    <main class="site-main">
      <!-- Page content from files in /pages is rendered here -->
      <slot />
    </main>

    <footer class="site-footer">
      <p>&copy; 2026 Nuxt Company. All rights reserved.</p>
    </footer>
  </div>
</template>

<style>
/*
  Layout transition: smooth fade when switching between different layouts.
  Configured in nuxt.config.ts under app.layoutTransition.
*/
.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.2s ease;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>