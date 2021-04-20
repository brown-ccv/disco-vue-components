<script>
import vegaBaseMixin from '@/mixins/vega-base-mixin.js';
export default {
  mixins: [vegaBaseMixin],
  props: {
    variable: {
      type: String,
      required: true,
    },
    variableLabel: {
      type: String,
      required: true,
    },
    x: {
      type: String,
      required: true,
    },
    xLabel: {
      type: String,
      required: true,
    },
    y: {
      type: String,
      required: true,
    },
    yLabel: {
      type: String,
      required: true,
    },
  },
  computed: {
    baseSpec() {
      return {
        $schema: 'https://vega.github.io/schema/vega/v5.json',
        description:
          'A basic stacked bar chart, with value labels shown upon mouse hover.',
        height: this.height,
        padding: 5,
        data: [
          {
            name: 'data',
            values: this.dataset,
            transform: [
              {
                type: 'stack',
                groupby: [this.x],
                sort: { field: this.variable },
                as: ['y0', 'y1'],
                field: this.y,
              },
            ],
          },
        ],

        scales: [
          {
            name: 'xscale',
            type: 'band',
            range: 'width',
            domain: { data: 'data', field: this.x },
          },
          {
            name: 'yscale',
            type: 'linear',
            range: 'height',
            nice: true,
            zero: true,
            domain: { data: 'data', field: 'y1' },
          },
          {
            name: 'color',
            type: 'ordinal',
            range: { scheme: 'tableau20' },
            domain: { data: 'data', field: this.variable },
          },
        ],
        axes: [
          { orient: 'bottom', scale: 'xscale', zindex: 1 },
          { orient: 'left', scale: 'yscale', zindex: 1 },
        ],
        marks: [
          {
            type: 'rect',
            from: { data: 'data' },
            encode: {
              enter: {
                x: { scale: 'xscale', field: this.x },
                width: { scale: 'xscale', band: 1, offset: -1 },
                y: { scale: 'yscale', field: 'y0' },
                y2: { scale: 'yscale', field: 'y1' },
                fill: { scale: 'color', field: this.variable },
                tooltip: {
                  signal: `{'${this.xLabel}': datum.${this.x}, '${this.yLabel}': datum.${this.y}, '${this.variableLabel}': datum.${this.variable}}`,
                },
              },
              update: {
                fillOpacity: { value: 1 },
              },
              hover: {
                fillOpacity: { value: 0.25 },
              },
            },
          },
        ],
      };
    },
  },
};
</script>
