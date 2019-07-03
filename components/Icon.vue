<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="svg-icon"
    role="presentation"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-labelledby="iconName"
    :fill="fill"
    :stroke="stroke"
    :stroke-width="strokeWidth"
    :stroke-linecap="linecap"
    :stroke-linejoin="linejoin"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <slot />
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    },
    fill: {
      type: String,
      default: 'none'
    },
    stroke: {
      type: String,
      default: 'currentColor'
    },
    strokeWidth: {
      type: [Number, String],
      default: 2
    },
    linecap: {
      type: String,
      default: 'round'
    },
    linejoin: {
      type: String,
      default: 'round'
    },
    viewBox: {
      type: String,
      default: '0 0 24 24'
    }
  }
}
</script>

<style>
.svg-icon {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px;
}
</style>
