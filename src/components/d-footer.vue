<template>
  <footer
    class="d-footer"
    v-bind:class="['has-background-' + variant, textColor]"
  >
    <div class="d-footer-content-first">
      <slot name="first"></slot>
    </div>
    <div class="d-footer-content-second">
      <slot name="second"></slot>
    </div>
    <div class="d-footer-content-third">
      <slot name="third"></slot>
    </div>
  </footer>
</template>

<script>
import discoBaseMixin from '@/mixins/disco-base-mixin';
export default {
  mixins: [discoBaseMixin],
};
</script>

<style lang="scss" scoped>
@import 'bulma';
.d-footer {
  @extend .footer;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-areas:
    '. first .'
    '. second .'
    '. third .';
}
.d-footer-content-first {
  grid-area: first;
}
.d-footer-content-second {
  grid-area: second;
}
.d-footer-content-third {
  display: grid;
  justify-content: center;
  grid-area: third;
}
</style>
