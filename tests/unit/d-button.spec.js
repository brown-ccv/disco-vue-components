import { render } from '@testing-library/vue';
import DButton from '@/components/d-button.vue';
import '@testing-library/jest-dom';

test('has d-button class', () => {
  const name = 'Button';
  const { getByTestId } = render(DButton, {
    props: { name }
  });
  expect(getByTestId('button')).toHaveClass('d-button');
});

test('renders props.name when passed', () => {
  const name = 'Button';
  const { getByText } = render(DButton, {
    props: { name }
  });
  expect(getByText(name.toUpperCase())).not.toBe(null);
});

test('renders correct type when props.type is not passed', () => {
  const name = 'button';
  const type = 'button';
  const { getByTestId } = render(DButton, {
    props: { name, type }
  });
  expect(getByTestId('button')).toHaveAttribute('type', 'button');
});

test('renders correct type when props.type is not passed', () => {
  const name = 'button';
  const type = 'submit';
  const { getByTestId } = render(DButton, {
    props: { name, type }
  });
  expect(getByTestId('button')).toHaveAttribute('type', 'submit');
});

test('renders correct size when props.size is passed', () => {
  const name = 'button';
  const sizes = ['small', 'normal', 'medium', 'large'];
  var sizesHTML;
  sizes.map(size => {
    const { getAllByTestId } = render(DButton, {
      props: { name, size }
    });
    sizesHTML = getAllByTestId('button');
  });
  sizesHTML.map(function(sizeHTML, i) {
    expect(sizeHTML).toHaveClass(`is-${sizes[i]}`);
  });
});

test('renders correct variant when props.variant is passed', () => {
  const name = 'button';
  const variants = [
    'primary',
    'success',
    'danger',
    'warning',
    'info',
    'link',
    'dark',
    'light'
  ];
  var variantsHTML;
  variants.map(variant => {
    const { getAllByTestId } = render(DButton, {
      props: { name, variant }
    });
    variantsHTML = getAllByTestId('button');
  });
  variantsHTML.map(function(variantHTML, i) {
    expect(variantHTML).toHaveClass(`is-${variants[i]}`);
  });
});

test('renders correct light text color when dark props.variant is passed', () => {
  const name = 'button';
  const darkVariants = ['danger', 'link', 'dark'];
  var darkVariantsHTML;
  darkVariants.map(variant => {
    const { getAllByTestId } = render(DButton, {
      props: { name, variant }
    });
    darkVariantsHTML = getAllByTestId('button');
  });
  darkVariantsHTML.map(function(darkVariantHTML) {
    expect(darkVariantHTML).toHaveClass('has-text-light');
  });
});

test('renders correct dark text color when light props.variant is passed', () => {
  const name = 'button';
  const lightVariants = ['primary', 'success', 'warning', 'info', 'light'];
  var lightVariantsHTML;
  lightVariants.map(variant => {
    const { getAllByTestId } = render(DButton, {
      props: { name, variant }
    });
    lightVariantsHTML = getAllByTestId('button');
  });
  lightVariantsHTML.map(function(lightVariantHTML) {
    expect(lightVariantHTML).toHaveClass('has-text-dark');
  });
});

test('renders correct text color when props.variant and props.outlined is passed', () => {
  const name = 'button';
  const outlined = true;
  const variants = [
    'primary',
    'success',
    'danger',
    'warning',
    'info',
    'link',
    'dark',
    'light'
  ];
  var variantsHTML;
  variants.map(variant => {
    const { getAllByTestId } = render(DButton, {
      props: { name, variant, outlined }
    });
    variantsHTML = getAllByTestId('button');
  });
  variantsHTML.map(function(variantHTML, i) {
    expect(variantHTML).toHaveClass(`has-text-${variants[i]}`);
    expect(variantHTML).toHaveClass('is-outlined');
  });
});
