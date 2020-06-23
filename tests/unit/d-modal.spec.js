import { shallowMount } from '@vue/test-utils';
import DModal from '@/components/d-modal.vue';

describe('d-modal.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'Modal title';
    const wrapper = shallowMount(DModal, {
      propsData: { title }
    });
    expect(wrapper.find('.modal-card-title').text()).toMatch(title);
  });

  it('renders props.content when passed', () => {
    const title = 'Modal title';
    const expected = 'Component:  Modal   Info:  Triggered by button';
    const content = {
      Component: 'Modal',
      Info: 'Triggered by button'
    };
    const wrapper = shallowMount(DModal, {
      propsData: { title, content }
    });
    expect(wrapper.find('.modal-card-body').text()).toMatch(expected);
  });

  it('renders footer when props.footer set to true', () => {
    const title = 'Modal title';
    const footer = true;
    const wrapper = shallowMount(DModal, {
      propsData: { title, footer }
    });
    expect(wrapper.find('.modal-card-foot').exists()).toEqual(true);
  });

  it('check for delete button clickable', () => {
    const title = 'Modal title';
    const wrapper = shallowMount(DModal, {
      propsData: { title }
    });
    wrapper.setMethods({ onClose: jest.fn() });
    wrapper.find('.delete').trigger('click');
    expect(wrapper.vm.onClose).toHaveBeenCalledTimes(1);
  });

  it('check for delete button clickable', () => {
    const title = 'Modal title';
    const wrapper = shallowMount(DModal, {
      propsData: { title }
    });
    wrapper.setMethods({ onClose: jest.fn() });
    wrapper.find('.delete').trigger('click');
    expect(wrapper.vm.onClose).toHaveBeenCalledTimes(1);
  });

  it('check for links in content rendering as a tag with href', () => {
    const title = 'Lab Info';
    const content = { website: 'www.example.com' };
    const wrapper = shallowMount(DModal, {
      propsData: { title, content }
    });
    const results = wrapper.find('#url').attributes('href');
    expect(results).toMatch(content.website);
  });
});
