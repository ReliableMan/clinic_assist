<template>
  <header class="header">
    <div class="header__panel">
      <div class="header__inner">
        <!-- <ui-container> header__inner__navigation -->
        <div class="header__inner-navigation">
          <div class="header__inner-img-logo">
            <img
              src="@/assets/images/clinic-assist-logo.svg"
              alt="clinic-assist-logo"
            />
          </div>

          <div class="header__inner-button">
            <div class="header__inner-settings">
              <img src="@/assets/images/svg/planet.svg" alt="planet-svg" />
              <img src="@/assets/images/svg/arrow-down.svg" alt="arrow-down" />
              <p class="header__inner-lang">Русский</p>
            </div>
            <ui-button
              color="success"
              outlined
              :to="localePath({ name: 'sign-in' })"
            >
              {{ $t('common.signin_signup') }}
            </ui-button>
          </div>
        </div>
        <!-- </ui-container> -->
      </div>
    </div>
  </header>
</template>

<script>
// import LogoStamp from '@/components/app/LogoStamp.vue'
// import TheHeaderUserWidget from '@/components/app/TheHeaderUserWidget.vue'

export default {
  components: {
    // LogoStamp,
    // TheHeaderUserWidget,
  },
  provide() {
    return {
      $_zIndex: 110,
    }
  },
}
</script>

<style lang="sass" scoped>
.header
  height: $public-header-height-md

  &__panel
    display: flex
    align-items: center
    height: $public-header-height-md
    width: 100%
    position: fixed
    border-bottom: 1px solid $color-blue-lighten-3
    background-color: $color-white
    z-index: 100

  &__inner
    flex: 1

  &__inner-navigation
    display: flex
    justify-content: space-between
    align-items: center

  &__inner-img-logo
    transform: translateX(223px)

  &__inner-button
    transform: translateX(-235px)
    display: flex
    gap: 55px

  &__inner-settings
    display: flex
    gap: 10px

  &__inner-lang
    font-size: 14px
    font-style: normal
    font-weight: 600
    line-height: 15px

  &__button
    width: 194px
</style>
