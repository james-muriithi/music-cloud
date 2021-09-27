<template>
  <div class="progress-bar" :style="styleProps"></div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    height: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    styleProps() {
      return {
        "--height": `${this.height}px`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.theme--dark .progress-bar{
    background: rgba(255, 255, 255, 0.2);
    height: var(--height);
    width: 100%;
    &::before{
        content: '';
        width: 50%;
        position: absolute;
        left: 0;
        
        background: #f1f1f1;
    }
}
</style>