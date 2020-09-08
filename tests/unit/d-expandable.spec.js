import { render } from '@testing-library/vue';
import DExpandable from '@/components/d-expandable.vue';
import '@testing-library/jest-dom';

test('has d-expandable class', () => {
  const title = 'Expandable';
  const { getByTestId } = render(DExpandable, {
    props: { title },
  });
  expect(getByTestId('expandable')).toHaveClass('d-expandable');
});

test('has d-expandable class', () => {
  const title = 'Expandable';
  const { getByRole } = render(DExpandable, {
    props: { title },
  });
  expect(getByRole('button')).toHaveClass('d-expandable-header');
});

test('renders correct title when props.title is passed', () => {
  const title = 'Expandable';
  const { getByRole } = render(DExpandable, {
    props: { title },
  });
  expect(getByRole('heading')).toHaveTextContent(title);
});

test('renders correct icon when props.isExpanded is passed as true', () => {
  const title = 'Expandable';
  const isExpanded = true;
  const { getByLabelText } = render(DExpandable, {
    props: { title, isExpanded },
  });
  expect(getByLabelText('hide')).not.toBe(null);
});

test('renders correct border color when props.variant is passed', () => {
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
  const title = 'Expandable';
  const isExpanded = true;
  const { getByLabelText } = render(DExpandable, {
    props: { title, isExpanded },
  });
  expect(getByLabelText('hide')).not.toBe(null);
});

test('renders correct text color when props.variant and isHovered is passed', () => {
  const title = 'Expandable';
  const isHovered = true;
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
  const title = 'Expandable';
  const isExpanded = true;
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
