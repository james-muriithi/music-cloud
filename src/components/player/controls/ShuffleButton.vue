<template>
    <v-btn icon @click="toggleShuffle" :title="icon.title">
        <v-icon>{{icon.class}}</v-icon>
      </v-btn>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ShuffleButton",
  computed: {
    ...mapGetters("player", ["shuffle"]),
    icon() {
      if (!this.shuffle) {
        return { class: "mdi-shuffle-variant", title: "Shuffle Off" };
      }

      return { class: "mdi-shuffle-disabled", title: "Shuffle On" };
    },
  },
  methods: {
    ...mapActions("player", ["toggleShuffle"]),
  },
};
</script>

<style lang="scss" scoped>
button {
  margin-right: 8px;
  height: 34px;
  width: 34px;
  i.v-icon {
    font-size: 19px !important;
  }
}
</style>