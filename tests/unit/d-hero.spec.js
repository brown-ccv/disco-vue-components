import { render } from '@testing-library/vue';
import DHero from '@/components/d-hero.vue';
import '@testing-library/jest-dom';

test('has d-hero class', () => {
  const title = 'Hero Title';
  const subtitle = 'Subtitle';

  const { getByRole } = render(DHero, {
    props: { title, subtitle }
  });
  expect(getByRole('banner')).toHaveClass('d-hero');
});

test('renders d-title and d-subtitle classes', () => {
  const title = 'Hero Title';
  const subtitle = 'Subtitle';

  const { getAllByRole } = render(DHero, {
    props: { title, subtitle }
  });
  expect(getAllByRole('heading')[0]).toHaveClass('d-title');
  expect(getAllByRole('heading')[1]).toHaveClass('d-subtitle');
});

test('renders correct title and subtitle when props.title and subtile are passed', () => {
  const title = 'Hero Title';
  const subtitle = 'Subtitle';

  const { getAllByRole } = render(DHero, {
    props: { title, subtitle }
  });
  expect(getAllByRole('heading')[0]).toHaveTextContent(title);
  expect(getAllByRole('heading')[1]).toHaveTextContent(subtitle);
});

test('renders correct variant when props.variant is passed', () => {
  const title = 'Hero Title';
  const subtitle = 'Subtitle';
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
    const { getAllByRole } = render(DHero, {
      props: { title, subtitle, variant }
    });
    variantsHTML = getAllByRole('banner');
  });
  variantsHTML.map(function(variantHTML, i) {
    expect(variantHTML).toHaveClass(`is-${variants[i]}`);
  });
});

test('renders full height when props.fullHight is passed', () => {
  const title = 'Hero Title';
  const subtitle = 'Subtitle';
  const fullHeight = true;

  const { getByRole } = render(DHero, {
    props: { title, subtitle, fullHeight }
  });
  expect(getByRole('banner')).toHaveClass('is-full-height');
});
