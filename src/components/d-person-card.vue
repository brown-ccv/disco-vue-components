<template>
  <DCard
    :variant="variant"
    :width="width"
    :accent="accent"
    :border="border"
    class="d-person-card"
    :person="true"
    title=""
  >
    <template #content class="d-card-content">
      <figure
        tabindex="0"
        class="content person-image-figure"
        @focus="active = true"
        @blur="active = false"
        @mouseover="active = true"
        @mouseout="active = false"
      >
        <img class="person-iamge" :src="active ? hoverImage : mainImage" />
      </figure>
    </template>
    <template #footer>
      <h2>{{ name }}</h2>
      <p>
        {{ title }} <small>| {{ team }}</small>
      </p>
      <slot name="icons"> </slot>
    </template>
  </DCard>
</template>

<script>
import * as utils from '@/utils.js';
import DCard from '@/components/d-card.vue';

export default {
  data() {
    return {
      active: false,
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    team: {
      type: String,
      required: true,
    },
    mainImage: {
      type: String,
      required: true,
    },
    hoverImage: {
      type: String,
      required: true,
    },
    border: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    accent: {
      type: String,
      default: 'danger',
      validator(value) {
        return utils.variantValidator(value);
      },
    },
    variant: {
      type: String,
      default: 'white',
      validator(value) {
        return utils.variantValidator(value);
      },
    },
  },
  components: {
    DCard,
  },
};
</script>

<style lang="scss" scoped>
.d-person-card {
  padding: 0 !important;
}
.person-image {
  overflow: hidden;
  max-height: 100%;
  max-width: 100%;
}
.person-image-figure {
  height: 40ex;
}
</style>
