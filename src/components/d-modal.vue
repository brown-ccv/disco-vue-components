<template>
  <div aria-live="polite" role="dialog" class="d-modal modal is-active">
    <!-- area surrounding modal -->
    <div class="modal-background"></div>

    <!-- main modal area -->
    <div
      data-testid="modal-card"
      class="modal-card"
      v-bind:class="[
        'is-width-' + width,
        'has-border-top-' + colorbar,
        'has-background-' + variant,
      ]"
    >
      <!-- header -->
      <header
        data-testid="modal-header"
        v-if="closeOptions == 'header' || closeOptions == 'both'"
      >
        <button
          class="delete is-pulled-right"
          aria-label="close"
          @click="onClose"
        ></button>
      </header>

      <!-- modal content -->
      <!-- need to add background variant again here 
      to override the background of modal-card-body -->
      <div
        data-testid="modal-content"
        class="modal-card-body"
        v-bind:class="[textColor, 'has-background-' + variant]"
      >
        <slot name="content"> </slot>
      </div>

      <!-- modal footer with close button -->
      <footer
        data-testid="modal-footer"
        v-if="closeOptions == 'footer' || closeOptions == 'both'"
        class="px-2 pb-2"
      >
        <d-button
          aria-label="close"
          id="closebutton"
          :name="closeButtonText"
          :variant="colorbar"
          @click="onClose"
        >
        </d-button>
      </footer>
    </div>
  </div>
</template>

<script>
import DButton from '@/components/d-button.vue';

import * as utils from '@/utils.js';

export default {
  components: {
    'd-button': DButton,
  },
  props: {
    width: {
      type: String,
      required: false,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    closeButtonText: {
      type: String,
      required: false,
      default: 'Close',
    },
    closeOptions: {
      type: String,
      required: false,
      default: 'header',
      validator: function (value) {
        return ['header', 'footer', 'both'].indexOf(value) !== -1;
      },
    },
    variant: {
      type: String,
      default: 'primary',
      validator(value) {
        return utils.variantValidator(value);
      },
    },
    colorbar: {
      type: String,
      default: 'danger',
      validator(value) {
        return utils.variantValidator(value);
      },
    },
  },
  methods: {
    onClose() {
      this.$emit('close');
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
  },
};
</script>
<style lang="scss" scoped>
.delete {
  border-radius: 0 !important;
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
