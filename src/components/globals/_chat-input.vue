<template>
  <input :type="type" :name="name" :style="{ maxWidth }" />
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  label?: string;
  maxWidth: string;
}

withDefaults(defineProps<Props>(), {
  label: '',
  title: '',
  maxWidth: '',
});

const emit = defineEmits<{
  (event: 'click', e: MouseEvent): void;
}>();

const onClick = (e: MouseEvent): void => {
  emit('click', e);
};
</script>

<style lang="scss"></style>
