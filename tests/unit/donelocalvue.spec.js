import { expect } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('Done Local Vue', () => {
  let wrapper;
  const localVue = createLocalVue();
  const msg = 'new message';
  beforeEach((done) => {
    wrapper = mount(HelloWorld, {
      propsData: { msg },
    });
    localVue.nextTick(done);
  });
  for (let i = 0; i < 50000; i += 1) {
    it(`Test #${i}`, () => {
      expect(wrapper.text()).to.include(msg);
    });
  }
});
