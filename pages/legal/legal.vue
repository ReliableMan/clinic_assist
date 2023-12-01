<template>
  <layout-with-sticky-footer>
    <template #header>
      <the-header />
    </template>
    <template #body>
      <div class="d-flex flex-column items-center mt-20" style="gap: 10px">
        <NuxtLink to="/personal-data-policy" class="text-bold link">
          Политика обработки персональных данных
        </NuxtLink>
        <NuxtLink to="/personal-data-agree" class="text-bold link">
          Согласие на обработку персональных данных
        </NuxtLink>
        <NuxtLink to="/terms-of-use" class="text-bold link">
          Пользовательское соглашение
        </NuxtLink>
      </div>
    </template>
    <template #footer>
      <the-footer />
    </template>
  </layout-with-sticky-footer>
</template>

<script>
import TheHeader from '@/components/app/TheHeader.vue'
import TheFooter from '@/components/app/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<style lang="scss" scoped>
.link {
  color: #333;
  text-decoration: none;
}
</style>

<router>
  {
    path: '/legal-information',
    name: 'legal-information'
  }
</router>
