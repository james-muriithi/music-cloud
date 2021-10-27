import { shallowMount } from "@vue/test-utils";
import AppBar from "@/components/UI/AppBar.vue";
import router from '@/router'

describe("AppBar.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AppBar, {
      router,
    });
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
