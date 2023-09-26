<template>
  <header class="header">
    <div class="header__panel">
      <div class="header__inner">
        <div class="header__inner-navigation">
          <div class="header__inner-img-logo">
            <logo-stamp />
          </div>

          <div class="header__inner-button">
            <div class="header__inner-settings">
              <img src="@/assets/images/svg/planet.svg" alt="planet-svg" />
              <img src="@/assets/images/svg/arrow-down.svg" alt="arrow-down" />
              <p class="header__inner-lang">Русский</p>
            </div>

            <client-only>
              <transition name="fade" mode="out-in">
                <div v-if="$auth.loggedIn" key="auth">
                  <the-header-user-widget />
                </div>
                <div v-else key="guest" class="header__button">
                  <ui-button
                    color="success"
                    fluid
                    :to="localePath({ name: 'sign-in' })"
                  >
                    {{ $t('common.signin_signup') }}
                  </ui-button>
                </div>
              </transition>
            </client-only>
            <!-- <ui-button
              color="success"
              outlined
              :to="localePath({ name: 'sign-in' })"
            >
              {{ $t('common.signin_signup') }}
            </ui-button> -->
          </div>
        </div>
      </div>
      <!-- styles for mobile -->
      <div class="header__inner-mob">
        <!-- logo -->
        <NuxtLink to="/" class="header__inner-mob__img-logo">
          <img
            src="@/assets/images/mobile/png/clinic-assist-logo-mob.png"
            alt="clinic-assist-logo-mob"
          />
        </NuxtLink>
        <div class="d-flex">
          <!-- profile-icon -->
          <div class="header__inner-mob__profile-icon">
            <img
              src="@/assets/images/mobile/svg/profile-icon.svg"
              alt="profile-icon-mob"
            />
          </div>
          <!-- burger-icon -->
          <div>
            <ui-button
              class="header__inner-mob__burger-icon"
              @click="drawer = true"
            >
              <img
                src="@/assets/images/mobile/svg/burger-icon.svg"
                alt="burger-icon-mob"
              />
            </ui-button>
            <ui-drawer v-model="drawer">
              <ui-drawer-inner>
                <p class="text-mob-drawer-1">Меню:</p>
                <div class="mob-drawer-content">
                  <!-- 1 -->
                  <div class="mob-drawer-content__block-1">
                    <ui-icon class="hdr-icons" name="search" />
                    <span class="hdr-mobile-text"> Поиск врача </span>
                  </div>
                  <!-- 2 -->
                  <div class="mob-drawer-content__block-2">
                    <ui-icon class="hdr-icons" name="warning" />
                    <span class="hdr-mobile-text"> Помощь </span>
                  </div>
                  <!-- 3 -->
                  <div class="mob-drawer-content__block-3">
                    <ui-icon class="hdr-icons" name="like" />
                    <span class="hdr-mobile-text" @click="drawer = false">
                      Обратная связь
                    </span>
                  </div>
                </div>
                <!-- button -->
                <div @click="drawer = false">
                  <ui-button
                    class="mt-40"
                    color="success"
                    :to="localePath({ name: 'sign-in' })"
                  >
                    {{ $t('common.signin_signup') }}
                  </ui-button>
                </div>
              </ui-drawer-inner>
            </ui-drawer>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import LogoStamp from '@/components/app/LogoStamp.vue'
import TheHeaderUserWidget from '@/components/app/TheHeaderUserWidget.vue'

export default {
  components: {
    LogoStamp,
    TheHeaderUserWidget,
  },
  provide() {
    return {
      $_zIndex: 110,
    }
  },
  data() {
    return {
      drawer: false,
      leftDrawer: false,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.sass';

.text-mob-drawer-1 {
  color: var(--primary-2, #333);
  font-family: $head-font-family;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
}

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
      align-items: center;
    }

    &__img-logo {
      margin-top: 5px;
      margin-left: 20px;
    }

    &__profile-icon {
      margin-top: 11px;
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

.mob-drawer-content {
  margin-top: 24px;
  display: flex;
  flex-direction: column;

  &__block-1 {
    display: flex;
    gap: 12px;
    padding-bottom: 27px;
    border-bottom: 1px solid #469c79;
  }

  &__block-2,
  &__block-3 {
    margin-top: 22px;
    display: flex;
    gap: 12px;
  }
}

.hdr-icons {
  width: 24px;
  height: 24px;
  color: #469c79;
}
.hdr-mobile-text {
  color: var(--primary-2, #333);
  font-family: $base-font-family;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}
</style>

<style>
.ui-button--text-primary {
  color: #469c79 !important;
}
.ui-button--success:not(.ui-button--outlined) {
  background-color: #469c79 !important;
}
.ui-button--outlined {
  color: #469c79 !important;
}
</style>
