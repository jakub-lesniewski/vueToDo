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
export default {
  name: "TaskList",

  data() {
    return {
      tasks: [{ value: "", placeholder: "Task 1", checked: false }],
    };
  },

  methods: {
    addTask() {
      this.tasks.push({
        value: "",
        placeholder: `Task ${this.tasks.length + 1}`,
        checked: false,
      });
    },
    removeTask() {
      this.tasks.pop();
    },
  },
};
</script>
