<template>
  <main>
    <nav class="main-nav">
      <slot name="main-nav"></slot>
    </nav>
    <header class="main-header">
      <slot name="main-header"></slot>
    </header>
    <section class="main-section">
      <slot name="main-section"></slot>
    </section>
  </main>
</template>

<style lang="scss">
@import 'bulma';
.main-header {
  grid-area: main-header;
  border-bottom: 1px solid #a4b1bf;
  @extend .px-4;
  @extend .py-4;
}
.main-nav {
  grid-area: main-nav;
  border-bottom: 1px solid #a4b1bf;
  @extend .px-4;
  @extend .py-4;
}
.main-section {
  grid-area: main-section;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  @extend .px-4;
  @extend .py-4;
  z-index: 20;
}
</style>
