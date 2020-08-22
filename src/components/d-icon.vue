<template>
  <div data-testid="icon-wrapper" class="icon-wrapper">
    <svg
      class="icon"
      :width="width"
      :height="height"
      aria-hidden="true"
      role="img"
    >
      <use v-bind="{ 'xlink:href': '/icons/brown-icons.svg#' + name }" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
  },
};
</script>

<style scoped>
.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  fill: currentColor;
}
</style>
