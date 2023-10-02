<template>
  <layout-with-sidebar>
    <template #sidebar>
      <div class="pv-40 ph-36 mb-20">
        <h2>{{ $t('common.settings') }}</h2>
      </div>
      <div v-for="(link, index) in submenu" :key="index" class="link-style">
        <NuxtLink
          class="link-href"
          :class="{ styleBtn: path.includes(link.route.name) }"
          :to="localePath(link.route)"
        >
          <span class="text-style">
            {{ $t(link.locale) }}
          </span>
        </NuxtLink>
      </div>
      <ui-divider class="divider" horizontal />
      <NuxtLink
        class="link-href"
        :class="{ styleBtn: path.includes('info') }"
        :to="localePath('info_about_service')"
      >
        <span class="text-style">
          {{ $t('common.info_about_service') }}
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
  layout: 'profile',
  data() {
    return {
      value: true,
    }
  },
  computed: {
    submenu() {
      return this.$store.getters[`submenu/submenuSettings`]
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
  height: 92px;
}
.styleBtn > .text-style {
  color: #333;
  transition: all 0.5s;
}
.divider {
  color: #b4e2c7;
  margin: 20px 36px 20px 36px;
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
    path: '/settings',
    name: 'settings',
  }
</router>
