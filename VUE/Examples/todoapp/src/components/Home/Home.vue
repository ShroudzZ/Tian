<template>
  <div class="home">
    <AppBar
      title="TODO"
      left="bars"
      right="search"
    />
    <Avatar />
    <Gradient />
    <TodoList />
    <TodoDetail />
    <TodoEditing />
    <FloatingButton />
  </div>

</template>

<script>
import AppBar from "../AppBar";
import Avatar from "../Avatar";
import Gradient from "../Gradient";
import TodoList from "../Todolist";
import TodoDetail from "../TodoDetail";
import TodoEditing from "../TodoEditing";
import FloatingButton from "../FloatingButton";
export default {
  name: "Home",
  components: {
    AppBar,
    Avatar,
    Gradient,
    TodoList,
    TodoDetail,
    TodoEditing,
    FloatingButton
  },
  data() {
    return {};
  }
};
</script>

<style lang="less">
.home {
  height: 100%;
  width: 100%;
  overflow: hidden;
  color: white;
  // background-color: #1d2a36;
  background-image: linear-gradient(
    90deg,
    color-stop(30%, #ff6262),
    to(#ffa947)
  );
}
</style>