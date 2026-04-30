<template>
  <!--
    NuxtLayout + NuxtPage is the basic app shell.
    - SSR: server renders initial HTML for faster first load/SEO.
    - CSR: client-side JS hydrates and handles next-page navigation.
  -->
  <NuxtLayout>
    <!--
      Page transition: wraps NuxtPage so every route change animates.
      The name "page" maps to CSS classes: .page-enter-active, .page-leave-active, etc.
    -->
    <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
  </NuxtLayout>
</template>

<style>
/*
  Page transition CSS.
  'out-in' mode means the old page leaves first, then the new page enters.
*/
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>