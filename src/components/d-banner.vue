<template>
  <section
    role="banner"
    class="d-banner py-2 has-text-centered"
    v-bind:class="['has-background-' + variant, textColor(variant)]"
  >
    <div class="subtitle">
      {{ text }}
      <span
        class="tag"
        v-bind:class="['is-' + tagVariant, textColor(tagVariant)]"
      >
        <slot name="icon"></slot>
        {{ tag }}
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
      required: true,
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
