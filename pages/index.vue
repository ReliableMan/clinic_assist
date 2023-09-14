<template>
  <div class="main-page">
    <div class="main-page__container">
      <div class="main-page__container__block-1">
        <h2 class="main-page__container__block-1__title">
          Консультация <br class="adapt-size" />
          врача
          <span class="main-page__container__block-1__title__green"
            >онлайн</span
          >
        </h2>
        <!-- tablet or mobile version for photos ??-->
        <!-- <h2 class="main-page__container__block-1-mob__title">
          Консультация <br />
          врача
          <span class="main-page__container__block-1-mob__title__green"
            >онлайн</span
          >
        </h2> -->

        <div class="main-page__container__block-2-mob">
          <img
            class="main-page__container__block-2-mob__img-patient"
            src="@/assets/images/patient-mobile.png"
            alt="img-patient-mobile"
          />
          <img
            class="main-page__container__block-2-mob__img-doctor"
            src="@/assets/images/doctor-mobile.png"
            alt="img-doctor-mobile"
          />
        </div>
        <div class="main-page__container__block-1__group-btns">
          <ui-button color="warning">
            <span class="text-btn-1">
              {{ $t('common.urgent_consultation') }}
            </span>
          </ui-button>
          <ui-button color="success">
            <span class="text-btn-1">
              {{ $t('common.scheduled_consultation') }}
            </span>
          </ui-button>
        </div>
        <main-slider v-if="isActiveSlider" />
      </div>
      <div class="main-page__container__block-2">
        <img
          class="main-page__container__block-2__img-patient"
          src="@/assets/images/patient-mobile.png"
          alt="img-patient-mobile"
        />
        <img
          class="main-page__container__block-2__img-doctor"
          src="@/assets/images/doctor-mobile.png"
          alt="img-doctor-mobile"
        />
      </div>
    </div>
    <div class="main-page__container-2">
      <!-- 1 карточка -->
      <div class="main-page__container-2__block">
        <p class="main-page__container-2__block__title">Срочная консультация</p>
        <ul class="main-page__container-2__block__list" type="disc">
          <li>подробный отчет после консультации</li>
          <li>моментальный ответ</li>
          <li>15 минут</li>
        </ul>
        <a class="main-page__container-2__block__href" href="#">
          <p class="main-page__container-2__block__href-text">Подробнее</p>
          <p class="right-vect-i-orange"></p>
        </a>
      </div>
      <!-- 2 карточка -->
      <div class="main-page__container-2__block-2">
        <p class="main-page__container-2__block__title">
          Плановая консультация
        </p>
        <ul class="main-page__container-2__block__list" type="disc">
          <li>помощь в любой немонятной ситуации</li>
          <li>удобное расписание</li>
          <li>30 минут</li>
        </ul>
        <a class="main-page__container-2__block__href" href="#">
          <p class="main-page__container-2__block__href-text">Подробнее</p>
          <p class="right-vect-i-green"></p>
        </a>
      </div>
    </div>
    <div class="main-page__container-3">
      <div class="main-page__container-3__block-1">
        <p class="main-page__container-3__block-1__text">
          Выберите параметры поиска
        </p>
        <div class="main-page__container-3__block-1__rub-text">
          ваш баланс:
          <p class="rub-number">100</p>
          <p class="ru-icon"></p>
        </div>
      </div>
      <div class="main-page__container-3__block-2">
        <div>
          <ui-input-label>
            <span class="ui-label">Специализация</span>
            <ui-input
              class="main-page__container-3__block-2__input"
              placeholder="Педиатр, терпевт, невролог"
            />
          </ui-input-label>
        </div>
        <div>
          <ui-input-label>
            <span class="ui-label">ФИО</span>
            <ui-input
              class="main-page__container-3__block-2__input"
              placeholder="Сидоров Иван Петрович"
            />
          </ui-input-label>
        </div>
      </div>
      <div class="main-page__container-3__block-3">
        <!-- item 1 -->
        <div class="main-page__container-3__block-3__img-gender-i">
          <img
            width="92"
            height="46"
            src="@/assets/images/svg/gender-icon.svg"
            alt="gender-icon"
          />
        </div>
        <!-- item 2 -->
        <div class="main-page__container-3__block-3__checkbox">
          <ui-checkbox v-model="value" />
          <span class="main-page__container-3__block-3__checkbox__name">
            Доступен сегодня
          </span>
        </div>
        <!-- item 3 -->
        <div class="main-page__container-3__block-3__checkbox">
          <ui-checkbox v-model="value2" />
          <span class="main-page__container-3__block-3__checkbox__name">
            Дата/Время
          </span>
        </div>
        <!-- item 4 -->
        <ui-button color="warning"> Найти </ui-button>
        <!-- item 5 -->
        <div>
          <img
            width="130"
            height="60"
            src="@/assets/images/svg/group_doctors.svg"
            alt="group_doctors"
          />
        </div>
      </div>
      <div class="main-page__container-3__block-4">
        <span class="main-page__container-3__block-4__text">
          Дежурный терапевт
        </span>
        <span class="main-page__container-3__block-4__text">
          Дежурный педиатр
        </span>
      </div>
      <div class="main-page__container-3__block-5">
        <span class="main-page__container-3__block-5__text">
          Сбросить фильтры
        </span>
      </div>
    </div>
    <card-doctor-desktop class="desktop" />
    <card-doctor-mobile class="mobile" />
  </div>
