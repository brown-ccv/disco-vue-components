<template>
  <div class="chart-container" :class="['is-' + width]">
    <header class="chart-header">
      <h2 class="title"><slot name="title"></slot></h2>
      <h3 class="description"><slot name="description"></slot></h3>
    </header>
    <section class="chart">
      <slot name="chart"></slot>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: 'full',
      validator: function (value) {
        return (
          ['full', 'one-third', 'half', 'two-thirds'].indexOf(value) !== -1
        );
      },
    },
  },
};
</script>
