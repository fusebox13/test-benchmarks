import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('Mount', () => {
  let memoryBefore;
  let memoryAfter;
  let wrapper;
  const msg = 'new message';

  before(() => {
    window.gc();
    memoryBefore = window.performance.memory.usedJSHeapSize;
  });
  beforeEach(() => {
    wrapper = mount(HelloWorld, {
      propsData: { msg },
    });
  });
  for (let i = 0; i < 50000; i += 1) {
    it('renders props.msg when passed', () => {
      expect(wrapper.text()).to.include(msg);
    });
  }

  after(() => {
    memoryAfter = window.performance.memory.usedJSHeapSize;
    console.log('Before:', memoryBefore, 'After:', memoryAfter, 'Delta:', memoryAfter - memoryBefore);
  });
});
