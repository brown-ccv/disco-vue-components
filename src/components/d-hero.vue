<template>
  <section
    class="d-hero is-medium is-bold"
    v-bind:class="['is-' + variant, { 'is-full-height': fullHeight }]"
  >
    <div class="hero-body">
      <div class="container">
        <h1 class="d-title">
          {{ title }}
        </h1>
        <h2 class="d-subtitle">
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
<style lang="scss" scoped>
@import 'bulma';

.d-title {
  @extend .title;
  font-size: $size-1 * 1.5;
  @include mobile {
    font-size: $size-1;
  }
}
.d-subtitle {
  @extend .subtitle;
  font-family: $family-sans-serif;
  font-size: $size-3;
}
.d-hero {
  @extend .hero;
  padding-left: 10rem;
  @include mobile {
    padding-left: 0;
  }
}
.is-full-height {
  height: 100vh;
  padding-top: 10rem;
  @include mobile {
    padding-top: 2rem;
  }
}
</style>
