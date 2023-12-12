<template>
  <div class="full-height d-flex flex-column items-center content-center">
    <div class="fs-20 lh-24 mb-24">{{ title }}</div>
    <div class="fs-14 lh-20 mb-48 text-center" style="width: 477px">
      {{ description }}
    </div>
    <img
      src="@/assets/images/box.svg"
      class="d-block"
      alt="clock"
      width="310"
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
