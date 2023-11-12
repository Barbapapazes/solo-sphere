<script lang="ts" setup>
import type { Toc } from '@nuxt/content/dist/runtime/types'
import type { Resource } from '~/types/resources'

defineProps<{
  title?: string
  date?: string
  toc: Toc
  filename: string
  resources?: Resource[]
}>()
</script>

<template>
  <article class="grid grid-cols-1 xl:grid-cols-[1fr_auto_1fr] gap-6">
    <div class="xl:col-start-2 max-w-prose mx-auto w-full border-b border-b-zinc-200 dark:border-b-zinc-800 pb-8">
      <ProseContentHeader
        v-if="title"
        :title="title"
        :date="date"
      />
    </div>

    <ProseContentBody class="xl:col-start-2 mx-auto">
      <slot />
    </ProseContentBody>

    <div class="max-w-prose mx-auto w-full row-start-2 xl:row-start-1 xl:row-span-2 xl:col-start-3 border-b border-b-zinc-200 dark:border-b-zinc-800 pb-6 xl:border-b-0 xl:pb-0">
      <ProseNav :toc="toc" :filename="filename" :resources="resources" class="xl:sticky xl:top-[5.5rem] xl:overflow-y-auto xl:max-h-[calc(100vh-5.5rem)]" />
    </div>
  </article>
</template>
