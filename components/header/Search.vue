<template>
  <div class="search">
    <label
      class="search__toggle"
      for="search_toggler"
      @click.stop="drawn = !drawn"
    >
      <icon icon-name="search" class="search__toggle--icon"
        ><search-icon
      /></icon>
    </label>
    <input
      id="search_toggler"
      type="checkbox"
      name="search_toggler"
      class="search__toggler"
    />
    <div class="search__wrapper" :class="drawn ? 'open' : 'close'">
      <section class="searchform">
        <h2 class="searchform__title">
          Press Enter / Return to begin your search.
        </h2>
        <label
          class="searchform__toggle"
          for="search_toggler"
          @click.stop="drawn = !drawn"
        >
          <span class="screen-reader-text">Close search form.</span>
          <icon
            icon-name="close"
            class="searchform__toggle--icon"
            stroke-width="1"
            ><close-icon
          /></icon>
        </label>
        <form class="searchform__wrapper">
          <label for="search-input" class="searchform__text">
            <span class="screen-reader-text">Search for:</span>
            <input
              id="search-input"
              type="search"
              placeholder="Search ..."
              name="search-input"
            />
          </label>
          <label for="search-submit" class="searchform__button">
            <span class="screen-reader-text">Search!</span>
            <input
              id="search-submit"
              type="submit"
              name="search-submit"
              value="search"
            />
            <icon
              icon-name="submit search"
              class="searchform__button--icon"
              stroke-width="1"
              ><search-icon
            /></icon>
          </label>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Icon: () => import('~/components/Icon'),
    SearchIcon: () => import('~/components/icons/Search'),
    CloseIcon: () => import('~/components/icons/Close')
  },
  props: {
    drawn: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style lang="scss">
.search {
  @apply flex items-center relative;
  &__toggle {
    @apply py-1 px-2 block cursor-pointer;
    &--icon {
      @apply h-4 w-4 stroke-current;
    }
  }
  &__toggler {
    @apply hidden invisible h-0 w-0 z-behind absolute left-0 top-0;
  }
  &__wrapper {
    @apply bg-black block h-screen w-screen fixed top-0 right-0 left-0 flex items-center justify-center;
    &.close {
      @apply opacity-0 invisible z-behind;
    }
    &.open {
      @apply opacity-100 visible z-30;
    }
  }
}
.searchform {
  @apply min-w-half max-w-inherit min-h-half max-h-half w-1/2 mx-auto p-8 bg-black z-30i text-center relative;

  &__title {
    @apply w-full py-4 text-gray-400 text-2xl font-serif mb-4 font-light;
  }
  &__toggle {
    @apply absolute top-0 right-0 text-gray-100 p-1 block cursor-pointer stroke-current;
    &--icon {
      @apply h-8 w-8;
    }
  }
  &__wrapper {
    @apply relative h-16 w-full border-gray-200 border-solid border-b z-40 flex items-center justify-between;
  }
  &__text {
    @apply h-full;
    width: calc(100% - 4rem);
    input[type='search'] {
      @apply bg-black w-full h-12 text-gray-200 py-2 pr-2 pl-16 text-xl font-sans text-center mb-4 outline-none;
    }
  }
  &__button {
    @apply h-12 flex items-center text-gray-400 px-4 py-2 mb-4;
    width: 4rem;
    input[type='submit'] {
      @apply hidden;
    }
    &--icon {
      @apply h-full w-full stroke-current;
    }
  }
}
</style>
