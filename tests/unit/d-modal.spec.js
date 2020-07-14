import { render, fireEvent } from '@testing-library/vue';
import DModal from '@/components/d-modal.vue';
import '@testing-library/jest-dom';

// Behavior Driven Tests

test('has dialog role and d-modal class', () => {
  const { getByRole } = render(DModal);
  // getByRole('dialog');
  expect(getByRole('dialog')).toHaveClass('d-modal');
});

test('renders correct background variant for modal card when props.variant is passed', () => {
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
    const { getAllByTestId } = render(DModal, {
      props: { variant }
    });
    variantsHTML = getAllByTestId('modal-card');
  });
  variantsHTML.map(function(variantHTML, i) {
    expect(variantHTML).toHaveClass(`has-background-${variants[i]}`);
  });
});

test('renders correct background variant for modal content when props.variant is passed', () => {
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
    const { getAllByTestId } = render(DModal, {
      props: { variant }
    });
    variantsHTML = getAllByTestId('modal-content');
  });
  variantsHTML.map(function(variantHTML, i) {
    expect(variantHTML).toHaveClass(`has-background-${variants[i]}`);
  });
});

test('renders correct width when props.width is passed', () => {
  const widths = ['small', 'medium', 'large'];
  var widthsHTML;
  widths.map(width => {
    const { getAllByTestId } = render(DModal, {
      props: { width }
    });
    widthsHTML = getAllByTestId('modal-card');
  });
  widthsHTML.map(function(widthHTML, i) {
    expect(widthHTML).toHaveClass(`is-width-${widths[i]}`);
  });
});

test('renders close button in header when props.closeOptions is header', () => {
  const closeOptions = 'header';
  const { queryByTestId } = render(DModal, { props: { closeOptions } });
  expect(queryByTestId('modal-header')).not.toBe(null);
  expect(queryByTestId('modal-footer')).toBe(null);
});

test('renders close button in footer when props.closeOptions is footer', () => {
  const closeOptions = 'footer';
  const { queryByTestId } = render(DModal, { props: { closeOptions } });
  expect(queryByTestId('modal-header')).toBe(null);
  expect(queryByTestId('modal-footer')).not.toBe(null);
});

test('renders close button in header and footer when props.closeOptions is both', () => {
  const closeOptions = 'both';
  const { queryByTestId } = render(DModal, { props: { closeOptions } });
  expect(queryByTestId('modal-header')).not.toBe(null);
  expect(queryByTestId('modal-footer')).not.toBe(null);
});

test('renders close button text correctly when props.closeButtonText is passed', () => {
  const closeButtonText = 'Close';
  const closeOptions = 'footer';
  const { getByText } = render(DModal, {
    props: { closeButtonText, closeOptions }
  });
  getByText(closeButtonText.toUpperCase());
});

test('test for click event on close button', async () => {
  const closeButtonText = 'Close';
  const closeOptions = 'footer';
  const { getByLabelText, getByRole } = render(DModal, {
    props: { closeButtonText, closeOptions }
  });
  const button = getByLabelText('close');
  await fireEvent.click(button);
  console.log(getByRole('dialog'));
});

// test('test for click event on close button on the header', async () => {
//   const closeOptions = 'header';
//   const { container } = render(DModal, {
//     props: { closeOptions }
//   });
//   const button = container.querySelector('.delete');
//   await fireEvent.click(button);
// });
