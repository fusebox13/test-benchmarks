import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('Sync Mount Helper', () => {
  let wrapper;
  const msg = 'new message';

  function mountComponent() {
    const msg = 'new message';
    const subject = mount(HelloWorld, {
      propsData: { msg },
    });
    return subject;
  }
  beforeEach(() => {
    wrapper = mountComponent();
  });
  for (let i = 0; i < 50000; i += 1) {
    it('renders props.msg when passed', () => {
      expect(wrapper.text()).to.include(msg);
    });
  }
});
