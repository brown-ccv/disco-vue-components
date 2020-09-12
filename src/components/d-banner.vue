<template>
  <section
    role="banner"
    class="d-banner py-2 has-text-centered"
    v-bind:class="['has-background-' + variant]"
  >
    <div class="subtitle" v-bind:class="[tagTextColor(variant)]">
      {{ text }}
      <span
        class="tag"
        v-bind:class="['is-' + accent, tagTextColor(accent), 'is-' + tagSize]"
      >
        <slot name="icon"></slot>
        <span>{{ tag }}</span>
      </span>
    </div>
  </section>
</template>

<script>
import discoBaseMixin from '@/mixins/disco-base-mixin';

export default {
  mixins: [discoBaseMixin],
  props: {
    text: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: false,
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
    tagTextColor(color) {
      let textcolor =
        ['danger', 'dark', 'link'].indexOf(color) !== -1
          ? 'has-text-light'
          : 'has-text-dark';
      return textcolor;
    },
  },
};
</script>
