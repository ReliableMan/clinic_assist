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
        <!-- tablet or mobile version-->
        <h2 class="main-page__container__block-1__title-mob">
          Консультация <br />
          врача
          <span class="main-page__container__block-1__title-mob__green"
            >онлайн</span
          >
        </h2>
        <!-- images doctor and patient for tablet and mobile devices -->
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
      <!-- 1 карточка orange block-->
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
      <!-- 2 карточка green block-->
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

    <search-doctor-desktop class="desktop" />
    <search-doctor-mobile class="mobile" />

    <select-doctor-mobile class="mobile-sm" />
    <sort-doctor-parametrs class="mobile-sm" />

    <card-doctor-desktop class="desktop" />
    <card-doctor-mobile class="mobile" />
  </div>
</template>

<script>
import MainSlider from '@/components/app/MainSlider.vue'
import CardDoctorDesktop from '@/components/app/CardDoctorDesktop.vue'
import CardDoctorMobile from '@/components/app/CardDoctorMobile.vue'
import SearchDoctorDesktop from '@/components/app/SearchDoctorDesktop.vue'
import SearchDoctorMobile from '@/components/app/SearchDoctorMobile.vue'
import SelectDoctorMobile from '@/components/app/SelectDoctorMobile.vue'
import SortDoctorParametrs from '@/components/app/SortDoctorParametrs.vue'

export default {
  components: {
    MainSlider,
    CardDoctorDesktop,
    CardDoctorMobile,
    SearchDoctorDesktop,
    SearchDoctorMobile,
    SelectDoctorMobile,
    SortDoctorParametrs,
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
  transition: all 1s;

  @media (max-width: 600px) {
    transition: all 1s;
    font-size: 10px;
    line-height: 16px;
  }
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
    padding: 30px 10px 27px 10px;
    margin-left: auto;
    margin-right: auto;
    transition: all 1s;
    overflow: hidden;
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

        @media (max-width: 600px) {
          display: none;
        }

        &__green {
          color: $color-green;
          font-weight: 700;
        }
      }

      &__title-mob {
        display: none;

        @media (max-width: 600px) {
          display: block;
          text-align: center;
          font-family: $head-font-family;
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: 26px;
        }

        &__green {
          color: $color-green;
          font-weight: 600;
        }
      }

      &__group-btns {
        display: flex;
        margin-top: 21px;
        gap: 13px;
        margin-bottom: 10px;
        margin-left: 18px;

        @media (max-width: 1000px) {
          transition: all 1s;
          justify-content: center;
        }
      }
    }

    &__block-2-mob {
      display: none;
      position: relative;

      @media (max-width: 1100px) {
        margin-top: 20px;
        margin-left: 100px;
        margin-bottom: 20px;
        display: block;
        width: 284px;
        height: 320px;
      }

      @media (max-width: 600px) {
        transition: all 1s;
        margin-left: 25%;
      }

      @media (max-width: 450px) {
        transition: all 1s;
        margin-left: 15%;
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
    transition: all 1s;

    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
    }

    @media (max-width: 600px) {
      transition: all 1s;
      gap: 12px;
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

      @media (max-width: 600px) {
        transition: all 1s;
        width: 100%;
        height: 130px;
      }

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
        @media (max-width: 600px) {
          transform: translateX(18px) translateY(10px);
          font-size: 16px;
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
        @media (max-width: 600px) {
          transform: translateX(45px);
          font-size: 12px;
          font-style: normal;
          line-height: 16px;
          letter-spacing: 0.06px;
          transition: all 1s;
        }
      }

      &__href {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        @media (max-width: 600px) {
          transform: translateY(-20px);
        }
      }

      &__href-text {
        display: flex;
        justify-content: flex-end;
        color: #fff;
        @extend .text-style-1;
        text-align: end;
        margin-right: 26px;
        text-decoration-line: underline;

        @media (max-width: 600px) {
          font-size: 10px;
          letter-spacing: 0.05px;
          margin-top: 3px;
          margin-right: 13px;
        }
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

      @media (max-width: 600px) {
        transition: all 1s;
        width: 100%;
        height: 130px;
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

  @media (max-width: 600px) {
    width: 16px;
    height: 16px;
    padding-top: 2px;
    margin-right: 18px;
    background-image: url('@/assets/images/mobile/svg/right-vector-icon-orange.svg');
    background-repeat: no-repeat;
  }
}
.right-vect-i-green {
  width: 26px;
  height: 26px;
  margin-right: 29px;
  background-image: url('@/assets/images/svg/right-vector-icon-2.svg');
  background-repeat: no-repeat;

  @media (max-width: 600px) {
    width: 16px;
    height: 16px;
    padding-top: 2px;
    margin-right: 18px;
    background-image: url('@/assets/images/mobile/svg/right-vector-icon-green.svg');
    background-repeat: no-repeat;
  }
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
  display: block;
  @media (max-width: 1100px) {
    display: none;
  }
}

.desktop {
  display: block;
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
.mobile-sm {
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
}
</style>
