import { expect } from 'chai';
import { mount, createLocalVue } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('Done Local Vue', () => {
  let memoryBefore;
  let memoryAfter;
  let wrapper;
  const localVue = createLocalVue();
  const msg = 'new message';

  before(() => {
    window.gc();
    memoryBefore = window.performance.memory.usedJSHeapSize;
  });
  beforeEach((done) => {
    wrapper = mount(HelloWorld, {
      propsData: { msg },
    });
    localVue.nextTick(done);
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
