<template>
  <footer class="footer">
    <div class="footer__content">
      <logo-stamp-footer />

      <div class="footer__content__about">
        <span class="text-ftr-1">О нас</span>
        <span class="text-ftr-2">Правовая информация</span>
      </div>
      <div class="footer__content__patience">
        <span class="text-ftr-1">Пациентам</span>
        <span class="text-ftr-2">Обратная связь</span>
      </div>
      <div class="footer__content__doctors">
        <span class="text-ftr-1">Врачам</span>
        <span class="text-ftr-2">Обратная связь</span>
      </div>

      <div class="footer__content__contacts">
        <div class="d-flex-al-it-center">
          <ui-icon class="ftr-icons mr-10" name="location" />
          <span class="text-ftr-3"> Москва, Новый Арбат, 21 </span>
        </div>
        <div class="d-flex-al-it-center">
          <ui-icon class="ftr-icons mr-10" name="phone" />
          <span class="text-ftr-3">+7 (499) 241 51 37</span>
        </div>
        <div class="d-flex-al-it-center">
          <ui-icon class="ftr-icons mr-10" name="email" />
          <span class="text-ftr-3">support@qapsula.com</span>
        </div>
      </div>
    </div>

    <div class="footer__content-mob">
      <!-- 1 -->
      <div class="pt-80">
        <ui-expansion v-model="value" class="white-color trigger-center">
          <template #trigger>
            <div class="text-ftr-mob-1">О нас</div>
          </template>
          <template #content>
            <p class="text-ftr-mob-2">Правовая информация</p>
          </template>
        </ui-expansion>
      </div>
      <!-- 2 -->
      <div class="pt-30">
        <ui-expansion v-model="value2" class="white-color trigger-center">
          <template #trigger>
            <div class="text-ftr-mob-1">Пациентам</div>
          </template>
          <template #content>
            <p class="text-ftr-mob-2">Обратная связь</p>
          </template>
        </ui-expansion>
      </div>
      <!-- 3 -->
      <div class="pt-30">
        <ui-expansion v-model="value3" class="white-color trigger-center">
          <template #trigger>
            <div class="text-ftr-mob-1">Врачам</div>
          </template>
          <template #content>
            <p class="text-ftr-mob-2">Обратная связь</p>
          </template>
        </ui-expansion>
      </div>
      <!-- 4 -->
      <div class="pt-80 d-none">
        <ui-expansion v-model="value4" class="white-color trigger-center">
          <template #trigger>
            <img
              src="@/assets/images/mobile/svg/planet-white-footer.svg"
              alt="planet-white-image"
            />
            <!-- <p class="text-ftr-mob-2">&nbsp; Русский</p> -->
          </template>
          <template #content>
            <p class="text-ftr-mob-2">English</p>
            <p class="text-ftr-mob-2">Русский</p>
          </template>
        </ui-expansion>
      </div>
      <!-- 5 -->
      <div class="footer__content-mob__contacts">
        <div class="d-flex-al-it-center">
          <ui-icon class="ftr-icons mr-10" name="location" />
          <span class="text-ftr-mob-3"> Москва, Новый Арбат, 21 </span>
        </div>
        <div class="d-flex-al-it-center">
          <ui-icon class="ftr-icons mr-10" name="phone" />
          <span class="text-ftr-mob-3">+7 (499) 241 51 37</span>
        </div>
        <div class="d-flex-al-it-center">
          <ui-icon class="ftr-icons mr-10" name="email" />
          <span class="text-ftr-mob-3">support@qapsula.com</span>
        </div>
      </div>
      <!-- 6 -->
      <div class="footer__content-mob__logo">
        <img
          class="footer__content__img-logo"
          src="@/assets/images/mobile/svg/footer-logo-mob.svg"
          alt="clinic-assist-logo"
        />
      </div>
      <!-- 7 -->
      <div class="footer__content-mob__copyrights">
        <span class="footer__content-mob__copyrights__text">
          © 2023 ООО «Капсула».
        </span>
        <span class="footer__content-mob__copyrights__text">
          Все права защищены.
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
import LogoStampFooter from '@/components/app/LogoStampFooter.vue'

export default {
  components: {
    LogoStampFooter,
  },
  data() {
    return {
      value: false,
      value2: false,
      value3: false,
      value4: false,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.sass';

.footer {
  display: block;
  width: 100vw;
  height: 241px;
  background: #333;

  @media (max-width: 800px) {
    height: 663px;
  }

  &__content {
    padding: 65px 129px 0px 146px;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    transition: all 1s;

    @media (max-width: 1300px) {
      padding: 55px 100px 0 80px;
      transition: all 1s;
    }
    @media (max-width: 1100px) {
      padding: 55px 50px 0 20px;
      transition: all 1s;
    }
    @media (max-width: 1000px) {
      padding: 55px 0 0 0;
      transition: all 1s;
    }
    @media (max-width: 800px) {
      display: none;
    }

    &__img-logo {
      width: 165px;
      height: 41px;
      transition: all 1s;
    }

    &__about,
    &__patience,
    &__doctors {
      display: flex;
      flex-direction: column;
      gap: 5px;
      width: 150px;
    }

    &__contacts {
      display: flex;
      flex-direction: column;
      gap: 23px;
    }
  }

  &__content-mob {
    width: auto;
    height: auto;

    @media (min-width: 801px) {
      display: none;
    }

    &__contacts {
      padding-top: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }

    &__logo {
      padding-top: 20px;
      display: flex;
      justify-content: center;
    }

    &__copyrights {
      padding-top: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;

      &__text {
        color: var(--primary-250, #999);
        font-family: $base-font-family;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 10px;
      }
    }
  }
}
.text-ftr-1 {
  color: #fff;
  font-family: $base-font-family;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  transition: all 1s;

  @media (max-width: 1000px) {
    transition: all 1s;
    font-size: 18px;
    line-height: 16px;
  }
}
.text-ftr-2 {
  color: #999;
  font-family: $base-font-family;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;

  @media (max-width: 1000px) {
    transition: all 1s;
    font-size: 14px;
    line-height: 20px;
  }
}
.text-ftr-3 {
  @extend .text-ftr-2;
  color: #fff;
  line-height: 22px;
  transition: all 1s;

  @media (max-width: 1000px) {
    transition: all 1s;
  }
}
.ftr-icons {
  width: 18px;
  height: 14px;
  color: #fff;
}

.d-flex-al-it-center {
  display: flex;
  align-items: center;
}
.text-ftr-mob-1 {
  color: var(--white, #fff);
  text-align: center;
  font-family: $base-font-family;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
}

.text-ftr-mob-2 {
  @extend .text-ftr-mob-1;
  font-size: 16px;
}

.text-ftr-mob-3 {
  color: var(--white, #fff);
  font-family: $base-font-family;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
}

.white-color {
  color: white;
  text-align: center;
}

.trigger-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
