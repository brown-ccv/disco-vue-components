import { shallowMount } from '@vue/test-utils';
import CCVLogo from '@/components/logos/CCVLogo.vue';

describe('CCVLogo.vue', () => {
  const wrapper = shallowMount(CCVLogo);

  it('has brown-logo class', () => {
    expect(wrapper.find('.ccv-logo')).toBeTruthy();
  });

  it('has default size class', () => {
    expect(wrapper.find('.l')).toBeTruthy();
  });

  const sizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];
  sizes.map(size => {
    const wrapper = shallowMount(CCVLogo, {
      propsData: { size }
    });
    expect(wrapper.find(`.${size}`)).toBeTruthy();
  });
});
