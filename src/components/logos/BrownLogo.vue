<template>
  <div>
    <BrownLogo v-bind:class="size" />
  </div>
</template>

<script>
import BrownLogo from '@/assets/logos/brown-logo.vue';

export default {
  components: {
    BrownLogo
  },
  props: {
    size: {
      type: String,
      default: 'l',
      validator: function(value) {
        // The value must match one of these strings
        return ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'].indexOf(value) !== -1;
      }
    }
  }
};
</script>
