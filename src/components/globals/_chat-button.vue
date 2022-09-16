<template>
  <button
    :title="title"
    :disabled="disabled"
    :class="[
      {
        'button-component_disabled': disabled,
        'button-component_flat': flat,
        'button-component_small': small,
        'button-component_block': block,
      },
      color,
    ]"
    @click="onClick"
  >
    <slot name="icon" class="icon"></slot>
    <span v-if="label" class="button-component__text">{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  label?: string;
}

withDefaults(defineProps<Props>(), {
  label: '',
  title: '',
});

const emit = defineEmits<{
  (event: 'click', e: MouseEvent): void;
}>();

const onClick = (e: MouseEvent): void => {
  emit('click', e);
};
</script>

<style lang="scss">
.button-component {
  $this: &;
}
</style>
