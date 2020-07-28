<template>
  <div class="d-toc">
    <div class="box outer">
      <table :name="name" class="d-toc">
        <tbody>
          <tr v-for="(entry, index) in data" :key="index">
            <div class="box component">
              <td class="component-icon">
                <d-icon :name="entry.icon"></d-icon>
              </td>
              <td class="component-title fs-20">
                <strong>{{ entry['name'] }}</strong>
              </td>
              <td class="component-number fs-20" align="right">
                <h1>{{ index + 1 }}</h1>
              </td>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
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
  }
  // computed: {
  //   textColor() {
  //     let color =
  //       ['danger', 'dark', 'link'].indexOf(this.variant) !== -1
  //         ? 'has-text-light'
  //         : 'has-text-dark';
  //     if (this.outlined) {
  //       color = `has-text-${this.variant}`;
  //     }
  //     return color;
  //   }
  // },
  // methods: {
  //   onClick() {
  //     this.$emit('click');
  //   }
  // }
};
</script>

<style lang="scss" scoped>
.box {
  background-color: white !important;
  //width: 50%;
  display: inline-block;
}
.component {
  background-color: white !important;
  width: 100%;
  //box-shadow: initial;
}

div.box .component:hover {
  background-color: grey !important;
}

.component-title {
  width: 100%;
}

.component-number {
  text-align: right;
  color: grey;
}

.component-icon {
  padding-right: 10px;
}

.outer {
  flex: 0 0 50%;
  max-width: 100%;
  min-width: 50%;
}
.fs-20 {
  font-size: 1.25rem !important;
  line-height: 1.4em;
}
table {
  width: 100%;
}
</style>
