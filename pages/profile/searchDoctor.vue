<template>
  <section class="pv-40 ph-36">
    <h2>{{ $t('common.searchDoctor') }}</h2>

    <ui-divider class="text-blue-light-1 mt-34 mb-36" horizontal />
  </section>
</template>

<script>
export default {
  layout: 'profile',
}
</script>

<router>
  {
    path: '/search',
    name: 'searchDoctor',
  }
</router>
