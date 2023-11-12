<script lang="ts" setup>
const { page, toc } = useContent()
</script>

<template>
  <AppSection class="px-4">
    <ProseLayout :toc="toc" :title="page.title" :filename="page._file" class="max-w-screen-xl mx-auto">
      <slot />
    </ProseLayout>
  </AppSection>
</template>
