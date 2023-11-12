<template>
  <Html dir="ltr" class="h-full font-sans antialiased">
    <Head>
      <Link rel="icon" type="image/ico" href="/favicon.ico" />
    </Head>
    <Body class="flex flex-col bg-zinc-50 dark:bg-black text-zinc-800 dark:text-zinc-100">
      <div class="h-full">
        <div class="fixed inset-0 sm:px-8 lg:px-16">
          <div
            class="w-full h-full max-w-screen-xl mx-auto ring-1 bg-white ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"
          />
        </div>
        <div class="z-50 sticky top-6 flex flex-row justify-center">
          <TheHeader />
        </div>
        <main class="relative mt-16 sm:mt-32">
          <NuxtPage />
        </main>
        <TheFooter class="relative" />
      </div>
    </Body>
  </Html>
</template>
