<template>
  <div class="d-flex items-center content-center">
    <ui-icon :name="icon" :size="iconSize" class="text-primary" />
    <span class="ml-12 fs-14 lh-20">{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    iconSize: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
}
</script>
