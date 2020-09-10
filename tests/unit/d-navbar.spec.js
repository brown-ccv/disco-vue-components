import { render } from '@testing-library/vue';
import DNavbar from '@/components/d-navbar.vue';
import '@testing-library/jest-dom';

test('renders and has navbar class', () => {
  const { getByRole } = render(DNavbar);
  expect(getByRole('navigation')).toHaveClass('navbar');
});

test('has navbar-start ul', () => {
  const { getByTestId } = render(DNavbar);
  expect(getByTestId('navbar-start')).toHaveClass('navbar-start');
});

test('has navbar-end ul', () => {
  const { getByTestId } = render(DNavbar);
  expect(getByTestId('navbar-end')).toHaveClass('navbar-end');
});

test('renders correct variant when props.variant is passed', () => {
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

  let variantsHTML;
  variants.map((variant) => {
    const { getAllByRole } = render(DNavbar, {
      props: { variant },
    });
    variantsHTML = getAllByRole('navigation');
  });
  variantsHTML.map(function (variantHTML, i) {
    expect(variantHTML).toHaveClass(`has-background-${variants[i]}`);
  });
});
