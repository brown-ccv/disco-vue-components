export const COLOR_VARIANTS = [
  'primary',
  'success',
  'danger',
  'warning',
  'info',
  'link',
  'dark',
  'light'
];

export const variantValidator = variant => {
  return COLOR_VARIANTS.indexOf(variant) !== -1;
};
