<template>
  <div class="error">
    <div class="error__logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="90"
        height="90"
        fill="#DBE1EC"
        viewBox="0 0 48 48"
      >
        <path
          d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
        />
      </svg>
    </div>
    <div class="error__code">{{ statusCode }}</div>
    <p v-if="statusCode === 404" class="error__description">
      {{ message }}
    </p>
    <p v-else class="error__description">
      {{ messages.client_error_details }}
    </p>
    <NuxtLink class="error__link" to="/">back</NuxtLink>
  </div>
</template>
<script>
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content:
            'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
        }
      ]
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || `<%= messages.client_error %>`
    }
  }
}
</script>

<style lang="scss">
.error {
  @apply flex justify-center items-center text-center mx-auto flex-col py-4;

  & > div {
    @apply flex-1 font-sans text-center;
  }

  &__logo {
    @apply my-2;
    svg {
      @apply mx-auto;
    }
  }

  &__code {
    @apply font-bold text-6xl mb-4 text-gray-800;
  }

  &__description {
    @apply text-gray-600 font-normal text-xl mb-4;
  }

  &__link {
    @apply text-lg text-black;
  }
}
</style>
