import { render, screen, fireEvent } from '@testing-library/vue';
import DExpandable from '@/components/d-expandable.vue';
import '@testing-library/jest-dom';

const title = 'Expandable';
const variants = [
  'primary',
  'success',
  'danger',
  'warning',
  'info',
  'link',
  'dark',
  'light',
];

test('has d-expandable class', () => {
  const { getByLabelText } = render(DExpandable, {
    props: { title },
  });
  expect(getByLabelText('expandable')).toHaveClass('d-expandable');
});

test('has d-expandable class', () => {
  const { getByRole } = render(DExpandable, {
    props: { title },
  });
  expect(getByRole('button')).toHaveClass('d-expandable-header');
});

test('renders correct title when props.title is passed', () => {
  const { getByRole } = render(DExpandable, {
    props: { title },
  });
  expect(getByRole('heading')).toHaveTextContent(title);
});

test('renders correct icon when props.isExpanded is passed as true', () => {
  const isExpanded = true;
  const { getByLabelText } = render(DExpandable, {
    props: { title, isExpanded },
  });
  expect(getByLabelText('hide')).not.toBe(null);
});

test('renders correct border color when props.variant is passed', () => {
  var variantsHTML;
  variants.map((variant) => {
    const { getAllByTestId } = render(DExpandable, {
      props: { title, variant },
    });
    variantsHTML = getAllByTestId('content');
  });
  variantsHTML.map(function (variantHTML, i) {
    expect(variantHTML).toHaveClass(`has-border-left-${variants[i]}`);
  });
});

test('renders correct icon when props.isExpanded is passed as true', () => {
  const isExpanded = true;
  const { getByLabelText } = render(DExpandable, {
    props: { title, isExpanded },
  });
  expect(getByLabelText('hide')).not.toBe(null);
});

test('renders correct text color when props.variant and isHovered is passed', () => {
  const isHovered = true;
  var variantsHTML;
  variants.map((variant) => {
    const { getAllByRole } = render(DExpandable, {
      props: { title, variant, isHovered },
    });
    variantsHTML = getAllByRole('button');
  });
  variantsHTML.map(function (variantHTML, i) {
    expect(variantHTML).toHaveClass(`has-text-${variants[i]}`);
  });
});

test('renders correct text color when props.variant and isExpanded is passed', () => {
  const isExpanded = true;
  var variantsHTML;
  variants.map((variant) => {
    const { getAllByRole } = render(DExpandable, {
      props: { title, variant, isExpanded },
    });
    variantsHTML = getAllByRole('button');
  });
  variantsHTML.map(function (variantHTML, i) {
    expect(variantHTML).toHaveClass(`has-text-${variants[i]}`);
  });
});

test('has focus when focused or hovered', async () => {
  const { getByRole } = render(DExpandable, {
    props: { title },
  });

  expect(getByRole('button')).not.toHaveAttribute('aria-pressed');
  expect(getByRole('button')).not.toHaveClass('is-active');
  expect(getByRole('button')).not.toHaveClass('is-focused');
  await fireEvent.click(screen.getByRole('button'));
  await fireEvent.mouseOver(screen.getByRole('button'));
  expect(getByRole('button')).toHaveClass('is-focused');
  await fireEvent.mouseOut(screen.getByRole('button'));
  expect(getByRole('button')).not.toHaveClass('is-focused');
  await fireEvent.focus(screen.getByRole('button'));
  expect(getByRole('button')).toHaveClass('is-focused');
  await fireEvent.blur(screen.getByRole('button'));
  expect(getByRole('button')).not.toHaveClass('is-focused');
});
