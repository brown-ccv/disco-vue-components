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
          'A basic line chart example, with value labels shown upon mouse hover.',
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
            type: 'linear',
            domain: { data: 'data', field: this.x },
            range: 'width',
            round: true,
            zero: false,
          },
          {
            name: 'yscale',
            type: 'linear',
            domain: { data: 'data', field: this.y },
            nice: true,
            zero: false,
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
            type: 'line',
            from: { data: 'data' },
            encode: {
              enter: {
                x: { scale: 'xscale', field: this.x },
                y: { scale: 'yscale', field: this.y },
                strokeCap: { value: 'round' },
                tooltip: {
                  signal: `{ '${this.xLabel}': datum.${this.x}, '${this.yLabel}': datum.${this.y} }`,
                },
              },
              update: {
                interpolate: 'linear',
                defined: { signal: `isValid(datum.${this.y})` },
              },
            },
          },
        ],
      };
    },
  },
};
</script>
