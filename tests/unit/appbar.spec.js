import { shallowMount } from "@vue/test-utils";
import AppBar from "@/components/UI/AppBar.vue";
import VueRouter from "vue-router";

describe("AppBar.vue", () => {
  it("renders", () => {
    const router = new VueRouter();
    const wrapper = shallowMount(AppBar, {
      router
    });

    expect(wrapper.exists()).toBe(true);
  });
});
