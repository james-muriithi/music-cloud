import FavouriteButton from "@/components/player/controls/FavouriteButton.vue";
import { mount } from "@vue/test-utils";
import Vuetify from "vuetify";

describe("FavouriteButton.vue", () => {
  let wrapper;
  const vuetify = new Vuetify();

  beforeEach(() => {
    wrapper = mount(FavouriteButton, {
      vuetify,
    });
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("emits favourite event", async () => {
    const button = wrapper.find(".v-btn");
    button.trigger("click");

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().favourite).toBeTruthy();
  });
});
