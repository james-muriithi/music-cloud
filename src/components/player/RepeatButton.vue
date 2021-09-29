<template>
  <v-btn icon @click="toggleRepeat" :title="icon.title">
    <v-icon>{{ icon.class }}</v-icon>
  </v-btn>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "RepeatButton",
  computed: {
    ...mapGetters("player", ["repeat"]),
    icon() {
      if (this.repeat == 0) {
        return { class: "mdi-repeat-off", title: "Repeat Off" };
      } else if (this.repeat == 1) {
        return { class: "mdi-repeat-once", title: "Repeat One" };
      }

      return { class: "mdi-repeat-variant", title: "Repeat All" };
    },
  },
  methods: {
    ...mapActions("player", ["toggleRepeat"]),
  },
};
</script>

<style lang="scss" scoped>
button {
  margin-right: 8px;
  height: 34px;
  width: 34px;
  i.v-icon {
    font-size: 22px !important;
  }
}
</style>