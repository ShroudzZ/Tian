<template>
  <transition name="grow">
    <button
      class="floating-button"
      v-if="!!selected"
      :class="{'floating-button-editing':!!editing}"
      :style="{background:gradientColor}"
      @click="toggleEditing"
    ></button>
  </transition>
</template>

<script>
import { mapState, mapGetters, mapMUtations, mapMutations } from "vuex";
export default {
  name: "FloatingButton",
  computed: {
    ...mapState(["selected", "editing"]),
    ...mapGetters(["currentTodo"]),
    gradientColor() {
      const colorBottom = `${this.currentTodo.colors[0]} 30%`;
      const colorTop = `${this.currentTodo.colors[1]}`;
      return `linear-gradient(10deg,${colorBottom},${colorTop})`;
    }
  },
  methods: {
    ...mapMutations(["toggleEditing"])
  }
};
</script>

<style lang="less">
.floating-button{
  position: fixed;
  right: 44px;
  bottom: 64px;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  border-radius: 100%;
  width: 44px;
  height: 44px;
  color:#fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
  transition: all .5s ease;
  will-change: all;

  &::before,&::after{
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display:block;
    width: 20px;
    height: 2px;
    background-color:#fff;
    transform:translate(-50%,-50%);
  }

   &::after{
      transform:translate(-50%,-50%) rotate(90deg);
    }
}
.floating-button-editing{
  right: 0;
  bottom: 0;
  width: 100%;
  border-radius: 0;
}

.grow-leave-to,.grow-enter{
  transform: scale3d(0);
}
.grow-enter-to,.grow-leave{
  transform:scale(1);
}
.grow-enter-active{
  transition: all .2s .3s ease;
}
.grow-leave-active{
  transition: all .3 ease;
}
</style>