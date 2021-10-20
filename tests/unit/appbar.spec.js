import { shallowMount } from "@vue/test-utils";
import AppBar from "@/components/UI/AppBar.vue";

const $route = {
  name: "home",
};

describe("AppBar.vue", () => {
  it("renders", () => {
    const wrapper = shallowMount(AppBar, {
      mocks: {
        $route,
      },
    });

    expect(wrapper.exists()).toBe(true);
  });
});
