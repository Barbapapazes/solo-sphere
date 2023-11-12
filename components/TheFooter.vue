<script lang="ts" setup>
const footer = useAppConfig().portfolio.footer
</script>

<template>
  <footer class="mt-32 sm:px-8 lg:px-16">
    <div class="max-w-screen-xl mx-auto px-8 border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40 ">
      <div class="max-w-2xl lg:max-w-5xl mx-auto flex flex-col gap-6 sm:flex-row justify-between items-center sm:items-end">
        <nav aria-labelledby="Navigation secondaire">
          <ul v-for="link in footer.links" :key="link.label">
            <p class="font-semibold mb-3">
              {{ link.label }}
            </p>
            <li v-for="item in link.children" :key="item.label">
              <NuxtLink
                :to="item.to" :rel="item.rel" :target="item.target"
                class="block py-1 hover:underline hover:underline-offset-2"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="sm:py-2 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <p>
            {{ footer.text }}
          </p>
          <span>
            -
          </span>
          <FollowMe />
        </div>
      </div>
    </div>
  </footer>
</template>
