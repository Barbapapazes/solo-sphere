<script lang="ts" setup>
import type { Author } from '~/types/authors'

defineProps<{
  title?: string
  date?: string
  authors?: Author[]
}>()
</script>

<template>
  <header class="space-y-8">
    <div class="space-y-2">
      <h1 v-if="title" class="text-2xl font-bold tracking-tight sm:text-4xl">
        {{ title }}
      </h1>

      <dl>
        <dt class="sr-only">
          Date de publication
        </dt>
        <dd>
          <time v-if="date" :datetime="date" class="text-zinc-500 dark:text-zinc-400 text-sm">
            {{ new Date(date).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }) }}
          </time>
        </dd>
      </dl>
    </div>

    <dl v-if="authors">
      <dt class="sr-only">
        Authors
      </dt>
      <dd>
        <ul class="flex gap-4 md:gap-8">
          <li v-for="author in authors" :key="author.name">
            <address class="flex items-center gap-2 not-italic">
              <img :src="author.picture" :alt="`Profil picture of ${author.name}`" class="w-9 h-9 rounded-full" width="36" height="36">
              <div class="text-sm">
                <div class="text-zinc-500 dark:text-zinc-400 leading-none">
                  {{ author.name }}
                </div>
                <div class="mt-1">
                  <NuxtLink rel="author noopener" :to="`https://x.com/${author.twitter}`" target="_blank" class="text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 hover:dark:text-zinc-200 leading-none font-medium transition ease-in">
                    @{{ author.twitter }}
                  </NuxtLink>
                </div>
              </div>
            </address>
          </li>
        </ul>
      </dd>
    </dl>
  </header>
</template>
