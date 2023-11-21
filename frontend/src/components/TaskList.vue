<template>
  <ul class="flex flex-col gap-5 border p-20">
    <li v-for="(task, index) in tasks" :key="index" class="flex gap-5">
      <input
        v-model="task.value"
        :placeholder="task.placeholder"
        class="border p-2"
        :style="{ 'text-decoration': task.checked ? 'line-through' : 'none' }"
      />
      <input type="checkbox" v-model="task.checked" class="w-5" />
    </li>

    <button
      @click="addTask"
      class="inline-flex items-center justify-center border p-3 transition hover:bg-black hover:text-white"
    >
      Add Task
    </button>

    <button
      @click="removeTask"
      class="inline-flex items-center justify-center border p-3 transition hover:bg-black hover:text-white"
    >
      Remove Task
    </button>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "TaskList",

  data() {
    return {
      tasks: [],
    };
  },

  created() {
    this.fetchTasks();
  },

  methods: {
    async fetchTasks() {
      try {
        const response = await axios.get("http://localhost:3000/tasks");
        this.tasks = response.data;
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    },

    async addTask() {
      try {
        const newTask = {
          value: "",
          placeholder: `Task ${this.tasks.length + 1}`,
          checked: false,
        };
        const response = await axios.post(
          "http://localhost:3000/tasks",
          newTask,
        );
        this.tasks.push(response.data);
      } catch (error) {
        console.error("Error adding task:", error);
      }
    },

    async removeTask() {
      try {
        if (this.tasks.length > 0) {
          const response = await axios.delete("http://localhost:3000/tasks");
          const deletedTask = response.data;
          this.tasks.pop();
        } else {
          console.error("No tasks to delete");
        }
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    },
  },
};
</script>
