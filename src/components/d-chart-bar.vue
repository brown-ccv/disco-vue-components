<script>
import vegaBaseMixin from '@/mixins/vega-base-mixin.js';

export default {
  mixins: [vegaBaseMixin],
  props: {
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
          'A basic bar chart example, with value labels shown upon mouse hover.',
        height: this.height,
        padding: 5,
        data: [
          {
            name: 'data',
            values: this.dataset,
          },
        ],
        scales: [
          {
            name: 'xscale',
            type: 'band',
            domain: { data: 'data', field: this.x },
            range: 'width',
            round: true,
            zero: false,
          },
          {
            name: 'yscale',
            domain: { data: 'data', field: this.y },
            nice: true,
            zero: true,
            range: 'height',
          },
        ],
        axes: [
          {
            orient: 'bottom',
            scale: 'xscale',
            title: this.xLabel,
          },
          { orient: 'left', scale: 'yscale', title: this.yLabel },
        ],
        marks: [
          {
            type: 'rect',
            from: { data: 'data' },
            encode: {
              enter: {
                x: { scale: 'xscale', field: this.x },
                width: { scale: 'xscale', band: 1 },
                y: { scale: 'yscale', field: this.y },
                y2: { scale: 'yscale', value: 0 },
                tooltip: {
                  signal: `{'${this.xLabel}': datum.${this.x}, '${this.yLabel}': datum.${this.y}}`,
                },
              },
              update: {
                fill: { value: 'steelblue' },
                opacity: { value: 1 },
              },
              hover: {
                opacity: { value: 0.5 },
              },
            },
          },
        ],
      };
    },
  },
};
</script>
