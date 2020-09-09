import { render } from '@testing-library/vue';
import DCard from '@/components/d-card.vue';
import '@testing-library/jest-dom';

// Behavior Driven Tests

test('has d-card class', () => {
  const title = 'Card Title';
  const { getByTestId } = render(DCard, {
    props: { title },
  });
  expect(getByTestId('card')).toHaveClass('d-card');
});

test('renders correct title when props.title is passed', () => {
  const title = 'Card Title';
  const { getByRole } = render(DCard, {
    props: { title },
  });
  expect(getByRole('heading')).toHaveTextContent(title);
});

test('renders all borders color when props.border is set true', () => {
  const title = 'Card Title';
  const accents = [
    'primary',
    'success',
    'danger',
    'warning',
    'info',
    'link',
    'dark',
    'light',
  ];
  const border = true;
  var accentsHTML;
  accents.map((accent) => {
    const { getAllByTestId } = render(DCard, {
      props: { title, accent, border },
    });
    accentsHTML = getAllByTestId('card');
  });
  accentsHTML.map(function (accentHTML, i) {
    expect(accentHTML).toHaveClass(`has-border-${accents[i]}`);
  });
});

test('renders only top border color when props.border is set false', () => {
  const title = 'Card Title';
  const accents = [
    'primary',
    'success',
    'danger',
    'warning',
    'info',
    'link',
    'dark',
    'light',
  ];
  const border = false;
  var accentsHTML;
  accents.map((accent) => {
    const { getAllByTestId } = render(DCard, {
      props: { title, accent, border },
    });
    accentsHTML = getAllByTestId('card');
  });
  accentsHTML.map(function (accentHTML, i) {
    expect(accentHTML).toHaveClass(`has-border-top-${accents[i]}`);
  });
});

test('renders correct width when props.width is passed', () => {
  const title = 'Card Title';
  const widths = ['small', 'medium', 'large'];
  var widthsHTML;
  widths.map((width) => {
    const { getAllByTestId } = render(DCard, {
      props: { title, width },
    });
    widthsHTML = getAllByTestId('card');
  });
  widthsHTML.map(function (widthHTML, i) {
    expect(widthHTML).toHaveClass(`is-width-${widths[i]}`);
  });
});

test('renders correct background variant for card when props.variant is passed', () => {
  const title = 'Card Title';
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
    const { getAllByTestId } = render(DCard, {
      props: { title, variant },
    });
    variantsHTML = getAllByTestId('card');
  });
  variantsHTML.map(function (variantHTML, i) {
    expect(variantHTML).toHaveClass(`has-background-${variants[i]}`);
  });
});

test('renders correct light text color when dark props.variant is passed', () => {
  const title = 'Card Title';
  const darkVariants = ['danger', 'link', 'dark'];
  var darkVariantsHTML;
  darkVariants.map((variant) => {
    const { getAllByTestId } = render(DCard, {
      props: { title, variant },
    });
    darkVariantsHTML = getAllByTestId('card');
  });
  darkVariantsHTML.map(function (darkVariantHTML) {
    expect(darkVariantHTML).toHaveClass('has-text-light');
  });
});

test('renders correct dark text color when light props.variant is passed', () => {
  const title = 'Card Title';
  const lightVariants = ['primary', 'success', 'warning', 'info', 'light'];
  var lightVariantsHTML;
  lightVariants.map((variant) => {
    const { getAllByTestId } = render(DCard, {
      props: { title, variant },
    });
    lightVariantsHTML = getAllByTestId('card');
  });
  lightVariantsHTML.map(function (lightVariantHTML) {
    expect(lightVariantHTML).toHaveClass('has-text-dark');
  });
});
