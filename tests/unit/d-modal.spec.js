import { render, fireEvent } from '@testing-library/vue';
import DModal from '@/components/d-modal.vue';

// Behavior Driven Tests

test('has d-modal class', () => {
  const { container } = render(DModal);
  expect(container.querySelector('.d-modal')).not.toBe(null);
});

test('renders correct background variant for modal header when props.variant is passed', () => {
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
  variants.map(variant => {
    const { container } = render(DModal, {
      props: { variant }
    });
    expect(
      container
        .querySelector('#header')
        ._prevClass.includes(`has-background-${variant}`)
    ).toBe(true);
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
  variants.map(variant => {
    const { container } = render(DModal, {
      props: { variant }
    });
    expect(
      container
        .querySelector('.modal-card-body')
        ._prevClass.includes(`has-background-${variant}`)
    ).toBe(true);
  });
});

test('renders correct background variant for modal footer when props.variant is passed', () => {
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
  variants.map(variant => {
    const { container } = render(DModal, {
      props: { variant }
    });
    expect(
      container
        .querySelector('#footer')
        ._prevClass.includes(`has-background-${variant}`)
    ).toBe(true);
  });
});

test('renders correct width when props.width is passed', () => {
  const widths = ['small', 'medium', 'large'];
  widths.map(width => {
    const { container } = render(DModal, {
      props: { width }
    });
    const element = container.querySelector('.modal-card');
    expect(element._prevClass.includes(`is-width-${width}`)).toBe(true);
  });
});

test('renders close button correctly when props.closeOptions is passed', () => {
  const closeOption = ['header', 'footer', 'both'];
  const closeButtonText = 'Close';
  closeOption.map(closeOptions => {
    const options = { props: { closeOptions, closeButtonText } };
    const { container } = render(DModal, options);
    if (closeOptions === 'header') {
      expect(container.querySelector('.delete')).not.toBe(null);
      expect(container.querySelector('#closebutton')).toBe(null);
    } else if (closeOptions === 'footer') {
      expect(container.querySelector('.delete')).toBe(null);
      expect(container.querySelector('#closebutton')).not.toBe(null);
    } else {
      expect(container.querySelector('.delete')).not.toBe(null);
      expect(container.querySelector('#closebutton')).not.toBe(null);
    }
  });
});

test('renders close button text correctly when props.closeButtonText is passed', () => {
  const closeButtonText = 'Close';
  const closeOptions = 'footer';
  const { container } = render(DModal, {
    props: { closeButtonText, closeOptions }
  });
  expect(container.querySelector('#closebutton').__vue__._props.name).toMatch(
    closeButtonText
  );
});

test('test for click event on close button', async () => {
  const closeButtonText = 'Close';
  const closeOptions = 'footer';
  const { container } = render(DModal, {
    props: { closeButtonText, closeOptions }
  });
  const button = container.querySelector('#closebutton');
  await fireEvent.click(button);
});

test('test for click event on close button on the header', async () => {
  const closeOptions = 'header';
  const { container } = render(DModal, {
    props: { closeOptions }
  });
  const button = container.querySelector('.delete');
  await fireEvent.click(button);
});
