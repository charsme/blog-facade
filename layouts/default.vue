<template>
  <div>
    <sidebar />
    <div class="site">
      <mast-head />
      <social-links />
      <nuxt />
      <site-footer />
    </div>
  </div>
</template>
<script>
import Sidebar from '~/components/Sidebar'
import MastHead from '~/components/MastHead'
import SocialLinks from '~/components/SocialLinks'
import SiteFooter from '~/components/Footer'

export default {
  components: {
    Sidebar,
    MastHead,
    SocialLinks,
    SiteFooter
  }
}
</script>
