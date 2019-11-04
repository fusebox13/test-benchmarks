import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('Sync Mount Helper', () => {
  let wrapper;
  async function mountComponent() {
    const msg = 'new message';
    const subject = mount(HelloWorld, {
      propsData: { msg },
    });
    return subject;
  }
  beforeEach(async () => {
    wrapper = await mountComponent();
  });
  for (let i = 0; i < 50000; i += 1) {
    it(`Test #${i}`, () => {
      expect(wrapper.text()).to.include(msg);
    });
  }
});
