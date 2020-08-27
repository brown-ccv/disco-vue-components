<template>
  <section
    class="is-card"
    role="card"
    v-bind:class="[
      'is-width-' + width,
      borderColor,
      textColor,
      'has-background-' + variant,
    ]"
  >
    <header v-bind:class="[headerRule]">
      <h2 class="d-subtitle">{{ title }}</h2>
    </header>
    <div class="card-content">
      <slot name="content" />
    </div>
    <footer class="px-2 pb-2">
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

<style lang="scss" scoped>
.is-card {
  display: flex;
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px 0px;
}

.is-width-small {
  width: 40vh;
}

.is-width-medium {
  width: 70vh;
}

.is-width-large {
  width: 100vh;
}

.header-rule::after {
  display: block;
  width: 50px;
  height: 2px;
  background-color: #ccc6b8;
  content: '';
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
}

$variants: 'primary', 'success', 'danger', 'warning', 'info', 'link', 'dark',
  'light';

@each $variant in $variants {
  $color: --color-#{$variant};
  .has-border-top-#{$variant} {
    border-top: 5px solid var($color);
  }
}

@each $variant in $variants {
  $color: --color-#{$variant};
  .has-border-#{$variant} {
    border: 2px solid var($color);
  }
}

@each $variant in $variants {
  $color: --color-#{$variant};
  .has-header-rule-#{$variant}::after {
    display: block;
    width: 50px;
    height: 2px;
    background-color: var($color);
    content: '';
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
