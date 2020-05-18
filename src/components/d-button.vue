<template>
  <button
    :type="type"
    :name="name"
    class="d-button"
    v-bind:class="[
      'is-' + size,
      'is-' + variant,
      textColor,
      { 'is-outlined': outlined }
    ]"
    @click="onClick"
  >
    <slot name="icon-left"></slot>
    <span>{{ name | uppercase }}</span>
    <slot name="icon-right"></slot>
  </button>
</template>

<script>
export default {
  filters: {
    uppercase(str) {
      return str.toUpperCase();
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      required: false,
      validator: function(value) {
        return ['small', 'normal', 'medium', 'large'].indexOf(value) !== -1;
      }
    },
    variant: {
      type: String,
      default: 'primary',
      validator: function(value) {
        // The value must match one of these strings
        return (
          [
            'primary',
            'success',
            'danger',
            'warning',
            'info',
            'link',
            'dark',
            'light'
          ].indexOf(value) !== -1
        );
      }
    },
    icon: {
      type: Boolean,
      default: true
    },
    outlined: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    textColor() {
      let color =
        ['danger', 'dark', 'link'].indexOf(this.variant) !== -1
          ? 'has-text-light'
          : 'has-text-dark';
      if (this.outlined) {
        color = `has-text-${this.variant}`;
      }
      return color;
    }
  },
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
};
</script>
