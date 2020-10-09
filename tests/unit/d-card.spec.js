import { render } from '@testing-library/vue';
import DCard from '@/components/d-card.vue';
import '@testing-library/jest-dom';

// Behavior Driven Tests

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
const darkVariants = ['danger', 'link', 'dark'];
const lightVariants = ['primary', 'success', 'warning', 'info', 'light'];
const widths = ['small', 'medium', 'large'];

test('has d-card class', () => {
  const { getByTestId } = render(DCard);
  expect(getByTestId('card')).toHaveClass('d-card');
});

test('renders all borders color when props.border is set true', () => {
  const border = true;
  var accentsHTML;
  variants.map((accent) => {
    const { getAllByTestId } = render(DCard, {
      props: { accent, border },
    });
    accentsHTML = getAllByTestId('card');
  });
  accentsHTML.map(function (accentHTML, i) {
    expect(accentHTML).toHaveClass(`has-border-${variants[i]}`);
  });
});

test('renders only top border color when props.border is set false', () => {
  const border = false;
  var accentsHTML;
  variants.map((accent) => {
    const { getAllByTestId } = render(DCard, {
      props: { accent, border },
    });
    accentsHTML = getAllByTestId('card');
  });
  accentsHTML.map(function (accentHTML, i) {
    expect(accentHTML).toHaveClass(`has-border-top-${variants[i]}`);
  });
});

test('renders correct width when props.width is passed', () => {
  var widthsHTML;
  widths.map((width) => {
    const { getAllByTestId } = render(DCard, {
      props: { width },
    });
    widthsHTML = getAllByTestId('card');
  });
  widthsHTML.map(function (widthHTML, i) {
    expect(widthHTML).toHaveClass(`is-width-${widths[i]}`);
  });
});

test('renders correct background variant for card when props.variant is passed', () => {
  var variantsHTML;
  variants.map((variant) => {
    const { getAllByTestId } = render(DCard, {
      props: { variant },
    });
    variantsHTML = getAllByTestId('card');
  });
  variantsHTML.map(function (variantHTML, i) {
    expect(variantHTML).toHaveClass(`has-background-${variants[i]}`);
  });
});

test('renders correct light text color when dark props.variant is passed', () => {
  var darkVariantsHTML;
  darkVariants.map((variant) => {
    const { getAllByTestId } = render(DCard, {
      props: { variant },
    });
    darkVariantsHTML = getAllByTestId('card');
  });
  darkVariantsHTML.map(function (darkVariantHTML) {
    expect(darkVariantHTML).toHaveClass('has-text-light');
  });
});

test('renders correct dark text color when light props.variant is passed', () => {
  var lightVariantsHTML;
  lightVariants.map((variant) => {
    const { getAllByTestId } = render(DCard, {
      props: { variant },
    });
    lightVariantsHTML = getAllByTestId('card');
  });
  lightVariantsHTML.map(function (lightVariantHTML) {
    expect(lightVariantHTML).toHaveClass('has-text-dark');
  });
});
