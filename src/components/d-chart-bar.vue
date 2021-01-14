<script>
import vegaBaseMixin from '@/mixins/vega-base-mixin.js';

export default {
  mixins: [vegaBaseMixin],
  props: {
    category: {
      type: String,
      required: true,
    },
    xLabel: {
      type: String,
      required: true,
    },
    amount: {
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
        signals: [
          {
            name: 'tooltip',
            value: null,
            on: [
              {
                events: 'rect:mouseover',
                update: 'datum',
              },
              {
                events: 'rect:mouseout',
                update: '{}',
              },
            ],
          },
        ],
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
            domain: { data: 'data', field: this.category },
            range: 'width',
            round: true,
            zero: false,
          },
          {
            name: 'yscale',
            domain: { data: 'data', field: this.amount },
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
      };
    },
  },
};
</script>
