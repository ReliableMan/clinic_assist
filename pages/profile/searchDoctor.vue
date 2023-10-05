<template>
  <layout-with-sidebar>
    <template #sidebar>
      <div class="pv-40 ph-36 mb-20">
        <h2>{{ $t('common.searchDoctor') }}</h2>
      </div>
      <NuxtLink
        class="link-href"
        :class="{ styleBtn: path.includes('all-doctors') }"
        :to="localePath('all-doctors')"
      >
        <span class="text-style">
          {{ $t('common.all_doctors') }}
        </span>
      </NuxtLink>
    </template>

    <template #main>
      <nuxt-child :key="$route.fullPath" />
    </template>
  </layout-with-sidebar>
</template>

<script>
export default {
  name: 'SearchDoctor',
  layout: 'profile',
  computed: {
    submenu() {
      return this.$store.getters[`submenu/submenuSearchDoctor`]
    },
    path() {
      const url = this.$route.path
      return url
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.sass';
.link-href {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
  text-decoration: none;
  transition: all 1s;
}
.text-style {
  padding-left: 36px;
  font-family: $base-font-family;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  color: #999;
  transition: all 1s;
}
.styleBtn {
  transition: all 1s;
  background: #fff;
  height: 70px;
}
.styleBtn > .text-style {
  color: #333;
  transition: all 0.5s;
}
</style>

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
