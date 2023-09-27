<template>
  <layout-with-sidebar>
    <template #sidebar>
      <div class="pv-40 ph-36 mb-20">
        <h2>{{ $t('common.profile') }}</h2>
      </div>
      <div v-for="(link, index) in submenu" :key="index">
        <NuxtLink class="link-style" :to="localePath(link.route)">
          <span class="text-style">
            {{ $t(link.locale) }}
          </span>
        </NuxtLink>
      </div>
    </template>

    <template #main>
      <nuxt-child :key="$route.fullPath" />
    </template>
  </layout-with-sidebar>
</template>

<script>
export default {
  layout: 'profile',
  data() {
    return {
      value: true,
    }
  },
  computed: {
    submenu() {
      return this.$store.getters[`profile-submenu/menu`]
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.sass';
.link-style {
  width: 100%;
  height: 92px;
  background-color: #e39595;
}
</style>

<style>
.layout__sidebar {
  background-image: url('@/assets/images/svg/background-layout-sidebar.svg');
  background-size: cover;
}
</style>

<router>
  {
    path: '/profile',
    name: 'profile',
  }
</router>
