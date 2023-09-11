<template>
  <div class="main-page">
    <div class="main-page__container">
      <div class="main-page__container__block-1">
        <h2 class="main-page__container__block-1__title">
          Консультация <br />
          врача
          <span class="main-page__container__block-1__title__green"
            >онлайн</span
          >
        </h2>
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
        <div class="mr-120">
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
    <div v-for="(n, i) in 3" :key="i">
      <div class="main-page__container-4">
        <!-- avatar -->
        <img
          class="main-page__container-4__img-avatar"
          src="@/assets/images/avatar-doctor.png"
          alt="avatar-doctor"
        />
        <div class="online-doctor-i main-page__container-4__online-icon"></div>
        <!-- bio -->
        <div class="main-page__container-4__bio">
          <p class="main-page__container-4__bio__name">
            Коваль Ольга Валентиновна
          </p>
          <p class="main-page__container-4__bio__specialist">Травматолог</p>
          <div class="main-page__container-4__bio__degree">
            <span class="green-hat-icon mr-10"></span>
            Высшая категория, кандидат медицинских наук
          </div>
          <div class="main-page__container-4__bio__experience">
            <span class="green-plus-icon mr-10"></span>
            Стаж: 5 лет
          </div>
        </div>
        <!-- schedule -->
        <div class="main-page__container-4__schedule">
          <p class="main-page__container-4__schedule__text">Доступные даты</p>
          <div class="main-page__container-4__schedule__days">
            <div
              v-for="day in days"
              :key="day.id"
              class="main-page__container-4__schedule__cont"
            >
              <span class="text-style-days">{{ day.name }}</span>
              <ui-button
                class="main-page__container-4__schedule__btns"
                color="success"
                outlined
              >
                {{ day.date }}
              </ui-button>
            </div>
            <img
              width="25px"
              height="25px"
              src="@/assets/images/svg/right-vector-icon-2.svg"
              alt="vector-right-vector"
            />
          </div>
          <div class="main-page__container-4__schedule__price">
            <ui-button
              class="main-page__container-4__schedule__price__btn"
              light-shadow
            >
              <span class="rub-number-2">2400</span>
              <img
                src="@/assets/images/svg/vector-rub-dark.svg"
                alt="ru-icon-dark"
              />
            </ui-button>
            <ui-button width="185px" color="warning"> Записаться </ui-button>
          </div>
        </div>
      </div>
      <button type="button" class="rating-btn">
        <img
          width="15px"
          height="15px"
          src="@/assets/images/svg/mini-star-icon.svg"
          alt="mini-star-icon"
        />
        <span class="rating-btn__number">5</span>
      </button>
    </div>
  </div>
</template>

<script>
import MainSlider from '@/components/app/MainSlider.vue'

export default {
  components: {
    MainSlider,
  },
  layout: 'public',
  data() {
    return {
      value: false,
      value2: false,
      isActiveSlider: false,
    }
  },
  computed: {
    days() {
      return [
        { id: 1, name: 'ср', date: 12 },
        { id: 2, name: 'чт', date: 15 },
        { id: 3, name: 'пт', date: 19 },
        { id: 4, name: 'сб', date: 20 },
        { id: 5, name: 'вс', date: 21 },
        { id: 6, name: 'пн', date: 22 },
        { id: 7, name: 'вт', date: 25 },
      ]
    },
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
.text-style-days {
  color: #999;
  text-align: center;
  font-family: Segoe UI;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
}
.main-page {
  padding: 79px 15vw 27px 15vw;

  &__container {
    display: flex;

    &__block-1 {
      &__title {
        font-family: $head-font-family;
        font-size: 48px;
        font-style: normal;
        font-weight: 500;
        line-height: 50px;
        margin-left: 18px;

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
      }
      &__img-doctor {
        position: absolute;
        top: 92px;
        left: 347px;
        border-radius: 52px;
        transform: rotate(12.743deg);
      }
    }
  }

  &__container-2 {
    margin-top: 28px;
    display: flex;
    gap: 47px;

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
      }

      &__list {
        transform: translateX(112px) translateY(10px);
        color: #fff;
        @extend .text-style-1;
        list-style-type: disc;
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

  &__container-4 {
    position: relative;
    width: 100%;
    display: flex;
    margin-top: 56px;

    &__img-avatar {
      width: 165px;
      height: 165px;
      border-radius: 15px;
    }

    &__online-icon {
      position: absolute;
      bottom: 20px;
      left: 140px;
      z-index: 2;
    }

    &__bio {
      margin-left: 45px;
      display: flex;
      flex-direction: column;

      &__name {
        width: 379px;
        height: 20px;
        color: #333;
        font-family: $base-font-family;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 11px;
      }

      &__specialist {
        width: 123px;
        height: 20px;
        color: #333;
        font-family: $base-font-family;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px;
        margin-bottom: 25px;
      }

      &__degree,
      &__experience {
        color: #333;
        font-family: $base-font-family;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        height: 30px;
      }
    }

    &__schedule {
      margin-left: 10vw;
      display: flex;
      flex-direction: column;

      &__text {
        color: #333;
        font-family: $base-font-family;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 16px;
      }

      &__days {
        margin-top: 5px;
        width: 22vw;
        margin-left: -10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      &__cont {
        display: flex;
        flex-direction: column;
      }

      &__btns {
        margin-top: 5px;
        margin-left: 2px;
        width: 36px;
        height: 36px;
      }

      &__price {
        margin-top: 15px;

        &__btn {
          width: 136px;
          text-align: center;
          margin-right: 20px;
        }
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
.rub-number-2 {
  color: #333;
  font-family: $head-font-family;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
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

.green-hat-icon {
  display: inline-block;
  width: 18px;
  height: 15px;
  background-image: url('@/assets/images/svg/vector-green-hat.svg');
  background-repeat: no-repeat;
}
.green-plus-icon {
  display: inline-block;
  width: 17px;
  height: 15px;
  background-image: url('@/assets/images/svg/vector-green-plus.svg');
  background-repeat: no-repeat;
}
.online-doctor-i {
  display: inline-block;
  border-radius: 50%;
  width: 21px;
  height: 18px;
  background-image: url('@/assets/images/online-doctor-icon.png');
  background-repeat: no-repeat;
}

.rating-btn {
  width: 104px;
  height: 31px;
  margin-top: 5px;
  margin-left: 30px;
  border-radius: 50px;
  border: 1px solid #fcb016;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 7px;

  &__number {
    color: #6f7173;
    font-family: $head-font-family;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
  }
}
</style>
