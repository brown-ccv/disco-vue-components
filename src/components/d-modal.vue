<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <button
          v-if="closeOptions == 'header' || closeOptions == 'both'"
          class="delete"
          aria-label="close"
          @click="onClose"
        ></button>
      </header>
      <section v-if="content" class="modal-card-body">
        <slot name="content"></slot>
      </section>
      <footer class="modal-card-foot">
        <button
          v-if="closeOptions == 'footer' || closeOptions == 'both'"
          class="button"
          @click="onClose"
        >
          {{ closeButtonText }}
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    closeButtonText: {
      type: String,
      required: false
    },
    closeOptions: {
      type: String,
      required: false,
      validator: function(value) {
        return ['header', 'footer', 'both'].indexOf(value) !== -1;
      }
    }
  },
  methods: {
    onClose() {
      this.$emit('close');
    },
    is_url(str) {
      var regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
      return regexp.test(str);
    }
  },
  filters: {
    camelToTitle: item => {
      return item
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase());
    }
  }
};
</script>
