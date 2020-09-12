import { render, screen, fireEvent } from '@testing-library/vue';
import DPersonCard from '@/components/d-person-card.vue';
import '@testing-library/jest-dom';

// Behavior Driven Tests
const name = 'Jane Doe';
const title = 'Engineer';
const team = 'Engineering';
const mainImage = 'https://ccv.brown.edu/images/people/JPEG/fulcomer_main.jpg';
const hoverImage =
  'https://ccv.brown.edu/images/people/JPEG/fulcomer_hover.jpg';
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
const widths = ['small', 'medium', 'large'];

const defaultProps = { name, title, team, mainImage, hoverImage };

test('has d-card class', () => {
  const { getByTestId } = render(DPersonCard, {
    props: defaultProps,
  });
  expect(getByTestId('card')).toHaveClass('d-card');
  expect(getByTestId('card')).toHaveClass('d-person-card');
});

test('renders correct name when props.name is passed', () => {
  const { getByRole } = render(DPersonCard, {
    props: defaultProps,
  });
  expect(getByRole('heading')).toHaveTextContent(name);
});

test('renders correct title and team when props.{tile, team} are passed', () => {
  const { getByTestId } = render(DPersonCard, {
    props: defaultProps,
  });
  expect(getByTestId('title-team')).toHaveTextContent(title);
  expect(getByTestId('title-team')).toHaveTextContent(team);
});

test('renders all borders color when props.border is set true', () => {
  const border = true;
  var accentsHTML;
  variants.map((accent) => {
    const { getAllByTestId } = render(DPersonCard, {
      props: { ...defaultProps, accent, border },
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
    const { getAllByTestId } = render(DPersonCard, {
      props: { ...defaultProps, accent, border },
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
    const { getAllByTestId } = render(DPersonCard, {
      props: { ...defaultProps, width },
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
    const { getAllByTestId } = render(DPersonCard, {
      props: { ...defaultProps, variant },
    });
    variantsHTML = getAllByTestId('card');
  });
  variantsHTML.map(function (variantHTML, i) {
    expect(variantHTML).toHaveClass(`has-background-${variants[i]}`);
  });
});

test('renders correct light text color when dark props.variant is passed', () => {
  const darkVariants = ['danger', 'link', 'dark'];
  var darkVariantsHTML;
  darkVariants.map((variant) => {
    const { getAllByTestId } = render(DPersonCard, {
      props: { ...defaultProps, variant },
    });
    darkVariantsHTML = getAllByTestId('card');
  });
  darkVariantsHTML.map(function (darkVariantHTML) {
    expect(darkVariantHTML).toHaveClass('has-text-light');
  });
});

test('renders correct dark text color when light props.variant is passed', () => {
  const lightVariants = ['primary', 'success', 'warning', 'info', 'light'];
  var lightVariantsHTML;
  lightVariants.map((variant) => {
    const { getAllByTestId } = render(DPersonCard, {
      props: { ...defaultProps, variant },
    });
    lightVariantsHTML = getAllByTestId('card');
  });
  lightVariantsHTML.map(function (lightVariantHTML) {
    expect(lightVariantHTML).toHaveClass('has-text-dark');
  });
});

test('changes image on hover', async () => {
  const { getByTestId } = render(DPersonCard, {
    props: defaultProps,
  });
  expect(getByTestId('person-image')).toHaveAttribute('src', mainImage);
  await fireEvent.mouseOver(screen.getByTestId('person-image-figure'));
  expect(getByTestId('person-image')).toHaveAttribute('src', hoverImage);
  await fireEvent.mouseOut(screen.getByTestId('person-image-figure'));
  expect(getByTestId('person-image')).toHaveAttribute('src', mainImage);
});

test('changes image on focus/blur', async () => {
  const { getByTestId } = render(DPersonCard, {
    props: defaultProps,
  });
  expect(getByTestId('person-image')).toHaveAttribute('src', mainImage);
  await fireEvent.focus(screen.getByTestId('person-image-figure'));
  expect(getByTestId('person-image')).toHaveAttribute('src', hoverImage);
  await fireEvent.blur(screen.getByTestId('person-image-figure'));
  expect(getByTestId('person-image')).toHaveAttribute('src', mainImage);
});
