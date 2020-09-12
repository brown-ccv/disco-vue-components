<template>
  <section
    v-bind="$attrs"
    class="d-card is-card"
    data-testid="card"
    v-bind:class="[
      'is-width-' + width,
      borderColor,
      textColor,
      'has-background-' + variant,
    ]"
  >
    <header v-if="!person" v-bind:class="[headerRule]">
      <h2 class="subtitle is-3 pt-2">{{ title }}</h2>
    </header>
    <div v-bind:class="person ? 'd-person-card-content' : 'card-content'">
      <slot name="content" />
    </div>
    <footer class="pb-2">
      <slot name="footer" />
    </footer>
  </section>
</template>

<script>
import discoBaseMixin from '@/mixins/disco-base-mixin';

export default {
  mixins: [discoBaseMixin],
  props: {
    title: {
      type: String,
      required: true,
    },
    person: {
      type: Boolean,
      required: false,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
