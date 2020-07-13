<template>
  <div aria-live="polite" role="dialog" class="d-modal modal is-active">
    <!-- area surrounding modal -->
    <div class="modal-background"></div>

    <!-- main modal area -->
    <div
      class="modal-card"
      v-bind:class="[
        'is-width-' + width,
        'has-border-top-' + colorbar,
        'has-background-' + variant
      ]"
    >
      <!-- header -->
      <header v-if="closeOptions == 'header' || closeOptions == 'both'">
        <button
          class="delete is-pulled-right"
          aria-label="close"
          @click="onClose"
        ></button>
      </header>

      <!-- modal content -->
      <div class="modal-card-body" v-bind:class="['has-background-' + variant]">
        <slot name="content"> </slot>
      </div>

      <!-- modal footer with close button -->
      <footer
        v-if="closeOptions == 'footer' || closeOptions == 'both'"
        class="px-2 pb-2"
      >
        <d-button
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
export default {
  components: {
    'd-button': DButton
  },
  props: {
    width: {
      type: String,
      required: false,
      default: 'medium',
      validator: function(value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      }
    },
    closeButtonText: {
      type: String,
      required: false,
      default: 'Close'
    },
    closeOptions: {
      type: String,
      required: false,
      default: 'header',
      validator: function(value) {
        return ['header', 'footer', 'both'].indexOf(value) !== -1;
      }
    },
    variant: {
      type: String,
      default: 'primary',
      validator: function(value) {
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
            'light'
          ].indexOf(value) !== -1
        );
      }
    },
    colorbar: {
      type: String,
      default: 'danger',
      validator: function(value) {
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
            'light'
          ].indexOf(value) !== -1
        );
      }
    }
  },
  methods: {
    onClose() {
      this.$emit('close');
    }
  }
};
</script>
<style lang="scss" scoped>
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
