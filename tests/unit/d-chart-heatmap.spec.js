import { render, waitFor } from '@testing-library/vue';
import DHeatMap from '@/components/d-chart-heatmap.vue';
import '@testing-library/jest-dom';
import ResizeObserver from '../__mocks__/ResizeObserver'; // eslint-disable-line no-unused-vars

let props = {
  id: 'heatmap',
  variable: 'temp',
  minWidth: 400,
  height: 300,
  x: 'month',
  y: 'station',
  xLabel: 'Month',
  yLabel: 'Buoy ID',
  dataset: [
    { month: 1, station: 'A', temp: 2, depth: 3 },
    { month: 1, station: 'B', temp: 3, depth: 3.5 },
    { month: 1, station: 'C', temp: 1.5, depth: 3.2 },
    { month: 2, station: 'A', temp: 4, depth: 3.1 },
    { month: 2, station: 'B', temp: 2.5, depth: 3.7 },
    { month: 2, station: 'C', temp: 3, depth: 3.4 },
    { month: 3, station: 'A', temp: 1, depth: 3.4 },
    { month: 3, station: 'B', temp: 2, depth: 3.2 },
    { month: 3, station: 'C', temp: 2.3, depth: 3.9 },
  ],
};

test('has id passed in props', () => {
  const { container } = render(DHeatMap, { props });
  const main = container.firstElementChild;
  expect(main).toHaveAttribute('id', expect.stringContaining(props.id));
});

test('has vizualization rendered', async () => {
  const { container, queryByText } = render(DHeatMap, { props });
  const main = container.firstElementChild;
  await waitFor(() => expect(main).not.toBeEmptyDOMElement());

  // spot check props are passing through
  expect(queryByText(props.xLabel)).toBeInTheDocument();
  expect(queryByText(props.yLabel)).toBeInTheDocument();

  // actions are there
  expect(main).toHaveClass('has-actions');
});

test('can not include actions', async () => {
  const { container } = render(DHeatMap, {
    props: {
      ...props,
      includeActions: false,
    },
  });
  const main = container.firstElementChild;
  await waitFor(() => expect(main).not.toBeEmptyDOMElement());

  expect(main).not.toHaveClass('has-actions');
});

test('can override spec', async () => {
  const { container, queryByText } = render(DHeatMap, {
    props: {
      ...props,
      specOverride: { axes: [{ title: 'Something else' }] },
    },
  });
  const main = container.firstElementChild;
  await waitFor(() => expect(main).not.toBeEmptyDOMElement());

  expect(queryByText('Something else')).toBeInTheDocument();
  expect(queryByText(props.xLabel)).not.toBeInTheDocument();
});
