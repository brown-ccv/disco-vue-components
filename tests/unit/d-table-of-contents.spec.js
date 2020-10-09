import { render } from '@testing-library/vue';
import DTOC from '@/components/d-table-of-contents.vue';
import '@testing-library/jest-dom';

const data = [
  {
    name: 'Mission',
    icon: { family: 'brown', name: 'chatbox-line' },
    link: '#',
  },
  { name: 'People', icon: { family: 'brown', name: 'person-lines' } },
  { name: 'Oppurtunities', icon: { family: 'brown', name: 'lightbulb-1' } },
  { name: 'How to Cite CCV', icon: { family: 'brown', name: 'carrot-right' } },
];

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

test('has d-toc-container class', () => {
  const { getByRole } = render(DTOC, {
    props: { data },
  });
  expect(getByRole('navigation')).toHaveClass('d-toc-container');
});

test('renders correct variant when props.variant is passed', () => {
  var variantsHTML;
  variants.map((variant) => {
    const { getAllByRole } = render(DTOC, {
      props: { data, variant },
    });
    variantsHTML = getAllByRole('navigation');
  });
  variantsHTML.map(function (variantHTML, i) {
    expect(variantHTML).toHaveClass(`has-background-${variants[i]}`);
  });
});

test('has d-toc-container class', () => {
  const { getAllByTestId } = render(DTOC, {
    props: { data },
  });
  expect(getAllByTestId('toc-item').length).toBe(data.length);
});
