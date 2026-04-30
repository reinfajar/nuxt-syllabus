<template>
  <!-- pages/contact.vue becomes route '/contact' -->
  <div>
    <BaseCard title="Contact Information">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Email: hello@whitebeltcompany.com</p>
      <p>Phone: +62 21 1234 5678</p>
      <p>Address: Lorem Ipsum Street No. 123, Jakarta</p>
    </BaseCard>

    <BaseButton to="/">Back to Home</BaseButton>
  </div>
</template>

<script setup>
// useHead: each page sets its own unique title and description.
useHead({
  title: 'Contact',
  meta: [
    { name: 'description', content: 'Get in touch with Nuxt Company.' }
  ]
})
</script>