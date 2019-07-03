<template>
  <div class="sidebar">
    <label
      class="sidebar__toggle"
      for="sidebar_toggler"
      @click.stop="drawn = !drawn"
    >
      <icon icon-name="sidebar" class="sidebar__toggle--icon" stroke-width="3"
        ><more-icon
      /></icon>
    </label>
    <aside class="sidebar__container" role="complementary">
      <section>Sidebar</section>
    </aside>
  </div>
</template>
<script>
export default {
  components: {
    Icon: () => import('~/components/Icon'),
    MoreIcon: () => import('~/components/icons/More')
  },
  props: {
    drawn: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss">
.sidebar {
  @apply flex items-center relative;
  &__toggle {
    @apply py-1 px-2 block cursor-pointer;
    &--icon {
      @apply h-4 stroke-current;
    }
  }
  &__container {
    @apply bg-black max-w-full overflow-y-auto fixed top-0 left-full bottom-0 z-50;
  }
}
</style>
