<template>
  <v-text-field
    dense
    single-line
    prepend-inner-icon="mdi-magnify"
    outlined
    clearable
    v-model.lazy="keyword"
    ref="search"
  ></v-text-field>
</template>

<script>
import { debounce } from "../../helpers";
export default {
  name: "SearchInput",
  data() {
    return {
      keyword: this.$route.query.q || "",
      debouncedKeyword: this.$route.query.q || "",
    };
  },
  watch: {
    keyword: debounce(function (newVal) {
      this.debouncedKeyword = newVal;
    }, 1000),
    debouncedKeyword(newValue) {
      this.$store.dispatch("search/setKeyword", { keyword: newValue });
      this.$store.dispatch("search/search");
    },
  },
  mounted() {
    const self = this;
    this.$nextTick(() => {
      const search = self.$refs.search;
      setTimeout(() => {
        search.$refs.input.focus();
      }, 0);
    });
  },
};
</script>