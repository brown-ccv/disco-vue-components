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
  lang="css"
  src="../../../node_modules/disco-styles/css/disco.css"
></style>
