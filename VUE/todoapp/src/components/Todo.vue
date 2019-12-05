<template>
  <div
    class="todo"
    :class="{todo__selected:selected}"
  >
    <div
      class="todo-head"
      @click="handleClick"
    >
      <div
        class="todo-icon"
        :style="{color}"
      >
        <i :class="['fa',`fa-${todo.icon}`]"></i>
      </div>
      <div class="todo-menu">
        <i class="fa fa-ellipsis-v"></i>
      </div>
    </div>
    <div class="todo-body">
      <p class="todo-tips">{{todo.tasks.length}} Tasks</p>
      <h3 class="todo-title">{{todo.name}}</h3>
      <div class="todo-progress">
        <span class="todo-progress-line">
          <i :style="{width:progress,backgroundImage:progressColor}"></i>
        </span>
        <span class="todo-progress-num">{{progress}}</span>
      </div>
      <div class="todo-tasks">
        <h4
          class="todo-subtitle"
          v-if="todayTasks.length"
        >Today</h4>
        <ul>
          <li
            v-for="task in todayTasks"
            :key="task.id"
          >
            <task :task="task"></task>
          </li>
        </ul>
        <h4
          class="todo-subtitle"
          v-if="tomorrowTasks.length"
        >Today</h4>
        <ul>
          <li
            v-for="task in tomorrowTasks"
            :key="task.id"
          >
            <task :task="task"></task>
          </li>
        </ul>
        <h4
          class="todo-subtitle"
          v-if="outdatedTasks.length"
        >Today</h4>
        <ul>
          <li
            v-for="task in outdatedTasks"
            :key="task.id"
          >
            <task :task="task"></task>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Task from "./Task";
import { today, tomorrow } from "../shared";

export default {
  name: "Todo",
  props: {
    todo: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean
    }
  },
  components: {
    Task
  },
  computed: {
    color() {
      return this.todo.colors[0];
    },
    progress() {
      const totalCount = this.todo.tasks.filter(t => !t.deleted).length;
      const doneCount = this.todo.tasks.filter(t => !t.deleted && t.done)
        .length;
      return `${Math.round((doneCount / totalCount) * 100)}%`;
    },
    progressColor() {
      const colorBottom = `${this.todo.colors[0]} 30%`;
      const colorTop = `${this.todo.colors[1]}`;
      return `linear-gradient(90deg,${colorBottom},${colorTop})`;
    },
    todayTasks() {
      return this.todo.tasks.filter(task => {
        return task.date >= today && task.date < tomorrow;
      });
    },
    tomorrowTasks() {
      return this.todo.tasks.filter(task => {
        return task.date >= tomorrow;
      });
    },
    outdatedTasks() {
      return this.todo.tasks.filter(task => {
        return task.date < today;
      });
    }
  },
  methods: {
    handleClick() {
      const appRect = document.querySelector("#app").getBoundingClientRect();
      console.log(appRect);

      const elRect = this.$el.getBoundingClientRect();

      const todo = this.todo;
      const rect = {};
      rect.top = elRect.top - appRect.top;
      rect.left = elRect.left - appRect.left;
      rect.width = elRect.width;
      rect.height = elRect.height;
      rect.appWidth = appRect.width;
      rect.appheight = appRect.height;
      console.log(rect);
      this.$emit("select", { rect, todo });
    }
  }
};
</script>

<style lang="less">
.todo {
  flex: 1;
  margin: 0 8px;
  overflow: hidden;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  color: #666;

  .todo-head {
    display: flex;
    padding: 20px;
    height: 44px;
    justify-content: space-between;
    align-items: flex-start;
    transform: translate3d(0, 0, 0);
    will-change: transform; //提前告诉浏览器要改变的属性

    .todo-icon {
      display: flex;
      width: 44px;
      height: 44px;
      border: 1px solid #eee;
      border-radius: 100%;
      justify-content: center;
      align-items: center;
      font-size: 18px;
    }

    .todo-menu {
      color: #eee;
    }
  }

  .todo-body {
    padding: 0 20px;
    transform: translate3d(0, 189px, 0);
    will-change: transform;

    .todo-tips {
      opacity: 0.6;
      font-size: 13px;
      font-weight: 600;
    }

    .todo-title {
      margin-top: 6px;
      font-size: 32px;
    }

    .todo-progress {
      display: flex;
      align-items: center;
      margin-top: 30px;

      .todo-progress-line {
        margin-right: 10px;
        flex: 1;
        height: 3px;
        background-color: #eee;

        i {
          display: block;
          height: 100%;
          transition: all 0.3s ease;
        }

        .todo-progress-num {
          font-size: 12px;
        }
      }
    }

    .todo-tasks {
      opacity: 0;
      transform: scale3d(1, 0, 1);

      .todo-subtitle {
        margin-top: 32px;
        margin-bottom: 8px;
        columns: #999999;
      }
    }
  }
}
.todo__selected {
  visibility: hidden;
}
</style>