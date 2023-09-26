<template>
  <section class="pv-40 ph-36">
    <h2>{{ $t('common.profile') }}</h2>
  </section>
</template>

<script>
export default {
  layout: 'profile',
}
</script>

<router>
  {
    path: '/profile',
    name: 'profile',
  }
</router>
