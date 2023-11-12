<script lang="ts" setup>
import type { DefineComponent } from 'vue'

defineProps<{
  is: string | DefineComponent<unknown>
}>()
</script>

<template>
  <Component :is="is" class="hover:text-zinc-800 hover:dark:text-zinc-200 transition ease-in">
    <slot />
  </Component>
</template>
