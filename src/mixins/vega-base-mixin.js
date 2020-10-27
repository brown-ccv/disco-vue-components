import embed from 'vega-embed';
import * as _ from 'lodash';

//TODO: make background transparent by default
const vegaBaseMixin = {
  render(h) {
    return h('div', { attrs: { id: this.fullId } });
  },
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
    height: {
      type: Number,
      required: false,
      default: 300,
    },
    includeActions: {
      type: Boolean,
      required: false,
      default: true,
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
    const el = document.querySelector('#' + this.fullId);
    this.parentElement = el.parentElement;

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
      })
        .then((res) => {
          this.view = res.view;
        })
        .catch((err) => {
          console.log(err);
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
