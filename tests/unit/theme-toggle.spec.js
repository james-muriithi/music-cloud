import { shallowMount } from "@vue/test-utils";
import ThemeToggle from "@/components/UI/ThemeToggle.vue";

const $vuetify = {
  theme: {
    dark: true,
  },
};

describe("ThemeToggle.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(ThemeToggle, {
      mocks: {
        $vuetify,
      },
    });
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

});
