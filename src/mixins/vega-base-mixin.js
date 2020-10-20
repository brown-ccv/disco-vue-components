import embed from 'vega-embed';
import * as _ from 'lodash';

const vegaBaseMixin = {
  template: '<div :id="fullId"></div>',
  props: {
    id: {
      type: String,
      required: true,
    },
    dataset: {
      type: Array,
      required: true,
    },
    minWidth: {
      type: Number,
      required: false,
      default: 200,
    },
    includeActions: {
      type: Boolean,
      required: false,
      default: true,
    },
    height: {
      type: Number,
      required: false,
      default: 300,
    },
    specOverride: {
      type: Object,
      required: false,
      default: function () {
        return {};
      },
    },
  },
  computed: {
    actionsWidth() {
      return this.includeActions ? 28 : 0;
    },
    fullId() {
      return this.id + Math.floor(Math.random() * Math.floor(1000));
    },
    spec() {
      return _.merge({}, this.baseSpec, this.specOverride);
    },
  },
  watch: {
    spec() {
      this.updatePlot();
    },
    includeActions() {
      this.updatePlot();
    },
  },
  data() {
    return {
      view: null,
      resizeObserver: null,
      parentElement: null,
    };
  },
  mounted() {
    console.log(this.fullId);
    const el = document.querySelector('#' + this.fullId);
    this.parentElement = el.closest('.chart');

    this.updatePlot();

    this.$nextTick(() => {
      this.resizeObserver = new ResizeObserver(this.resizePlot);
      this.resizeObserver.observe(this.parentElement);
    });
  },
  beforeDestory() {
    if (this.view) {
      this.view.finalize();
      this.resizeObserver.unobserve(this.parentElement);
    }
  },
  methods: {
    getWidth() {
      return (
        Math.max(this.minWidth, this.parentElement.clientWidth) -
        this.actionsWidth
      );
    },
    updatePlot() {
      if (this.view) {
        this.view.finalize();
      }
      embed('#' + this.fullId, this.spec, {
        actions: this.includeActions,
        theme: 'vox',
        renderer: 'svg',
        config: {
          width: this.getWidth(),
          autosize: 'fit',
        },
        logLevel: 3,
      }).then((res) => {
        this.view = res.view;
      });
    },
    resizePlot() {
      if (this.view) {
        this.view.width(this.getWidth()).resize().runAsync();
      }
    },
  },
};

export default vegaBaseMixin;
