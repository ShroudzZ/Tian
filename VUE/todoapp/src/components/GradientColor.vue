<template>
  <div
    class="gradient-color"
    :class="{gradient_color__active:active}"
    :style="{backgroundImage:gradientColor}"
  >

  </div>
</template>

<script>
export default {
  name: "GradientColor",
  props: {
    colors: {
      type: Array
    },
    active: {
      type: Boolean
    }
  },
  computed: {
    gradientColor() {
      const colorBottom = `${this.colors[0]} 30%`;
      const colorTop = `${this.colors[1]}`;
      return  `linear-gradient(10deg,${colorBottom},${colorTop})`;
    }
  }
};
</script>
<style lang="less">
.gradient-color {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
}
.gradient_color__active {
  opacity: 1;
}
</style>