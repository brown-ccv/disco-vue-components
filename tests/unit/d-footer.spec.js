import { render } from '@testing-library/vue';
import DFooter from '@/components/d-footer.vue';
import '@testing-library/jest-dom';

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
  const { getByTestId } = render(DFooter);
  expect(getByTestId('footer')).toHaveClass('d-footer');
});

test('renders correct variant when props.variant is passed', () => {
  var variantsHTML;
  variants.map((variant) => {
    const { getAllByTestId } = render(DFooter, {
      props: { variant },
    });
    variantsHTML = getAllByTestId('footer');
  });
  variantsHTML.map(function (variantHTML, i) {
    expect(variantHTML).toHaveClass(`has-background-${variants[i]}`);
  });
});
