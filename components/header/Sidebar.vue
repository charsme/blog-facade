<template>
  <div class="sidebar">
    <label
      class="sidebar__toggle"
      for="sidebar_toggler"
      @click.stop="drawn = !drawn"
    >
      <icon icon-name="sidebar" class="sidebar__toggle--icon" stroke-width="2"
        ><more-icon
      /></icon>
    </label>
    <input
      id="sidebar_toggler"
      type="checkbox"
      name="sidebar_toggler"
      class="sidebar__toggler"
    />
    <aside
      class="sidebar__container"
      role="complementary"
      :class="drawn ? 'open' : 'close'"
    >
      <div class="pullover">
        <div class="pullover__container">
          <label
            class="pullover__toggle"
            for="sidebar_toggler"
            @click.stop="drawn = !drawn"
          >
            <span class="screen-reader-text">Close pullover drawer.</span>
            <icon
              icon-name="close"
              class="pullover__toggle--icon"
              stroke-width="1"
              ><close-icon
            /></icon>
          </label>
          <div class="pullover__wrapper">
            <section class="pullover__about">
              <h2>Blog Facade</h2>
              <p>
                I think therefore I am, when I doubt my existence therefore I
                prove I am exist.
              </p>
            </section>
            <section class="pullover__recent">
              <ul>
                <li>some link</li>
              </ul>
            </section>
            <section class="pullover__badges">
              <div>some badges</div>
            </section>
          </div>
        </div>
        <div class="pullover__overlay"></div>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  components: {
    Icon: () => import('~/components/Icon'),
    MoreIcon: () => import('~/components/icons/More'),
    CloseIcon: () => import('~/components/icons/Close')
  },
  data: () => {
    return {
      drawn: false
    }
  }
}
</script>

<style lang="scss">
@import '~assets/css/_animation';

.sidebar {
  @apply flex items-center relative;
  &__toggle {
    @apply py-1 px-2 block cursor-pointer;
    &--icon {
      @apply h-4 stroke-current;
    }
  }
  &__toggler {
    @apply hidden invisible h-0 w-0 z-behind absolute left-0 top-0;
  }
  &__container {
    @apply fixed w-screen h-screen top-0 z-30 block;

    &.open {
      @apply left-0;
    }
    &.close {
      @apply left-full;
    }
  }
}
.pullover {
  @apply w-full h-full relative;
  &__container {
    @apply absolute top-0 right-0 z-40 opacity-100 bg-black text-white w-2/3 min-h-screen text-left p-12;
  }
  &__toggle {
    @apply h-12 w-12 block cursor-pointer ml-auto mb-8;
    &--icon {
      @apply h-12 w-12 stroke-current;
    }
  }
  &__wrapper {
    @apply flex relative w-full items-start justify-start flex-col;
  }
  &__about {
    @apply text-center w-full p-16;
    h2 {
      @apply text-3xl font-medium text-gray-100 font-sans leading-loose tracking-normal;
    }
    p {
      @apply text-2xl font-light text-gray-300 font-serif leading-loose break-words;
    }
  }

  &__overlay {
    @apply absolute top-0 left-0 z-30 opacity-50 bg-white w-screen h-screen;
  }
}
</style>
