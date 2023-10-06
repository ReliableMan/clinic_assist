<template>
  <div>
    <div class="search-doctor">
      <div class="search-doctor__params">
        <div class="d-flex flex-column items-center">
          <div class="search-doctor__params__block-1">
            <span class="title">Выберите параметры поиска</span>
            <div class="d-flex">
              <p class="title-balance">
                Ваш баланс
                <span class="title-balance-num">100</span>
                <span class="ru-icon"></span>
              </p>
            </div>
          </div>
          <div class="search-doctor__params__block-2">
            <div>
              <ui-input-label>
                <span class="ui-label">Специализация</span>
                <ui-input
                  class="search-doctor__params__block-2__input"
                  placeholder="Педиатр, терпевт, невролог"
                />
              </ui-input-label>
            </div>
            <div>
              <ui-input-label>
                <span class="ui-label">ФИО</span>
                <ui-input
                  class="search-doctor__params__block-2__input"
                  placeholder="Сидоров Иван Петрович"
                />
              </ui-input-label>
            </div>
          </div>
          <div class="search-doctor__params__block-3">
            <!-- elem 1 -->
            <img
              width="92"
              height="46"
              src="@/assets/images/svg/gender-icon.svg"
              alt="gender-icon"
            />
            <!-- elem 2 -->
            <div class="search-doctor__params__block-3__checkbox">
              <ui-checkbox v-model="value" />
              <span class="search-doctor__params__block-3__checkbox__name">
                Доступен сегодня
              </span>
            </div>
            <!-- elem 3 -->
            <div class="search-doctor__params__block-3__checkbox">
              <ui-checkbox v-model="value2" />
              <span class="search-doctor__params__block-3__checkbox__name">
                Дата/Время
              </span>
            </div>
            <!-- elem 4 -->
            <ui-button color="warning"> Найти </ui-button>
            <!-- elem 5 -->
            <div class="d-flex flex-column">
              <img
                width="130"
                height="60"
                src="@/assets/images/svg/group_doctors.svg"
                alt="group_doctors"
              />
              <div class="block-label">
                <span class="block-label__text"
                  >Дежурный <br />
                  терапевт</span
                >
                <span class="block-label__text"
                  >Дежурный <br />
                  педиатор</span
                >
              </div>
            </div>
          </div>
          <div class="search-doctor__params__block-4">
            <span class="search-doctor__params__block-4__text">
              Сбросить фильтры
            </span>
          </div>
        </div>
      </div>
      <div class="search-doctor__sorting">
        <div class="search-doctor__sorting__block">
          <span class="search-doctor__sorting__block__text">
            На сервисе <span class="text-bold">более 10 000 врачей</span>
          </span>
          <div class="ml-30">
            <ui-sorting
              v-model="valueforSorting"
              :items="items"
              label="Сортировка"
            />
          </div>
        </div>
        <ui-divider class="divider mt-20" horizontal />
      </div>
      <div v-for="(n, i) in 3" :key="i">
        <div class="search-doctor__card">
          <!-- avatar -->
          <div class="search-doctor__card__block-1">
            <img
              class="search-doctor__card__block-1__img-avatar"
              src="@/assets/images/avatar-doctor.png"
              alt="avatar-doctor"
            />
            <!-- green icon -->
            <div
              class="online-doctor-i search-doctor__card__block-1__icon"
            ></div>
          </div>
          <!-- bio -->
          <div class="search-doctor__card__block-2">
            <span class="search-doctor__card__block-2__name">
              Коваль Ольга Валентиновна
            </span>
            <span class="search-doctor__card__block-2__specialist">
              Травматолог
            </span>
            <div class="search-doctor__card__block-2__degree">
              <span class="green-hat-icon mr-10"></span>
              Высшая категория, кандидат медицинских наук
            </div>
            <div class="search-doctor__card__block-2__experience">
              <span class="green-plus-icon mr-10"></span>
              Стаж: 5 лет
            </div>
          </div>
          <!-- schedule -->
          <div class="search-doctor__card__block-3">
            <p class="search-doctor__card__block-3__text">Доступные даты</p>
            <div class="search-doctor__card__block-3__days">
              <div
                v-for="day in days"
                :key="day.id"
                class="search-doctor__card__block-3__cont"
              >
                <span class="text-style-days">{{ day.name }}</span>
                <ui-button
                  class="search-doctor__card__block-3__btns"
                  color="success"
                  outlined
                >
                  {{ day.date }}
                </ui-button>
              </div>
              <div class="mt-10">
                <img
                  width="25px"
                  height="25px"
                  src="@/assets/images/svg/right-vector-icon-2.svg"
                  alt="vector-right-vector"
                />
              </div>
            </div>
            <div class="search-doctor__card__block-3__price">
              <ui-button
                class="search-doctor__card__block-3__price__btn"
                light-shadow
              >
                <span class="rub-number-2">2400</span>
                <img
                  src="@/assets/images/svg/vector-rub-dark.svg"
                  alt="ru-icon-dark"
                />
              </ui-button>
              <ui-button
                class="search-doctor__card__block-3__to-sign"
                color="warning"
              >
                Записаться
              </ui-button>
            </div>
          </div>
        </div>
        <div class="search-doctor__rating">
          <button type="button" class="rating-btn">
            <img
              width="15px"
              height="15px"
              src="@/assets/images/svg/mini-star-icon.svg"
              alt="mini-star-icon"
            />
            <span class="rating-btn__number">5</span>
          </button>
          <ui-divider class="divider mt-34" horizontal />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllDoctors',
  data() {
    return {
      value: false,
      value2: false,
      valueforSorting: [null, null, null, null],
      items: [
        {
          key: 'rating',
          label: 'рейтинг',
        },
        {
          key: 'skill',
          label: 'стаж',
        },
        {
          key: 'price',
          label: 'стоимость',
        },
        {
          key: 'dating',
          label: 'ближайшая запись',
        },
      ],
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
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.sass';
.text-style {
  color: #fff;
  font-family: $base-font-family;
  font-style: normal;
}
.text-style-black {
  color: #333;
  font-family: $base-font-family;
  font-style: normal;
}
.search-doctor {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 33px;

  &__params {
    width: 797px;
    height: 230px;
    border-radius: 10px;
    background-image: url('@/assets/images/search-doctor-bg-2.png');
    background-size: cover;
    padding-left: 26px;
    padding-right: 26px;
    position: relative;

    &__block-1 {
      display: flex;
      align-items: baseline;
      margin-top: 24px;
    }

    &__block-2 {
      display: flex;
      gap: 24px;

      &__input {
        width: 360px;
        height: 46px;
        border-radius: 10px;
        background: #fff;
        box-shadow: 0px 4px 54px 0px rgba(68, 241, 166, 0.45);
      }
    }

    &__block-3 {
      width: 100%;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__checkbox {
        display: flex;
        align-items: center;
        gap: 10px;

        &__name {
          @extend .text-style;
          font-size: 18px;
          font-weight: 400;
          line-height: 22px;
        }
      }
    }

    &__block-4 {
      position: relative;
      width: 100px;

      &__text {
        @extend .text-style;
        font-size: 10px;
        font-weight: 600;
        line-height: 16px;
        text-decoration-line: underline;
        position: absolute;
        top: -7px;
        right: 0;
      }
    }
  }

  &__sorting {
    margin-top: 24px;
    width: 797px;

    &__block {
      display: flex;
      align-items: center;
      justify-content: space-around;

      &__text {
        @extend .text-style-black;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
      }
    }
  }

  &__card {
    width: 797px;
    margin-top: 24px;
    display: flex;

    &__block-1 {
      position: relative;

      &__img-avatar {
        width: 139px;
        height: 139px;
        border-radius: 20px;
        box-shadow: 0px 2px 20px 0px rgba(51, 51, 51, 0.1);
      }

      &__icon {
        position: absolute;
        bottom: 17px;
        right: 2px;
      }
    }

    &__block-2 {
      margin-left: 24px;
      display: flex;
      flex-direction: column;

      &__name {
        margin: 18px 0 8px 0;
        @extend .text-style-black;
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
      }

      &__specialist {
        @extend .text-style-black;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        margin-bottom: 14px;
      }

      &__degree,
      &__experience {
        @extend .text-style-black;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        height: 30px;
      }
    }

    &__block-3 {
      margin-left: 40px;
      display: flex;
      flex-direction: column;

      &__text {
        @extend .text-style-black;
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
      }

      &__days {
        margin-left: -5px;
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
        width: 30px;
        height: 30px;
        display: flex;
      }

      &__price {
        margin-top: 15px;

        &__btn {
          width: 103px;
          text-align: center;
          margin-right: 18px;
        }
      }

      &__to-sign {
        width: 168px;
      }
    }
  }

  &__rating {
    width: 797px;
  }
}
.text-style-days {
  color: #999;
  text-align: center;
  font-family: $base-font-family;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
}
.title {
  @extend .text-style;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
}
.title-balance {
  @extend .text-style;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  position: absolute;
  top: 24px;
  right: 27px;
}
.title-balance-num {
  @extend .text-style;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
}
.ru-icon {
  display: inline-block;
  width: 8px;
  height: 10px;
  background-image: url('@/assets/images/svg/vector-rub.svg');
  background-repeat: no-repeat;
}
.ui-label {
  padding-left: 20px;
  @extend .text-style;
  color: #f2f2f2;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
}
.block-label {
  display: flex;
  justify-content: center;
  gap: 5px;

  &__text {
    @extend .text-style;
    text-align: center;
    font-size: 8px;
    font-weight: 600;
    line-height: 8px;
  }
}
.divider {
  color: #b4e2c7;
}
.online-doctor-i {
  display: inline-block;
  border-radius: 50%;
  width: 21px;
  height: 18px;
  background-image: url('@/assets/images/online-doctor-icon.png');
  background-repeat: no-repeat;
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
.rating-btn {
  width: 81px;
  height: 24px;
  margin-top: 30px;
  margin-left: 30px;
  border-radius: 50px;
  border: 2px solid #fcb016;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 6px;

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

<router>
  {
    path: '/search/all-doctors',
    name: 'all-doctors',
  }
</router>
