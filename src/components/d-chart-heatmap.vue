<script>
import vegaBaseMixin from '@/mixins/vega-base-mixin.js';

export default {
  mixins: [vegaBaseMixin],
  props: {
    variable: {
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
        height: this.height,
        data: {
          name: 'data',
          values: this.dataset,
        },
        scales: [
          {
            name: 'x',
            type: 'band',
            domain: { data: 'data', field: this.x },
            range: 'width',
          },
          {
            name: 'y',
            type: 'band',
            domain: { data: 'data', field: this.y },
            range: 'height',
          },
          {
            name: 'color',
            type: 'linear',
            range: { scheme: 'tealblues' },
            domain: { data: 'data', field: this.variable },
            reverse: false,
            zero: false,
            nice: true,
          },
        ],
        axes: [
          {
            orient: 'bottom',
            scale: 'x',
            domain: false,
            title: this.xLabel,
            labelOverlap: 'parity',
          },
          {
            orient: 'left',
            scale: 'y',
            domain: false,
            title: this.yLabel,
          },
        ],
        legends: [
          {
            title: this.variable,
            fill: 'color',
            type: 'gradient',
            gradientLength: { signal: 'height' },
          },
        ],
        marks: [
          {
            type: 'rect',
            from: { data: 'data' },
            encode: {
              enter: {
                x: { scale: 'x', field: this.x },
                y: { scale: 'y', field: this.y },
                width: { scale: 'x', band: 1 },
                height: { scale: 'y', band: 1 },
                tooltip: {
                  signal: `{'${this.xLabel}': datum.${this.x}, '${this.yLabel}': datum.${this.y}, 'Count': datum.${this.variable}}`,
                },
              },
              update: {
                fill: { scale: 'color', field: this.variable },
              },
            },
          },
        ],
      };
    },
  },
};
</script>
