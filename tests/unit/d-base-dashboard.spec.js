import { render } from '@testing-library/vue';
import DBaseDashboard from '@/components/d-base-dashboard.vue';
import '@testing-library/jest-dom';

test('has dashboard-nav class', () => {
  const { container } = render(DBaseDashboard);
  const main = container.firstElementChild;
  const nav = main.children[0];
  expect(nav).toHaveClass('dashboard-nav');
});

test('has dashboard-header class', () => {
  const { container } = render(DBaseDashboard);
  const main = container.firstElementChild;
  const header = main.children[1];
  expect(header).toHaveClass('dashboard-header');
});

test('has dashboard-section class', () => {
  const { container } = render(DBaseDashboard);
  const main = container.firstElementChild;
  const section = main.children[2];
  expect(section).toHaveClass('dashboard-section');
});
