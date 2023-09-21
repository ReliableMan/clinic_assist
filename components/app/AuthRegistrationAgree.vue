<template>
  <i18n path="system.registration_agree.text" class="agree" tag="div">
    <template #link0>
      <a href="#" class="text-bold reg-links">{{
        $t('system.registration_agree.links.0')
      }}</a>
    </template>
    <template #link1>
      <a href="#" class="text-bold reg-links">{{
        $t('system.registration_agree.links.1')
      }}</a>
    </template>
    <template #link2>
      <a href="#" class="text-bold reg-links">{{
        $t('system.registration_agree.links.2')
      }}</a>
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
