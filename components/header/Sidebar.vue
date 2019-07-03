<template>
  <div class="sidebar">
    <aside class="sidebar__container" role="complementary">
      <section>Sidebar</section>
    </aside>
  </div>
</template>
<style lang="scss">
.sidebar {
  @apply relative;
  &__container {
    @apply bg-black max-w-full overflow-y-auto fixed top-0 left-full bottom-0 z-50;
  }
}
</style>
