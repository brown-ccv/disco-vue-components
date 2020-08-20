<template>
  <div>
    <CCVLogo role="img" aria-hidden="true" v-bind:class="size" />
  </div>
</template>

<script>
import CCVLogo from '@/assets/logos/ccv-logo.vue';

export default {
  components: {
    CCVLogo
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
