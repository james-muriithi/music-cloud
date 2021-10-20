import { mount } from "@vue/test-utils";
import ThemeToggle from "@/components/UI/ThemeToggle.vue";
import Vuetify from "vuetify";

describe("ThemeToggle.vue", () => {
  let wrapper;
  beforeEach(() => {
    const vuetify = new Vuetify();
    wrapper = mount(ThemeToggle, {
      vuetify,
    });
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("checks if theme toggle method works", () => {
    const wasDark = wrapper.vm.isDark;
    wrapper.vm.darkMode();
    expect(wrapper.vm.isDark).toBe(!wasDark);
  });

  it("checks if toggle button exists", () => {
    expect(wrapper.find(".v-btn").exists()).toBe(true);
  });

  it("checks if toggle button click toggles the theme", () => {
    const button = wrapper.find(".v-btn");
    const wasDark = wrapper.vm.isDark;

    button.trigger("click");

    expect(wrapper.vm.isDark).toBe(!wasDark);
  });
});
