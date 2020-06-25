<template>
  <div role="dialog" class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card" v-bind:class="['is-width-' + width]">
      <section
        class="section pt-1 pb-1"
        v-bind:class="['has-background-' + colorbar]"
      />
      <header v-bind:class="['has-background-' + variant]">
        <button
          v-if="closeOptions == 'header' || closeOptions == 'both'"
          class="delete is-pulled-right"
          aria-label="close"
          @click="onClose"
        ></button>
      </header>
      <div
        class="has-text-centered px-3 py-1"
        v-bind:class="['has-background-' + variant]"
      >
        <slot name="content"> </slot>
      </div>
      <footer class="px-2 pb-2" v-bind:class="['has-background-' + variant]">
        <button
          v-if="closeOptions == 'footer' || closeOptions == 'both'"
          class="button is-inverted is-outlined"
          v-bind:class="['is-' + width, 'is-' + variant]"
          @click="onClose"
        >
          {{ closeButtonText }}
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      required: false,
      default: 'small',
      validator: function(value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      }
    },
    closeButtonText: {
      type: String,
      required: false
    },
    closeOptions: {
      type: String,
      required: false,
      validator: function(value) {
        return ['header', 'footer', 'both'].indexOf(value) !== -1;
      }
    },
    variant: {
      type: String,
      default: 'warning',
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
  width: 60vh;
}
.is-width-large {
  width: 90vh;
}
</style>
