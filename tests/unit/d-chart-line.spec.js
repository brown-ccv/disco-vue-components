import { render, waitFor } from '@testing-library/vue';
import DLineChart from '@/components/d-chart-line.vue';
import '@testing-library/jest-dom';
import ResizeObserver from '../__mocks__/ResizeObserver'; // eslint-disable-line no-unused-vars

let props = {
  id: 'line',
  minWidth: 400,
  height: 300,
  x: 'month',
  y: 'temp',
  xLabel: 'Month',
  yLabel: 'Temperature (C)',
  dataset: [
    { month: 1, temp: 2, depth: 3 },
    { month: 2, temp: 4, depth: 3.1 },
    { month: 3, temp: 1, depth: 3.4 },
  ],
};

test('has id passed in props', async () => {
  const { container } = render(DLineChart, { props });
  const main = container.firstElementChild;
  await waitFor(() =>
    expect(main).toHaveAttribute('id', expect.stringContaining(props.id))
  );
});

test('has vizualization rendered', async () => {
  const { container, queryByText } = render(DLineChart, { props });
  const main = container.firstElementChild;
  await waitFor(() => expect(main).not.toBeEmptyDOMElement());

  // spot check props are passing through
  expect(queryByText(props.xLabel)).toBeInTheDocument();
  expect(queryByText(props.yLabel)).toBeInTheDocument();

  // actions are there
  expect(main).toHaveClass('has-actions');
});

test('can not include actions', async () => {
  const { container } = render(DLineChart, {
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
  const { container, queryByText } = render(DLineChart, {
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
