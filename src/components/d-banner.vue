<template>
  <section
    role="banner"
    class="d-banner py-2 has-text-centered"
    v-bind:class="['has-background-' + variant]"
  >
    <div class="subtitle" v-bind:class="[textColor(variant)]">
      {{ text }}
      <span
        class="tag"
        v-bind:class="[
          'is-' + tagVariant,
          textColor(tagVariant),
          'is-' + tagSize,
        ]"
      >
        <slot name="icon"></slot>
        <span>{{ tag }}</span>
      </span>
    </div>
  </section>
</template>

<script>
import * as utils from '@/utils.js';

export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: false,
    },
    variant: {
      type: String,
      default: 'primary',
      validator(value) {
        return utils.variantValidator(value);
      },
    },
    tagVariant: {
      type: String,
      default: 'primary',
      validator(value) {
        return utils.variantValidator(value);
      },
    },
    tagSize: {
      type: String,
      default: 'normal',
      validator(value) {
        return ['normal', 'medium', 'large'].indexOf(value) != -1;
      },
    },
  },
  methods: {
    textColor(color) {
      let textcolor =
        ['danger', 'dark', 'link'].indexOf(color) !== -1
          ? 'has-text-light'
          : 'has-text-dark';
      return textcolor;
    },
  },
};
</script>
