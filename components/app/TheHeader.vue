<template>
  <header class="header">
    <div class="header__panel">
      <div class="header__inner">
        <!-- <ui-container> header__inner__navigation -->
        <div class="header__inner-navigation">
          <div class="header__inner-img-logo">
            <img
              src="@/assets/images/svg/clinic-assist-logo.svg"
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
      <!-- styles for mobile -->
      <div class="header__inner-mob">
        <!-- logo -->
        <div class="header__inner-mob__img-logo">
          <img
            src="@/assets/images/mobile/png/clinic-assist-logo-mob.png"
            alt="clinic-assist-logo-mob"
          />
        </div>
        <div class="d-flex">
          <!-- profile-icon -->
          <div class="header__inner-mob__profile-icon">
            <img
              src="@/assets/images/mobile/svg/profile-icon.svg"
              alt="profile-icon-mob"
            />
          </div>
          <!-- burger-icon -->
          <div class="header__inner-mob__burger-icon">
            <img
              src="@/assets/images/mobile/svg/burger-icon.svg"
              alt="burger-icon-mob"
            />
          </div>
        </div>
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

<style lang="scss" scoped>
@import '@/assets/styles/_variables.sass';

.header {
  height: $public-header-height-md;

  &__panel {
    display: flex;
    align-items: center;
    height: $public-header-height-md;
    width: 100%;
    position: fixed;
    border-bottom: 1px solid $color-blue-lighten-3;
    background-color: $color-white;
    z-index: 100;
    transition: all 1s;

    @media (max-width: 750px) {
      transition: all 1s;
      border-bottom: none;
    }
  }

  &__inner {
    flex: 1;

    @media (max-width: 600px) {
      display: none;
    }
  }

  &__inner-mob {
    display: none;

    @media (max-width: 599px) {
      width: 100vw;
      display: flex;
      justify-content: space-between;
      padding-left: 20px;
      padding-right: 20px;
      align-items: center;
    }

    &__img-logo {
      margin-left: 20px;
    }

    &__profile-icon {
      width: 50px;
      height: 20px;
      border-right: solid #dcfef0;
    }

    &__burger-icon {
    }
  }

  &__inner-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 1s;

    @media (max-width: 1000px) {
      justify-content: space-evenly;
      transition: all 1s;
    }
  }

  &__inner-img-logo {
    transform: translateX(223px) translateY(5px);
    transition: all 1s;

    @media (max-width: 1000px) {
      transition: all 1s;
      transform: translateX(0px) translateY(5px);
    }
  }

  &__inner-button {
    transform: translateX(-235px);
    display: flex;
    gap: 55px;
    transition: all 1s;

    @media (max-width: 1000px) {
      transition: all 1s;
      transform: translateX(0px);
      gap: 20px;
    }
  }

  &__inner-settings {
    display: flex;
    gap: 10px;
  }

  &__inner-lang {
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 15px;
  }

  &__button {
    width: 194px;
  }
}
</style>
