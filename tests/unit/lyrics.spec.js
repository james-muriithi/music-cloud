import LyricsDrawer from "@/components/UI/LyricsDrawer.vue";
import { mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import store from "@/store";
import Vue from "vue";

describe("LyricsDrawer.vue", () => {
  let wrapper;
  const vuetify = new Vuetify();

  it("renders", () => {
    wrapper = mount(LyricsDrawer, {
      vuetify,
      store,
    });

    expect(wrapper.exists()).toBe(true);
  });

  it("fetches lyrics", async () => {
    wrapper = mount(LyricsDrawer, {
      vuetify,
      store,
      computed: {
        showDrawer: {
          get() {
            return true;
          },
          set() {},
        },
        currentPlaying() {
          return {
            artist: "Adelle",
            title: "Hello",
          };
        },
      },
    });

    await wrapper.vm.fetchLyrics();

    Vue.nextTick();

    expect(wrapper.vm.lyrics).not.toBe(null);
  }, 30000);
});
