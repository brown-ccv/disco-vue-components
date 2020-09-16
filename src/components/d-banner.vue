<template>
  <section
    role="banner"
    class="d-banner mb-0 py-2 has-text-centered"
    v-if="!dismissed"
    v-bind:class="['has-background-' + variant]"
  >
    <button
      @click="dismiss()"
      class="d-button-delete is-pulled-right"
      data-testid="dismiss"
    ></button>
    <div
      class="subtitle"
      v-bind:class="[tagTextColor(variant)]"
      data-testid="text"
    >
      <span
        v-if="$slots.badge"
        class="tag"
        v-bind:class="['is-' + accent, tagTextColor(accent), 'is-' + tagSize]"
      >
        <slot name="badge"></slot>
      </span>
      {{ text }}
    </div>
  </section>
</template>

<script>
import discoBaseMixin from '@/mixins/disco-base-mixin';

export default {
  mixins: [discoBaseMixin],
  data() {
    return {
      dismissed: false,
    };
  },
  props: {
    text: {
      type: String,
      required: true,
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
    dismiss() {
      this.dismissed = true;
    },
  },
};
</script>
<style lang="scss">
@import 'bulma';
.d-banner {
  @extend .notification;
  border-radius: 0 !important;
  width: 100vw;
}
</style>
