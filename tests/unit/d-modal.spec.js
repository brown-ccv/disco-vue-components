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
});
