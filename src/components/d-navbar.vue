<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <slot name="brand"></slot>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        :aria-expanded="expanded"
        data-target="navbarBasicExample"
        @click="expand"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      v-bind:class="{ 'is-active': expanded }"
    >
      <div class="navbar-start">
        <slot name="start"></slot>
      </div>
      <div class="navbar-end">
        <slot name="end"></slot>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    expand() {
      console.log('expanded');
      this.expanded = !this.expanded;
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'bulma';
.d-nav-brand {
  @extend .pr-3;
}
.navbar-burger {
  @include mobile {
    align-self: center;
  }
}
</style>
