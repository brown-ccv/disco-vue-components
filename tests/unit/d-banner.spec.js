import { render } from '@testing-library/vue';
import DBanner from '@/components/d-banner.vue';
import '@testing-library/jest-dom';

const text = 'Banner Text';
// const badgeText = 'Badge Text';
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

test('has d-banner class', () => {
  const { getByRole } = render(DBanner, {
    props: { text },
  });
  expect(getByRole('banner')).toHaveClass('d-banner');
});

test('renders correct variant when props.variant is passed', () => {
  var variantsHTML;
  variants.map((variant) => {
    const { getAllByRole } = render(DBanner, {
      props: { text, variant },
    });
    variantsHTML = getAllByRole('banner');
  });
  variantsHTML.map(function (variantHTML, i) {
    expect(variantHTML).toHaveClass(`has-background-${variants[i]}`);
  });
});

test('renders correct text when prop.text is passed', () => {
  const { getByTestId } = render(DBanner, {
    props: { text },
  });
  expect(getByTestId('text')).toHaveTextContent(text);
});
