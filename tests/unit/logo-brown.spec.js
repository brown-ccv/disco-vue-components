import { shallowMount } from '@vue/test-utils';
import BrownLogo from '@/components/logos/BrownLogo.vue';

describe('BrownLogo.vue', () => {
  const wrapper = shallowMount(BrownLogo);

  it('has brown-logo class', () => {
    expect(wrapper.find('.brown-logo')).toBeTruthy();
  });

  it('has default size class', () => {
    expect(wrapper.find('.l')).toBeTruthy();
  });

  const sizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];
  sizes.map(size => {
    const wrapper = shallowMount(BrownLogo, {
      propsData: { size }
    });
    expect(wrapper.find(`.${size}`)).toBeTruthy();
  });
});
