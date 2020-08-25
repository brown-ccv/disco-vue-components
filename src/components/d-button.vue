<template>
  <button
    :type="type"
    :name="name"
    data-testid="button"
    class="d-button"
    v-bind:class="[
      'is-' + size,
      'is-' + variant,
      textColor,
      { 'is-outlined': outlined },
    ]"
    @click="onClick"
  >
    <slot name="icon-left"></slot>
    <span>{{ name | uppercase }}</span>
    <slot name="icon-right"></slot>
  </button>
</template>

<script>
import * as utils from '@/utils.js';

export default {
  filters: {
    uppercase(str) {
      return str.toUpperCase();
    },
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      required: false,
      validator: function (value) {
        return ['small', 'normal', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    variant: {
      type: String,
      default: 'primary',
      validator(value) {
        return utils.variantValidator(value);
      },
    },
    icon: {
      type: Boolean,
      default: true,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    textColor() {
      let color =
        ['danger', 'dark', 'link'].indexOf(this.variant) !== -1
          ? 'has-text-light'
          : 'has-text-dark';
      if (this.outlined) {
        color = `has-text-${this.variant}`;
      }
      return color;
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
