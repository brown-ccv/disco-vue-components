<template>
  <dialog
    aria-live="polite"
    role="dialog"
    class="d-dialog modal is-active"
    data-testid="dialog"
  >
    <!-- area surrounding modal -->
    <div class="modal-background"></div>

    <!-- main modal area -->
    <div
      data-testid="modal-card"
      class="modal-card"
      v-bind:class="[
        'is-width-' + width,
        'has-border-top-' + accent,
        'has-background-' + variant,
      ]"
    >
      <!-- header -->
      <header
        data-testid="modal-header"
        v-if="closeOptions == 'header' || closeOptions == 'both'"
      >
        <button
          class="d-button-delete is-pulled-right"
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
        tabindex="0"
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
          :variant="accent"
          @click="onClose"
        >
        </d-button>
      </footer>
    </div>
  </dialog>
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
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    closeButtonText: {
      type: String,
      default: 'Close',
    },
    closeOptions: {
      type: String,
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
    accent: {
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
