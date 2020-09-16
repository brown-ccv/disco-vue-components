<template>
  <dialog
    aria-live="polite"
    role="dialog"
    class="d-dialog modal"
    v-bind:class="{ 'is-active': isActive }"
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
import discoBaseMixin from '@/mixins/disco-base-mixin.js';

export default {
  mixins: [discoBaseMixin],
  components: {
    'd-button': DButton,
  },
  data() {
    return {
      isActive: true,
    };
  },
  props: {
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
  },
  methods: {
    onClose() {
      this.isActive = false;
      this.$emit('close');
    },
  },
};
</script>
