import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';


describe('Async Vue', () => {
  let wrapper;
  const msg = 'new message';
  beforeEach(async () => {
    wrapper = mount(HelloWorld, {
      propsData: { msg },
    });
    await Vue.nextTick();
  });
  for (let i = 0; i < 50000; i += 1) {
    it('renders props.msg when passed', () => {
      expect(wrapper.text()).to.include(msg);
    });
  }
});
