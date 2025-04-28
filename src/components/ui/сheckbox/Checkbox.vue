<script setup lang="ts">
defineProps<{
  modelValue: boolean;
  label: string;
}>();

defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();
</script>

<template>
  <label class="checkbox">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="(event) => $emit('update:modelValue', (event.target as HTMLInputElement).checked)"
      class="checkbox-input"
    />
    <span class="checkbox-box">
      <svg class="checkbox-checkmark" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 13L9 17L19 7"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
    <span class="checkbox-label">{{ label }}</span>
  </label>
</template>

<style scoped lang="scss">
.checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;

  &-input {
    display: none;

    &:checked + .checkbox-box {
      background-color: #4f46e5;
      border-color: #4f46e5;

      .checkbox-checkmark {
        stroke-dashoffset: 0;
      }
    }
  }

  &-box {
    width: 24px;
    height: 24px;
    border: 2px solid #ccc;
    border-radius: 6px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s, border-color 0.3s;

    .checkbox-checkmark {
      width: 16px;
      height: 16px;
      stroke-dasharray: 24;
      stroke-dashoffset: 24;
      transition: stroke-dashoffset 0.3s ease;
    }
  }

  &-label {
    font-size: 16px;
    color: #333;
  }
}
</style>