import { render, screen, fireEvent } from '@testing-library/vue';
import DModal from '@/components/d-modal.vue';
import '@testing-library/jest-dom';

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
const widths = ['small', 'medium', 'large'];

// Behavior Driven Tests

test('has dialog role and d-modal class', () => {
  const { getByRole } = render(DModal);
  expect(getByRole('dialog', { hidden: true })).toHaveClass('d-dialog');
});

test('renders correct background variant for modal card when props.variant is passed', () => {
  var variantsHTML;
  variants.map((variant) => {
    const { getAllByTestId } = render(DModal, {
      props: { variant },
    });
    variantsHTML = getAllByTestId('modal-card');
  });
  variantsHTML.map(function (variantHTML, i) {
    expect(variantHTML).toHaveClass(`has-background-${variants[i]}`);
  });
});

test('renders correct background variant for modal content when props.variant is passed', () => {
  var variantsHTML;
  variants.map((variant) => {
    const { getAllByTestId } = render(DModal, {
      props: { variant },
    });
    variantsHTML = getAllByTestId('modal-content');
  });
  variantsHTML.map(function (variantHTML, i) {
    expect(variantHTML).toHaveClass(`has-background-${variants[i]}`);
  });
});

test('renders correct top border color when props.accent is passed', () => {
  var accentsHTML;
  variants.map((accent) => {
    const { getAllByTestId } = render(DModal, {
      props: { title, accent },
    });
    accentsHTML = getAllByTestId('modal-card');
  });
  accentsHTML.map(function (accentHTML, i) {
    expect(accentHTML).toHaveClass(`has-border-top-${variants[i]}`);
  });
});

test('renders correct width when props.width is passed', () => {
  var widthsHTML;
  widths.map((width) => {
    const { getAllByTestId } = render(DModal, {
      props: { width },
    });
    widthsHTML = getAllByTestId('modal-card');
  });
  widthsHTML.map(function (widthHTML, i) {
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
    props: { closeButtonText, closeOptions },
  });
  expect(getByText(closeButtonText.toUpperCase())).toHaveTextContent(
    closeButtonText.toUpperCase()
  );
});

test('close modal when clicked', async () => {
  const closeButtonText = 'Close';
  const closeOptions = 'footer';
  const { getByRole } = render(DModal, {
    props: { closeButtonText, closeOptions },
  });

  expect(getByRole('dialog', { hidden: true })).toHaveClass('is-active');
  await fireEvent.click(screen.getByText(closeButtonText.toUpperCase()));
  expect(getByRole('dialog', { hidden: true })).not.toHaveClass('is-active');
});
