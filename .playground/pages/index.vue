<script lang="ts" setup>
const { data: page, error } = await useAsyncData('index', () => queryContent('/').findOne())

if (error.value) {
  throw createError({
    status: 400,
    message: 'Page not found',
    fatal: true,
  })
}

useSeoMeta({
  title: page.value.title ?? '',
  ogTitle: page.value.title ?? '',
  description: page.value.description ?? '',
  ogDescription: page.value.description ?? '',
})
</script>

<template>
  <ProseLayout :toc="page.body.toc" :title="page.title" :filename="page._file" class="max-w-screen-xl mx-auto">
    <ContentRenderer :value="page" />
  </ProseLayout>
</template>
