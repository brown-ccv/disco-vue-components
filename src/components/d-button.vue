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
import discoBaseMixin from '@/mixins/disco-base-mixin.js';

export default {
  mixins: [discoBaseMixin],
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
    icon: {
      type: Boolean,
      default: true,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
