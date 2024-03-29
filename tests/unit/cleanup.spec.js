import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('Cleanup', () => {
  let wrapper;
  const msg = 'new message';
  beforeEach(() => {
    wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
  });
  afterEach(() => {
    wrapper.destroy();
    wrapper = null;
  });
  for (let i = 0; i < 50000; i += 1) {
    it(`Test #${i}`, () => {
      expect(wrapper.text()).to.include(msg);
    });
  }
});
