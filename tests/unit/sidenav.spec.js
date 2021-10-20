import { mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import store from "@/store";

import SideNav from "@/components/UI/SideNav.vue";

const resizeScreenWidth = (width) => {
  window.innerWidth = width;
  window.dispatchEvent(new Event("resize"));
};

describe("SideNav.vue", () => {
  let wrapper;
  const vuetify = new Vuetify();
  const router = new VueRouter();

  beforeEach(() => {
    wrapper = mount(SideNav, {
      vuetify,
      store,
      router,
    });
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  resizeScreenWidth(600);
  it("hides sidenav on small screen", () => {
      expect(wrapper.vm.showDrawer).toBe(false);
  });
  
});
