<template>
  <section class="pv-40 ph-36">
    <h2>{{ $t('common.searchDoctor') }}</h2>

    <ui-divider class="divider" horizontal />
  </section>
</template>

<script>
export default {
  layout: 'profile',
}
</script>

<style scoped>
.divider {
  color: #b4e2c7;
  margin: 20px 10px 0 0;
}
</style>

<router>
  {
    path: '/search',
    name: 'searchDoctor',
  }
</router>
