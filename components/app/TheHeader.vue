<template>
  <header class="header">
    <div class="header__panel">
      <div class="header__inner">
        <ui-container>
          <div class="d-flex content-space-between items-center">
            <div class="d-flex items-center">
              <img
                class="img-logo" 
                src="@/assets/images/clinic-assist-logo.svg" 
                alt="clinic-assist-logo"
              />
            </div>

            <client-only>
              <transition name="fade" mode="out-in">
                <div>
                  <!-- <the-header-user-widget /> -->
                </div>
                <div class="header__button">
                  <ui-button
                    color="primary"
                    fluid
                    
                  >
                    Button
                  </ui-button>
                </div>
              </transition>
            </client-only>
          </div>
        </ui-container>
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
    border-bottom: 1px solid $color-blue-lighten-1
    background-color: $color-white
    z-index: 100

  &__inner
    flex: 1

  &__button
    width: 194px
</style>
