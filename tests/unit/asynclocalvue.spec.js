import { expect } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('Async LocalVue', () => {
  let wrapper;
  const localVue = createLocalVue();
  const msg = 'new message';
  beforeEach(async () => {
    wrapper = mount(HelloWorld, {
      propsData: { msg },
    });
    await localVue.nextTick();
  });
  for (let i = 0; i < 50000; i += 1) {
    it(`Test #${i}`, () => {
      expect(wrapper.text()).to.include(msg);
    });
  }
});
