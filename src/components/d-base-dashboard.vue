<template>
  <main>
    <nav class="dashboard-nav">
      <slot name="nav"></slot>
    </nav>
    <header class="dashboard-header">
      <slot name="header"></slot>
    </header>
    <section class="dashboard-section">
      <slot name="section"></slot>
    </section>
  </main>
</template>
