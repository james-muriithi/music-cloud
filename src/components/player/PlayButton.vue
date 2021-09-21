<template>
  <v-btn icon class="pause-btn">
    <v-icon>mdi-pause</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "PlayButton",
};
</script>

<style lang="scss" scoped>
button {
  margin-right: 8px;
  height: 34px;
  width: 34px;
}
.pause-btn {
  transition: all 0.3s;
  i {
    font-size: 22px;
  }
  &.theme--dark {
    background: #fff;
    color: #181818;
  }
  &.theme--light {
    background: #181818;
    color: #fff;
  }
}
</style>