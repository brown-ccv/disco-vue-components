import { render } from '@testing-library/vue';
import DChartContainer from '@/components/d-chart-container.vue';
import '@testing-library/jest-dom';

const widths = ['full', 'two-thirds', 'half', 'one-third'];

test('has chart-container class', () => {
  const { container } = render(DChartContainer);
  const main = container.firstElementChild;
  expect(main).toHaveClass('chart-container');
});

test('has chart-header class', () => {
  const { container } = render(DChartContainer);
  const main = container.firstElementChild;
  const header = main.children[0];
  expect(header).toHaveClass('chart-header');
});

test('has chart class', () => {
  const { container } = render(DChartContainer);
  const main = container.firstElementChild;
  const section = main.children[1];
  expect(section).toHaveClass('chart');
});

test('renders correct width when props.width is passed', () => {
  widths.map((width) => {
    const { container } = render(DChartContainer, {
      props: { width },
    });
    expect(container.firstElementChild).toHaveClass(`is-${width}`);
  });
});
