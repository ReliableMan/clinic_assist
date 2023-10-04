<template>
  <div>
    <div class="d-flex content-center fs-20 lh-30 text-center mb-48">
      <slot name="title" />
    </div>

    <div class="d-flex content-center mb-6">
      <slot name="image" />
    </div>

    <div
      v-if="$scopedSlots['append-text']"
      class="d-flex content-center mb-30 text-center fs-12 lh-16"
    >
      <slot name="append-text" />
    </div>

    <div
      v-if="$scopedSlots['text']"
      class="d-flex content-center mb-48 text-center fs-14 lh-20"
    >
      <slot name="text" />
    </div>

    <div class="d-flex content-center">
      <slot name="button" />
    </div>
    <div
      v-if="$scopedSlots.cancel"
      class="d-flex content-center mt-18 fs-12 lh-16"
    >
      <slot name="cancel" />
    </div>
  </div>
</template>
