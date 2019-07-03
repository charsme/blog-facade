<template>
  <div class="site">
    <site-header />
    <social-links />
    <nuxt />
    <site-footer />
  </div>
</template>
<script>
export default {
  components: {
    SocialLinks: () => import('~/components/SocialLinks'),
    SiteHeader: () => import('~/components/Header'),
    SiteFooter: () => import('~/components/Footer')
  }
}
</script>
