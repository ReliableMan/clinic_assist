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
            <date-and-time-option />
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
      <!-- sorting -->
      <sorting-option />

      <!-- cards doctor -->
      <cards-doctors />
    </div>
  </div>
</template>

<script>
import DateAndTimeOption from '@/components/app/searchDoctorPage/DateAndTimeOption.vue'
import SortingOption from '@/components/app/searchDoctorPage/SortingOption.vue'
import CardsDoctors from '@/components/app/searchDoctorPage/CardsDoctors.vue'
export default {
  name: 'AllDoctors',
  components: {
    DateAndTimeOption,
    SortingOption,
    CardsDoctors,
  },
  data() {
    return {
      value: false,
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
</style>

<router>
  {
    path: '/search/all-doctors',
    name: 'all-doctors',
  }
</router>
