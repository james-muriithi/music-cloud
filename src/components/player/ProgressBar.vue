<template>
  <div class="progress-bar" :style="styleProps">
    <div class="bar"></div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    height: {
      type: Number,
      default: 1,
    },
    percent: {
        type: Number,
        default: 0
    }
  },
  computed: {
    styleProps() {
      return {
        "--height": `${this.height}px`,
        "--bar-width": `${this.percent}%`
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.progress-bar .bar{
    width: var(--bar-width);
}
.theme--dark .progress-bar {
  background: rgba(255, 255, 255, 0.2);
  height: var(--height);
  width: 100%;
  .bar {
    height: 100%;
    background: #f1f1f1;
  }
}

.theme--light .progress-bar {
  background: rgba(255, 255, 255, 0.2);
  height: var(--height);
  width: 100%;
  .bar {
    height: 100%;
    background: var(--v-primary-base);
  }
}
</style>