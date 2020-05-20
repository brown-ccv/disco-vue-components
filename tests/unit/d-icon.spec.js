import { shallowMount } from '@vue/test-utils';
import DIcon from '@/components/d-icon.vue';

describe('d-icon.vue', () => {
  it('has icon class', () => {
    const name = 'instagram';
    const wrapper = shallowMount(DIcon, {
      propsData: { name }
    });
    expect(wrapper.classes()).toContain('icon-wrapper');
    expect(wrapper.find('.icon')).toBeTruthy();
  });

  it('renders default height and width', () => {
    const name = 'instagram';
    const wrapper = shallowMount(DIcon, {
      propsData: { name }
    });
    expect(wrapper.find('svg').attributes().height).toBe('24');
    expect(wrapper.find('svg').attributes().width).toBe('24');
  });

  it('renders height and width when props are passed', () => {
    const name = 'instagram';
    const height = '50';
    const width = '50';
    const wrapper = shallowMount(DIcon, {
      propsData: { name, height, width }
    });
    expect(wrapper.find('svg').attributes().height).toBe('50');
    expect(wrapper.find('svg').attributes().width).toBe('50');
  });
});
