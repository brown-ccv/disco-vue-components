<template>
  <section
    class="d-card is-card"
    data-testid="card"
    v-bind:class="[
      'is-width-' + width,
      borderColor,
      textColor,
      'has-background-' + variant,
    ]"
  >
    <header v-bind:class="[headerRule]">
      <h2 class="subtitle is-3 pt-2">{{ title }}</h2>
    </header>
    <div class="card-content">
      <slot name="content" />
    </div>
    <footer class="pb-2">
      <slot name="footer" />
    </footer>
  </section>
</template>

<script>
import * as utils from '@/utils.js';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    border: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    accent: {
      type: String,
      default: 'danger',
      validator(value) {
        return utils.variantValidator(value);
      },
    },
    variant: {
      type: String,
      default: 'primary',
      validator(value) {
        return utils.variantValidator(value);
      },
    },
  },
  computed: {
    textColor() {
      let color =
        ['danger', 'dark', 'link'].indexOf(this.variant) !== -1
          ? 'has-text-light'
          : 'has-text-dark';
      return color;
    },
    borderColor() {
      let bordercolor = this.border
        ? 'has-border-' + this.accent
        : 'has-border-top-' + this.accent;
      return bordercolor;
    },
    headerRule() {
      return this.border ? 'has-header-rule-' + this.accent : 'header-rule';
    },
  },
};
</script>
