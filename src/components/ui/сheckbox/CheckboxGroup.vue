<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import Checkbox from './Checkbox.vue';
import type { ITask } from '../../../types/task-list';

defineProps<{
  tasks: ITask[];
}>();

const emit = defineEmits<{
  (e: 'toggle', id: number): void;
}>();

function onToggle(id: number) {
  emit('toggle', id);
}
</script>

<template>
  <div class="checkbox-group">
    <Checkbox
      v-for="{id, title, done} in tasks"
      :key="id"
      :label="title"
      :modelValue="done"
      @update:modelValue="() => onToggle(id)"
    />
  </div>
</template>

<style scoped lang="scss">
.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
