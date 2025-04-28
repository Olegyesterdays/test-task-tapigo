<script setup lang="ts">
import { computed, onMounted } from 'vue';
import CheckboxGroup from '@/components/ui/сheckbox/CheckboxGroup.vue';
import { useTaskListStore } from './store/task-list-store';

const taskListStore = useTaskListStore();
const tasks = computed(() => taskListStore.getTaskList);

const markTask = (id: number) => {
  taskListStore.markTask(id);
};

onMounted(() => {
  taskListStore.myTaskList();
});
</script>

<template>
  <div class="app">
    <CheckboxGroup :tasks="tasks" @toggle="markTask" />
  </div>
</template>

<style scoped lang="scss">
.app {
  padding: 20px;
}
</style>
