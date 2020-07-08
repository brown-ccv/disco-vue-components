<template>
  <section
    v-bind:class="['is-width-' + size, 'has-border-top-' + colorbar, 'is-card']"
  >
    <header v-bind:class="['header-rule']">
      <h2 class="d-subtitle">{{ title }}</h2>
    </header>
    <div>
      <slot />
    </div>
    <footer v-if="buttonLabel">
      <button>{{ buttonLabel }}</button>
    </footer>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    border: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      required: false,
      default: 'small',
      validator: value => {
        ['small', 'medium', 'large'].indexOf(value) !== -1;
      }
    },
    variant: {
      type: String,
      default: 'warning',
      validator: value => {
        [
          'primary',
          'success',
          'danger',
          'warning',
          'info',
          'link',
          'dark',
          'light'
        ].indexOf(value) !== -1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.is-card {
  display: flex;
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px 0px;
}

.header-rule::after {
  display: block;
  width: 50px;
  height: 2px;
  background-color: #ccc6b8;
  content: '';
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
}

.is-width-small {
  width: 40vh;
}

.is-width-medium {
  width: 70vh;
}

.is-width-large {
  width: 100vh;
}

$variants: 'primary', 'success', 'danger', 'warning', 'info', 'link', 'dark',
  'light';

@each $variant in $variants {
  $color: --color-#{$variant};
  .has-border-top-#{$variant} {
    border-top: 5px solid var($color);
  }
}
</style>
