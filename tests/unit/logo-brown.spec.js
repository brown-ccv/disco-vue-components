import { render } from '@testing-library/vue';
import BrownLogo from '@/components/logos/BrownLogo.vue';
import '@testing-library/jest-dom';

test('has brown-logo class', () => {
  const { getByRole } = render(BrownLogo);
  expect(getByRole('img', { hidden: true })).toHaveClass('brown-logo');
});

test('has default size class', () => {
  const { getByRole } = render(BrownLogo);
  expect(getByRole('img', { hidden: true })).toHaveClass('l');
});

test('renders correct size when props.size is passed', () => {
  const sizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];
  var sizesHTML;
  sizes.map((size) => {
    const { getAllByRole } = render(BrownLogo, {
      props: { size },
    });
    sizesHTML = getAllByRole('img', { hidden: true });
  });
  sizesHTML.map(function (sizeHTML, i) {
    expect(sizeHTML).toHaveClass(`${sizes[i]}`);
  });
});
