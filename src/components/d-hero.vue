<template>
  <section
    role="banner"
    class="d-hero is-medium is-bold"
    v-bind:class="['is-' + variant, { 'is-full-height': fullHeight }]"
  >
    <div class="hero-body">
      <div class="container">
        <h1 role="heading" aria-level="1" class="d-title">
          {{ title }}
        </h1>
        <h2 data-testid="subtitle" class="d-subtitle">
          {{ subtitle }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    fullHeight: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'warning',
      validator: function (value) {
        // The value must match one of these strings
        return (
          [
            'primary',
            'success',
            'danger',
            'warning',
            'info',
            'link',
            'dark',
            'light',
          ].indexOf(value) !== -1
        );
      },
    },
  },
};
</script>
