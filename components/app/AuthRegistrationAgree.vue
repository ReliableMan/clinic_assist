<template>
  <i18n path="system.registration_agree.text" class="agree" tag="div">
    <template #link0>
      <NuxtLink to="/personal-data-policy" class="text-bold reg-links">
        {{ $t('system.registration_agree.links.0') }}
      </NuxtLink>
    </template>
    <template #link1>
      <NuxtLink to="/personal-data-agree" class="text-bold reg-links">
        {{ $t('system.registration_agree.links.1') }}
      </NuxtLink>
    </template>
    <template #link2>
      <NuxtLink to="/terms-of-use" class="text-bold reg-links">
        {{ $t('system.registration_agree.links.2') }}
      </NuxtLink>
    </template>
  </i18n>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.sass';

.agree {
  text-align: center;
  color: $color-grey;
  font-size: 14px;
  line-height: 20px;
}
.reg-links {
  color: #469c79;
}
</style>
