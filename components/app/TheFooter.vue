<template>
  <footer class="footer">
    <div class="footer__content">
      <img
        class="footer__content__img-logo"
        src="@/assets/images/svg/clinic-assist-logo-dark.svg"
        alt="clinic-assist-logo"
      />
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
  </footer>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.sass';

.footer {
  width: 100vw;
  height: 241px;
  background: #333;

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

    &__img-logo {
      width: 165px;
      height: 41px;
    }

    &__about,
    &__patience,
    &__doctors {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    &__contacts {
      display: flex;
      flex-direction: column;
      gap: 23px;
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
}
.text-ftr-2 {
  color: #999;
  font-family: $base-font-family;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
}
.text-ftr-3 {
  @extend .text-ftr-2;
  color: #fff;
  line-height: 22px;
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
</style>
