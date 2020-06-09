<template>
  <div class="color-container">
    <ColorSwatch v-for="(color, i) in colors" v-bind:key="i" :variant="color" />
  </div>
</template>

<script>
import ColorSwatch from './ColorSwatch';
export default {
  components: { ColorSwatch },
  props: {
    colors: {
      type: Array,
      required: true
    }
  }
};
</script>

<style
  lang="scss"
  src="../../../node_modules/@brown-ccv/disco-styles/scss/disco.scss"
></style>
