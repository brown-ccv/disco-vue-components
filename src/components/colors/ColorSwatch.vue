<template>
  <div class="color-swatch">
    <div class="color" v-bind:class="variantClass"></div>
    <div class="label">
      <p>{{ variant.name }}</p>
      <p class="label-code-wrapper">
        <code class="label-code">{{ colorCode }}</code>
      </p>
      <p>
        <code class="label-code">{{ variant.name | ccsvar }}</code>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: Object,
    },
  },
  data() {
    return {
      prefersDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
      colorCode: window.matchMedia('(prefers-color-scheme: dark)').matches
        ? this.variant.code.dark
        : this.variant.code.light,
    };
  },
  computed: {
    variantClass() {
      return `has-background-${this.variant.name}`;
    },
  },
  mounted() {
    // add event listener for prefers-color-scheme
    let mql = window.matchMedia('(prefers-color-scheme: dark)');
    const onMediaChange = (e) => this.onMediaChange(e);
    mql.addEventListener('change', function (e) {
      onMediaChange(e);
    });
  },
  methods: {
    onMediaChange(e) {
      if (e.matches) {
        this.prefersDark = true;
        this.colorCode = this.variant.code.dark;
      } else {
        this.prefersDark = false;
        this.colorCode = this.variant.code.light;
      }
    },
  },
  filters: {
    ccsvar(str) {
      return `var(--color-${str})`;
    },
  },
};
</script>
