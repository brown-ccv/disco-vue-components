import { render } from '@testing-library/vue';
import DIcon from '@/components/d-icon.vue';
import '@testing-library/jest-dom';

const name = 'instagram';
const family = 'brown';

test('has icon class', () => {
  const { getByRole } = render(DIcon, {
    props: { name, family },
  });
  expect(getByRole('img', { hidden: true })).toHaveClass('icon');
});

test('renders default height and width', () => {
  const { getByRole } = render(DIcon, {
    props: { name, family },
  });
  expect(getByRole('img', { hidden: true })).toHaveAttribute('width', '24');
  expect(getByRole('img', { hidden: true })).toHaveAttribute('height', '24');
});

test('renders height and width when props are passed', () => {
  const width = '50';
  const height = '50';
  const { getByRole } = render(DIcon, {
    props: { name, family, width, height },
  });
  expect(getByRole('img', { hidden: true })).toHaveAttribute('width', '50');
  expect(getByRole('img', { hidden: true })).toHaveAttribute('height', '50');
});
