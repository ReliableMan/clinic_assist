<template>
  <header class="header">
    <div class="header__panel">
      <div class="header__inner">
        <!-- <ui-container> header__inner__navigation -->
          <div class="header__inner-navigation">
              <div class="header__inner-img-logo" >
                <img
                  src="@/assets/images/clinic-assist-logo.svg" 
                  alt="clinic-assist-logo"
                  />
              </div>

              <div class="header__inner-button">
                <button>button</button>
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
    border-bottom: 1px solid $color-blue-lighten-1
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


  &__button
    width: 194px
</style>
