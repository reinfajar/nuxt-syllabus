<template>
  <!-- pages/posts/index.vue → route '/posts' -->
  <div>
    <BaseCard title="Blog Posts">
      <p>
        Posts are fetched from
        <a href="https://jsonplaceholder.typicode.com" target="_blank">JSONPlaceholder</a>
        — a free public API designed for demos and prototyping.
      </p>
    </BaseCard>

    <!--
      Loading state: show while useFetch is waiting for the server response.
      'pending' is true until the request completes.
    -->
    <div v-if="pending" class="state-box state-loading">
      Loading posts…
    </div>

    <!--
      Error state: show if the request failed.
      'error' is null when everything is fine.
    -->
    <div v-else-if="error" class="state-box state-error">
      Failed to load posts: {{ error.message }}
    </div>

    <!--
      Data state: render the list once data is available.
    -->
    <template v-else>
      <div
        v-for="post in data"
        :key="post.id"
        class="post-card"
      >
        <h3 class="post-title">{{ post.title }}</h3>
        <p class="post-excerpt">{{ post.body.slice(0, 80) }}…</p>
        <!--
          NuxtLink to dynamic route /posts/[id]
          Clicking navigates without a full page reload.
        -->
        <BaseButton :to="`/posts/${post.id}`">Read More</BaseButton>
      </div>
    </template>
  </div>
</template>

<script setup>
// useHead: dynamic title + SEO meta for the posts listing page.
useHead({
  title: 'Posts',
  meta: [
    { name: 'description', content: 'Read all posts from Nuxt Company.' }
  ]
})

/*
  useFetch: Nuxt's built-in data fetching composable.
  - Fetches from JSONPlaceholder, a free public REST API built for demos.
  - An absolute URL works on both server (SSR) and client with no issues.
  - '?_limit=5' restricts the response to 5 posts.
  - 'pending' is true while the request is in flight.
  - 'error' is non-null if the request fails.
  - 'data' holds the response array once resolved.
*/
const { data, pending, error } = await useFetch(
  'https://jsonplaceholder.typicode.com/posts?_limit=5'
)
</script>
