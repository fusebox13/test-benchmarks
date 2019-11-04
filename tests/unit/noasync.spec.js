import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('No Async', () => {
  let wrapper;
  const msg = 'new message';
  beforeEach(() => {
    wrapper = mount(HelloWorld, {
      propsData: { msg },
    });
  });
  for (let i = 0; i < 50000; i += 1) {
    it(`Test #${i}`, () => {
      expect(wrapper.text()).to.include(msg);
    });
  }
});
