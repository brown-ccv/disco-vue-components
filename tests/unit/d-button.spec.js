import { shallowMount } from '@vue/test-utils';
import DButton from '@/components/d-button.vue';

describe('d-button.vue', () => {
  it('has d-button class', () => {
    const name = 'button';
    const wrapper = shallowMount(DButton, {
      propsData: { name }
    });
    expect(wrapper.classes()).toContain('d-button');
  });

  it('renders props.name when passed', () => {
    const name = 'button';
    const wrapper = shallowMount(DButton, {
      propsData: { name }
    });
    expect(wrapper.text()).toMatch(name.toUpperCase());
  });

  it('renders correct type when props.type is not passed', () => {
    const name = 'button';
    const type = 'button';
    const wrapper = shallowMount(DButton, {
      propsData: { name, type }
    });
    expect(wrapper.attributes().type).toBe(type);
  });

  it('renders correct type when props.type is passed', () => {
    const name = 'button';
    const type = 'submit';
    const wrapper = shallowMount(DButton, {
      propsData: { name, type }
    });
    expect(wrapper.attributes().type).toBe(type);
  });

  it('renders correct size when props.size is passed', () => {
    const name = 'button';
    const sizes = ['small', 'normal', 'medium', 'large'];
    sizes.map(size => {
      const wrapper = shallowMount(DButton, {
        propsData: { name, size }
      });
      expect(wrapper.classes()).toContain(`is-${size}`);
    });
  });

  it('renders correct variant when props.variant is passed', () => {
    const name = 'button';
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
      const wrapper = shallowMount(DButton, {
        propsData: { name, variant }
      });
      expect(wrapper.classes()).toContain(`is-${variant}`);
    });
  });

  it('renders correct text color when props.variant is passed', () => {
    const name = 'button';
    const darkVariants = ['danger', 'link', 'dark'];
    darkVariants.map(variant => {
      const wrapper = shallowMount(DButton, {
        propsData: { name, variant }
      });
      expect(wrapper.classes()).toContain('has-text-light');
    });

    const lightVariants = ['primary', 'success', 'warning', 'info', 'light'];
    lightVariants.map(variant => {
      const wrapper = shallowMount(DButton, {
        propsData: { name, variant }
      });
      expect(wrapper.classes()).toContain('has-text-dark');
    });
  });

  it('renders correct text color when props.variant and props.outlined is passed', () => {
    const name = 'button';
    const outlined = true;
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
      const wrapper = shallowMount(DButton, {
        propsData: { name, variant, outlined }
      });
      expect(wrapper.classes()).toContain('is-outlined');
      expect(wrapper.classes()).toContain(`has-text-${variant}`);
    });
  });

  it('can be clicked', () => {
    const name = 'button';
    const type = 'button';
    const wrapper = shallowMount(DButton, {
      propsData: { name, type }
    });
    wrapper.trigger('click');
  });
});
