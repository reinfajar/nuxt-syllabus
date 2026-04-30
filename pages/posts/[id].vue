<template>
  <!-- pages/posts/[id].vue → route '/posts/1', '/posts/2', etc. -->
  <div>
    <div v-if="!postData" class="state-box state-error">
      Post not found.
    </div>

    <template v-else>
      <BaseCard :title="postData.title">
        <p>{{ postData.body }}</p>
      </BaseCard>
    </template>

    <BaseButton to="/posts">← Back to Posts</BaseButton>
  </div>
</template>

<script setup>
/*
  useRoute: gives access to the current route object.
  route.params.id contains the value from the URL segment [id].
  e.g. visiting /posts/2 → route.params.id === '2'
*/
const route = useRoute()
const id = Number(route.params.id)

/*
  useFetch with a dynamic URL built from the route param.
  Each post ID gets its own fetch, so /posts/3 loads post #3 from the API.
*/
const { data: postData } = await useFetch(
  `https://jsonplaceholder.typicode.com/posts/${id}`
)

// useHead: dynamic title and description per post.
useHead({
  title: postData.value ? postData.value.title : 'Post Not Found',
  meta: [
    {
      name: 'description',
      content: postData.value ? postData.value.body.slice(0, 120) : 'Post not found.'
    }
  ]
})
</script>
