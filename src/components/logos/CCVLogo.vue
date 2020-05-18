<template>
  <div>
    <CCVLogo v-bind:class="size" />
  </div>
</template>

<script>
import CCVLogo from '@/assets/logos/ccv-logo.svg';

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

<style lang="scss" scoped>
@import 'bulma';
.xxs {
  height: $size-4;
}
.xs {
  height: $size-3;
}
.s {
  height: $size-2;
}
.m {
  height: $size-1;
}
.l {
  height: $size-1 * 1.5;
}
.xl {
  height: $size-1 * 2;
}
.xxl {
  height: $size-1 * 3;
}

.ccv-logo {
  margin-left: $size-5;
  z-index: 100;
}
.c1 {
  fill: var(--color-yellow);
}

.c2 {
  fill: var(--color-green);
}

.v {
  fill: var(--color-yellow);
}
</style>
