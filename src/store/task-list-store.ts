import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import api from '../api';
import type { ITask } from '../types/task-list';

export const useTaskListStore = defineStore('taskList', () => {
  const taskList = ref<ITask[]>([]);
  const loading = ref<boolean>(false);
  const page = ref<number>(1);
  const limit = ref<number>(10);

  const taskListLocalStorage = localStorage.getItem('taskList');

  if (taskListLocalStorage) {
    try {
      const parsedData = JSON.parse(taskListLocalStorage);
      taskList.value = parsedData;
    } catch (error) {
      console.error('Ошибка при чтении данных из localStorage:', error);
    }
  }

  watch(
    () => taskList.value,
    state => {
      try {
        localStorage.setItem('taskList', JSON.stringify(state));
      } catch (error) {
        console.error('Ошибка при сохранении данных в localStorage:', error);
      }
    },
    { deep: true }
  );

  const getTaskList = computed(() => taskList.value);
  const getLoading = computed(() => loading.value);

  const markTask = (id: number): void => {
    const task = taskList.value.find((task: ITask) => task.id === id);
    if (task) {
      task.done = !task.done;
    }
  };

  const myTaskList = async (): Promise<void> => {
    const stored = localStorage.getItem('taskList');
    if (stored) return;

    if (loading.value) return;
    loading.value = true;

    api
      .get('/todos', {
        params: { _page: page.value, _limit: limit.value }
      })
      .then((res: any) => {
        taskList.value = res.data;
      })
      .catch((e: Error) => console.error(e))
      .finally(() => (loading.value = false));
  };

  return {
    getTaskList,
    getLoading,
    markTask,
    myTaskList
  };
});
