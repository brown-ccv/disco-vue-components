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
          'A basic line chart example, with value labels shown upon mouse hover.',
        height: this.height,
        padding: 5,

        signals: [
          {
            name: 'selected',
            value: null,
            on: [
              {
                events: '@legendSymbol:click, @legendLabel:click',
                update: 'selected === datum.value ? null : datum.value',
                force: true,
              },
              {
                events: 'mouseup[!event.item]',
                update: 'null',
                force: true,
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
          {
            name: 'color',
            type: 'ordinal',
            range: { scheme: 'tableau20' },
            domain: { data: 'data', field: this.variable },
          },
        ],
        axes: [
          { orient: 'bottom', scale: 'xscale', title: this.xLabel },
          { orient: 'left', scale: 'yscale', title: this.yLabel },
        ],
        legends: [
          {
            title: this.variableLabel,
            fill: 'color',
            orient: 'bottom-right',
            encode: {
              symbols: {
                name: 'legendSymbol',
                interactive: true,
                update: {
                  strokeWidth: { value: 2 },
                  opacity: [
                    {
                      test: '!selected || selected === datum.value',
                      value: 1,
                    },
                    { value: 0.15 },
                  ],
                  size: { value: 64 },
                },
                hover: {
                  cursor: { value: 'pointer' },
                },
              },
              labels: {
                name: 'legendLabel',
                interactive: true,
                update: {
                  opacity: [
                    {
                      test: '!selected || selected === datum.value',
                      value: 1,
                    },
                    { value: 0.25 },
                  ],
                  fontWeight: { value: 'normal' },
                },
                hover: {
                  fontWeight: { value: 'bold' },
                  cursor: { value: 'pointer' },
                },
              },
            },
          },
        ],
        marks: [
          {
            type: 'group',
            from: {
              facet: {
                name: 'series',
                data: 'data',
                groupby: this.variable,
              },
            },
            marks: [
              {
                type: 'line',
                from: { data: 'series' },
                encode: {
                  enter: {
                    x: { scale: 'xscale', field: this.x },
                    y: { scale: 'yscale', field: this.y },
                    stroke: { scale: 'color', field: this.variable },
                    strokeCap: { value: 'round' },
                    tooltip: {
                      signal: `{ '${this.variableLabel}': datum.${this.variable}, '${this.xLabel}': datum.${this.x}, '${this.yLabel}': datum.${this.y} }`,
                    },
                  },
                  update: {
                    interpolate: 'linear',
                    defined: { signal: `isValid(datum.${this.y})` },
                    strokeOpacity: [
                      {
                        test: `!selected || selected === datum.${this.variable}`,
                        value: 0.7,
                      },
                      { value: 0.15 },
                    ],
                  },
                  hover: {
                    strokeOpacity: { value: 1.0 },
                  },
                },
              },
            ],
          },
        ],
      };
    },
  },
};
</script>
