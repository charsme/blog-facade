<template>
  <header class="header" role="banner">
    <div class="header__container">
      <div class="branding">Site Title</div>
      <div class="navigation">
        <nav role="navigation" class="nav">
          <nuxt-link to="/">home</nuxt-link>
          <nuxt-link to="/about">about</nuxt-link>
          <nuxt-link to="/achievements">achievements</nuxt-link>
        </nav>
        <search />
        <sidebar />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  components: {
    Search: () => import('~/components/header/Search'),
    Sidebar: () => import('~/components/header/Sidebar')
  }
}
</script>

<style lang="scss">
.header {
  @apply w-full fixed bg-transparent left-0 top-0 z-10 pt-6 pb-4;
  &__container {
    @apply px-16 max-w-inherit flex mx-auto w-full justify-between items-center h-8;
  }
}
.branding {
  @apply m-0 mr-4 text-left;
}
.navigation {
  @apply m-0 ml-4 text-right flex items-center;
}
.nav {
  @apply flex items-center justify-center font-serif;
  a {
    @apply px-4 capitalize;
  }
}
</style>
