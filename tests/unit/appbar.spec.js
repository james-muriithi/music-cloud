import { shallowMount } from "@vue/test-utils";
import AppBar from "@/components/UI/AppBar.vue";
import VueRouter from "vue-router";
import router from '@/router'

describe("AppBar.vue", () => {
  let wrapper;

  beforeEach(() => {
    // const router = new VueRouter();
    wrapper = shallowMount(AppBar, {
      router,
    });
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
