<template>
  <div class="d-toc">
    <table :name="name" class="d-toc">
      <tbody>
        <tr v-for="(entry, index) in data" :key="index">
          <td>
            <d-icon :name="entry.icon"></d-icon>
          </td>
          <td>
            <h1>{{ entry['name'] }}</h1>
          </td>
          <td>
            <h1>{{ index + 1 }}</h1>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DIcon from '@/components/d-icon.vue';
console.log('here');
export default {
  components: {
    'd-icon': DIcon
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    name: {
      type: String
    }
  },
  computed: {
    textColor() {
      let color =
        ['danger', 'dark', 'link'].indexOf(this.variant) !== -1
          ? 'has-text-light'
          : 'has-text-dark';
      if (this.outlined) {
        color = `has-text-${this.variant}`;
      }
      return color;
    }
  },
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
};
</script>