</template>

<script>
import MainSlider from '@/components/app/MainSlider.vue'
import CardDoctorDesktop from '@/components/app/CardDoctorDesktop.vue'
import CardDoctorMobile from '@/components/app/CardDoctorMobile.vue'

export default {
  components: {
    MainSlider,
    CardDoctorDesktop,
    CardDoctorMobile,
  },
  layout: 'public',
  data() {
    return {
      value: false,
      value2: false,
      isActiveSlider: false,
    }
  },
  mounted() {
    this.isActiveSlider = true
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.sass';
.text-btn-1 {
  text-align: center;
  font-family: $base-font-family;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
}
.text-style-1 {
  font-family: $base-font-family;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.09px;
}

.main-page {
  padding: 79px 15vw 27px 15vw;
  transition: all 1s;

  @media (max-width: 1600px) {
    padding-left: 10vw;
    padding-right: 10vw;
    transition: all 1s;
  }
  @media (max-width: 1500px) {
    padding-left: 8vw;
    padding-right: 8vw;
    transition: all 1s;
  }
  @media (max-width: 600px) {
    padding: 30px 0 0 0;
    margin-left: auto;
    margin-right: auto;
    transition: all 1s;
  }

  &__container {
    display: flex;

    @media (max-width: 1100px) {
      justify-content: center;
    }

    &__block-1 {
      &__title {
        font-family: $head-font-family;
        font-size: 48px;
        font-style: normal;
        font-weight: 500;
        line-height: 50px;
        margin-left: 18px;
        transition: all 1s;

        @media (max-width: 1100px) {
          transition: all 1s;
          font-size: 39px;
          margin-left: 0;
        }

        &__green {
          color: $color-green;
          font-weight: 700;
        }
      }
      &__group-btns {
        display: flex;
        margin-top: 21px;
        gap: 13px;
        margin-bottom: 10px;
        margin-left: 18px;
      }
    }

    &__block-2-mob {
      display: none;
      position: relative;

      @media (max-width: 1100px) {
        margin-top: 20px;
        margin-left: 80px;
        margin-bottom: 20px;
        display: block;
        width: 284px;
        height: 320px;
      }

      &__img-patient {
        height: 300px;
        box-shadow: -25px 75px 37px -8px rgba(5, 142, 110, 0.14),
          70px -11px 60px 0px rgba(5, 142, 110, 0.14);
        border-radius: 30px;
        transform: rotate(-13.054deg);
      }

      &__img-doctor {
        height: 300px;
        position: absolute;
        top: 13px;
        left: 124px;
        border-radius: 30px;
        transform: rotate(12.743deg) scale(-1, 1);
      }
    }

    &__block-2 {
      width: 770px;
      height: 747px;
      position: relative;

      &__img-patient {
        position: absolute;
        top: 68px;
        left: 100px;
        box-shadow: -25px 75px 37px -8px rgba(5, 142, 110, 0.14),
          213px -11px 60px 0px rgba(5, 142, 110, 0.14);
        border-radius: 52px;
        transform: rotate(-13.054deg);
        transition: all 1s;

        @media (max-width: 1400px) {
          height: 500px;
          width: 230px;
          box-shadow: -25px 75px 37px -8px rgba(5, 142, 110, 0.14),
            88px -11px 60px 0px rgba(5, 142, 110, 0.14);
          transition: all 1s;
        }
        @media (max-width: 1200px) {
          height: 430px;
          width: 200px;
          top: 99px;
          left: 20px;
          border-radius: 30px;
        }
      }
      &__img-doctor {
        position: absolute;
        top: 92px;
        left: 347px;
        border-radius: 52px;
        transform: rotate(12.743deg) scale(-1, 1);

        @media (max-width: 1400px) {
          height: 500px;
          width: 230px;
          top: 99px;
          left: 299px;
        }
        @media (max-width: 1200px) {
          height: 430px;
          width: 200px;
          top: 120px;
          left: 185px;
          border-radius: 30px;
        }
      }
      @media (max-width: 1100px) {
        display: none;
      }
    }
  }

  &__container-2 {
    margin-top: 28px;
    display: flex;
    gap: 47px;

    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
    }

    &__block {
      width: 590px;
      height: 197px;
      border-radius: 10px;
      background: linear-gradient(
        191deg,
        #f1c365 7.02%,
        #ffa638 43.87%,
        rgba(255, 138, 33, 0.91) 97.52%
      );

      &__title {
        transform: translateX(48px) translateY(10px);
        color: #fff;
        font-family: $head-font-family;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: 22px;
        transition: all 1s;

        @media (max-width: 1100px) {
          transform: translateX(28px) translateY(10px);
          transition: all 1s;
        }
      }

      &__list {
        transform: translateX(112px) translateY(10px);
        color: #fff;
        @extend .text-style-1;
        list-style-type: disc;
        transition: all 1s;

        @media (max-width: 1200px) {
          transform: translateX(80px) translateY(5px);
          transition: all 1s;
        }
        @media (max-width: 1100px) {
          transform: translateX(48px) translateY(10px);
          transition: all 1s;
        }
      }

      &__href {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }

      &__href-text {
        display: flex;
        justify-content: flex-end;
        color: #fff;
        @extend .text-style-1;
        text-align: end;
        margin-right: 26px;
        text-decoration-line: underline;
      }
    }

    &__block-2 {
      width: 590px;
      height: 197px;
      border-radius: 10px;
      background: linear-gradient(
        300deg,
        #cde8d5 -0.62%,
        #79cba8 26.9%,
        #469c79 92.77%
      );
      box-shadow: 0px 2px 8px 0px rgba(51, 51, 51, 0.15);
    }
  }

  &__container-3 {
    position: relative;
    margin-top: 51px;
    max-width: 1225px;
    height: 268px;
    border-radius: 10px;
    background-image: url('@/assets/images/background-img-1.png');
    display: flex;
    flex-direction: column;

    &__block-1 {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &__text {
        font-family: $base-font-family;
        color: #fff;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
      }

      &__rub-text {
        width: 120px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        transform: translateX(340px);
        font-family: $base-font-family;
        font-family: Segoe UI;
        color: #fff;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;

        @media (max-width: 1350px) {
          transform: translateX(20vw);
        }
        @media (max-width: 1000px) {
          transform: translateX(10vw);
        }
      }
    }

    &__block-2 {
      max-width: 1225px;
      display: flex;
      justify-content: space-evenly;

      &__input {
        width: 29vw;
      }
    }

    &__block-3 {
      margin-top: 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 30px 0 44px;

      &__img-gender-i {
        margin-right: 120px;

        @media (max-width: 1300px) {
          margin-right: 40px;
        }
      }

      &__checkbox {
        display: flex;
        align-items: center;
        gap: 10px;

        &__name {
          color: #fff;
          font-family: $base-font-family;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 22px;
        }
      }
    }

    &__block-4 {
      position: absolute;
      bottom: 40px;
      right: 50px;
      display: flex;
      gap: 5px;

      &__text {
        display: block;
        width: 43px;
        color: #fff;
        text-align: center;
        font-family: $base-font-family;
        font-size: 8px;
        font-style: normal;
        font-weight: 600;
        line-height: 8px;
      }
    }

    &__block-5 {
      text-align: center;

      &__text {
        color: #fff;
        font-family: $base-font-family;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: 16px;
        text-decoration-line: underline;
      }
    }
  }
}

.right-vect-i-orange {
  width: 26px;
  height: 26px;
  margin-right: 29px;
  background-image: url('@/assets/images/svg/right-vector-icon.svg');
  background-repeat: no-repeat;
}
.right-vect-i-green {
  width: 26px;
  height: 26px;
  margin-right: 29px;
  background-image: url('@/assets/images/svg/right-vector-icon-2.svg');
  background-repeat: no-repeat;
}
.rub-number {
  color: #fff;
  font-family: $base-font-family;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
}

.ru-icon {
  width: 8px;
  height: 10px;
  background-image: url('@/assets/images/svg/vector-rub.svg');
  background-repeat: no-repeat;
}

.ui-label {
  padding-left: 20px;
  color: #fff !important;
  font-family: $base-font-family;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
}

.adapt-size {
  @media (max-width: 1100px) {
    display: none;
  }
}

.desktop {
  @media (max-width: 1000px) {
    display: none;
  }
}

.mobile {
  display: none;
  @media (max-width: 1000px) {
    display: block;
  }
}
</style>
