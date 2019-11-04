import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('No Cleanup', () => {
  let wrapper;
  const msg = 'new message';
  beforeEach(() => {
    wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
  });
  for (let i = 0; i < 50000; i += 1) {
    it('renders props.msg when passed', () => {
      expect(wrapper.text()).to.include(msg);
    });
  }
});
