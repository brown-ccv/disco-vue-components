import { render } from '@testing-library/vue';
import CCVLogo from '@/components/logos/CCVLogo.vue';
import '@testing-library/jest-dom';

test('has ccv-logo class', () => {
  const { getByRole } = render(CCVLogo);
  expect(getByRole('img', { hidden: true })).toHaveClass('ccv-logo');
});

test('has default size class', () => {
  const { getByRole } = render(CCVLogo);
  expect(getByRole('img', { hidden: true })).toHaveClass('l');
});

test('renders correct size when props.size is passed', () => {
  const sizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];
  var sizesHTML;
  sizes.map(size => {
    const { getAllByRole } = render(CCVLogo, {
      props: { size }
    });
    sizesHTML = getAllByRole('img', { hidden: true });
  });
  sizesHTML.map(function(sizeHTML, i) {
    expect(sizeHTML).toHaveClass(`${sizes[i]}`);
  });
});
