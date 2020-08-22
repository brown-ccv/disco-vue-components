<template>
  <div class="d-toc-container">
    <ul :name="name" class="d-toc">
      <li v-for="(entry, index) in data" :key="index">
        <a :href="entry.link" class="toc-content">
          <d-icon class="toc-icon" :name="entry.icon"></d-icon>
          <span class="toc-start fs-20">
            {{ entry['name'] }}
          </span>
          <span class="toc-end fs-20">{{ index + 1 }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import DIcon from '@/components/d-icon.vue';
export default {
  components: {
    'd-icon': DIcon,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'bulma';
.d-toc-container {
  display: grid;
  justify-items: center;
}
.d-toc {
  width: 60vw;
}
.toc-content {
  display: grid;
  grid-template-columns: 1fr 10fr 10fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'icon start . end';
  padding: $size-5;
  &:hover {
    background-color: $light;
  }
}
.toc-start {
  grid-area: start;
}
.toc-end {
  grid-area: end;
}
.toc-icon {
  grid-area: icon;
}
</style>
