import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import Vue from 'vue';

describe('Done Vue', () => {
  let wrapper;
  const msg = 'new message';
  beforeEach((done) => {
    wrapper = mount(HelloWorld, {
      propsData: { msg },
    });
    Vue.nextTick(done);
  });
  for (let i = 0; i < 50000; i += 1) {
    it(`Test #${i}`, () => {
      expect(wrapper.text()).to.include(msg);
    });
  }
});
