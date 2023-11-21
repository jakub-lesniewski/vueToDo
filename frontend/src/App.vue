<template>
  <div id="app" class="flex items-center justify-center h-screen flex-col">
    <h1 class="text-lg font-semibold tracking-wider">vueToDo</h1>
    <TaskList />
  </div>
</template>

<script>
import TaskList from "./components/TaskList.vue";

export default {
  name: "App",
  components: {
    TaskList,
  },
};
</script>
