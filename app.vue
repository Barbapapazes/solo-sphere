<template>
  <Html dir="ltr" class="h-full font-sans antialiased">
    <Body class="flex h-full flex-col bg-zinc-50 dark:bg-black">
      <div class="h-full">
        <div class="fixed inset-0 sm:px-8 lg:px-16">
          <div
            class="w-full h-full max-w-screen-xl mx-auto ring-1 bg-white ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"
          />
        </div>
        <main class="relative mt-16 sm:mt-32 text-zinc-800 dark:text-zinc-100">
          <NuxtPage />
        </main>
      </div>
    </Body>
  </Html>
</template>
