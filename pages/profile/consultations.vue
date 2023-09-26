<template>
  <div>
    <nuxt-child :key="$route.fullPath" />
  </div>

  <!-- <component :is="layout">
    <nuxt-child :key="$route.fullPath" />
  </component> -->
</template>

<script>
export default {
  layout: 'profile',
  // в зависимости от роли переключение на разные layout
  // computed: {
  //   layout() {
  //     const role = this.$store.getters['user/role']

  //     return `consultation-list-layout-${role}`
  //   },
  // },
}
</script>
