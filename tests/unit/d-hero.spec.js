import { shallowMount } from '@vue/test-utils';
import DHero from '@/components/d-hero.vue';

describe('d-button.vue', () => {
  it('has d-button class', () => {
    const title = 'Hero Title';
    const subtitle = 'Subtitle';
    const wrapper = shallowMount(DHero, {
      propsData: { title, subtitle }
    });
    expect(wrapper.classes()).toContain('d-hero');
  });

  it('renders correct title and subtitle when props.title and subtile are passed', () => {
    const title = 'Hero Title';
    const subtitle = 'Subtitle';
    const wrapper = shallowMount(DHero, {
      propsData: { title, subtitle }
    });
    expect(wrapper.find('.d-title').text()).toMatch(title);
    expect(wrapper.find('.d-subtitle').text()).toMatch(subtitle);
  });

  it('renders correct variant when props.variant is passed', () => {
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
    variants.map(variant => {
      const wrapper = shallowMount(DHero, {
        propsData: { title, subtitle, variant }
      });
      expect(wrapper.classes()).toContain(`is-${variant}`);
    });
  });

  it('renders full height when props.fullHight is passed', () => {
    const title = 'Hero Title';
    const subtitle = 'Subtitle';
    const fullHeight = true;
    const wrapper = shallowMount(DHero, {
      propsData: { title, subtitle, fullHeight }
    });
    expect(wrapper.classes()).toContain('is-full-height');
  });
});
