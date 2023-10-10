<script lang="ts" setup>
defineProps<{
  code: string
  language?: string
  filename?: string
  meta?: string
}>()

const { copy, copied, isSupported } = useClipboard()
</script>

<template>
  <div class="my-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-300/40 dark:border-zinc-700/40 overflow-hidden">
    <div class="group relative bg-zinc-300/10 dark:bg-zinc-700/10 px-4 py-4">
      <span v-if="filename" class="absolute top-2 right-3 text-xs font-mono">
        {{ filename }}
      </span>
      <slot />
      <ClientOnly>
        <button v-if="isSupported" class="opacity-0 group-hover:opacity-100 absolute right-3 bottom-2 p-1 transition" @click="copy(code)">
          <span class="sr-only">Copy to clipboard</span>
          <transition
            appear
            mode="out-in"
            enter-active-class="duration-150 ease-int"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="duration-150 ease-out"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div v-if="copied" class="w-4 h-4 i-heroicons-check" />
            <div v-else class="w-4 h-4 i-heroicons-clipboard-document" />
          </transition>
        </button>
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped>
:deep(pre) {
  background: none;
}

:deep(pre code .line) {
  display: block;
  min-height: 1rem;
}
</style>
