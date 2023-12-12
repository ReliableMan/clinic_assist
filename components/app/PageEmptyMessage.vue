<template>
  <div class="full-height d-flex flex-column items-center content-center">
    <div class="fs-20 lh-24 mb-24">{{ title }}</div>
    <div class="fs-14 lh-20 mb-48 text-center" style="width: 320px">
      {{ description }}
    </div>
    <img
      src="@/assets/images/clock.svg"
      class="d-block"
      alt="clock"
      width="230"
      height="180"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>
