<template>
  <div class="flex flex-col min-h-screen bg-gray-900 text-white">
    <!-- Navbar -->
    <LayoutsNavbar />

    <!-- Content -->
    <main class="flex-1 w-full">
      <slot />
    </main>

    <!-- Footer -->
    <LayoutsFooter />

    <!-- Go to top -->
    <BaseGoToTopButton />
  </div>
</template>
