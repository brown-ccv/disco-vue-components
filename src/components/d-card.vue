<template>
  <section
    class="is-card"
    v-bind:class="['is-width-' + size, 'has-border-top-' + colorbar]"
  >
    <header v-bind:class="['header-rule']">
      <h2 class="d-subtitle">{{ title }}</h2>
    </header>
    <div class="card-content">
      <slot name="content" />
    </div>
    <footer class="px-2 pb-3" v-if="buttonLabel">
      <d-button :name="buttonLabel" :variant="colorbar"></d-button>
    </footer>
  </section>
</template>

<script>
import DButton from '@/components/d-button.vue';
import * as utils from '@/utils.js';

export default {
  components: {
    'd-button': DButton
  },
  props: {
    title: {
      type: String,
      required: true
    },
    border: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      required: false,
      default: 'small',
      validator: value => {
        ['small', 'medium', 'large'].indexOf(value) !== -1;
      }
    },
    variant: {
      type: String,
      default: 'primary',
      validator(value) {
        return utils.variantValidator(value);
      }
    },
    colorbar: {
      type: String,
      default: 'danger',
      validator(value) {
        return utils.variantValidator(value);
      }
    },
    buttonLabel: {
      type: String,
      required: false
    }
  }
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

.is-width-small {
  width: 40vh;
}

.is-width-medium {
  width: 70vh;
}

.is-width-large {
  width: 100vh;
}

$variants: 'primary', 'success', 'danger', 'warning', 'info', 'link', 'dark',
  'light';

@each $variant in $variants {
  $color: --color-#{$variant};
  .has-border-top-#{$variant} {
    border-top: 5px solid var($color);
  }
}
</style>
