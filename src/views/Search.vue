<template>
  <v-container class="search px-5">
    <v-row>
      <v-col cols="12" class="px-md-3 px-0">
          
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Search",
  data() {
    return {
      isLoading: false,
      keyword: ""
    };
  },
};
</script>

<style lang="scss" scoped>
.search {
  margin-bottom: 85px;
}
</style>