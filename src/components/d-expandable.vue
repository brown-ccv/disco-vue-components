<template>
  <span aria-label="expandable" class="d-expandable mx-2 my-2">
    <header
      class="level is-mobile d-expandable-header mb-0 px-0 py-2"
      v-bind:class="[textColor]"
      @click="onSelect"
      @keyup.enter="onSelect"
      @mouseover="setActive(true)"
      @mouseout="setActive(false)"
      @focus="setActive(true)"
      @blur="setActive(false)"
      tabindex="0"
      role="banner"
      :aria-pressed="isExpanded"
    >
      <div class="level-left">
        <h4 class="level-item is-size-4">{{ title }}</h4>
      </div>

      <div class="level-right">
        <span class="icon">
          <DIcon
            v-if="isExpanded"
            class="level-item"
            name="minus"
            aria-label="hide"
          />
          <DIcon v-else class="level-item" name="plus" aria-label="show" />
        </span>
      </div>
    </header>

    <div
      v-show="isExpanded"
      data-testid="content"
      class="d-expandable-content px-4 py-3 is-size-6"
      v-bind:class="[borderColor]"
    >
      <slot></slot>
    </div>
  </span>
</template>

<script>
import DIcon from '@/components/d-icon.vue';

import * as utils from '@/utils.js';

export default {
  name: 'Expandable',
  components: {
    DIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    isExpanded: {
      type: Boolean,
      default: false,
    },
    isHovered: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'primary',
      validator(value) {
        return utils.variantValidator(value);
      },
    },
  },
  methods: {
    onSelect() {
      this.$emit('header-click');
    },
    setActive(val) {
      if (val) {
        this.$emit('header-active');
      } else {
        this.$emit('header-inactive');
      }
    },
  },
  computed: {
    textColor() {
      let color =
        ['danger', 'dark', 'link'].indexOf(this.variant) !== -1
          ? 'has-text-light'
          : 'has-text-dark';
      if (this.isHovered || this.isExpanded) {
        color = `has-text-${this.variant}`;
      }
      return color;
    },
    borderColor() {
      let color = `has-border-left-${this.variant}`;
      return color;
    },
  },
};
</script>

<style scoped lang="scss">
.d-expandable-header {
  cursor: pointer;
}

$variants: 'primary', 'info', 'link', 'success', 'warning', 'danger', 'dark',
  'light';

$sides: 'top', 'left', 'right', 'bottom';

@each $variant in $variants {
  $color: --color-#{$variant};

  // full border
  .has-border-#{$variant} {
    border: 5px solid var($color);
  }

  // single side border
  @each $side in $sides {
    .has-border-#{$side}-#{$variant} {
      border-#{$side}: 5px solid var($color);
    }
  }
}
</style>
