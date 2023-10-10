<template>
  <div class="params__block__checkbox">
    <ui-checkbox v-model="value" />
    <span class="params__block__checkbox__name"> Дата/Время </span>
    <ui-dropdown
      :offset="[-150, 25]"
      no-padding
      placement="bottom-start"
      class="dataDropdown"
      :shown="value"
    >
      <template #portal>
        <div
          class="dataDropdown__content"
          :class="{ 'add-height': allWorkingHours }"
        >
          <span class="dataDropdown__content__title"> Дата/Время </span>
          <ui-swiper :swiper-options="options" class="date-slider">
            <ui-swiper-slide
              v-for="day in days"
              :key="day.id"
              class="dataDropdown__content__days"
            >
              <div class="dataDropdown__content__cont">
                <span class="text-style-days">{{ day.name }}</span>
                <button class="dataDropdown__content__btns" @click="setActive">
                  <span class="dataDropdown__content__btns__text">
                    {{ day.date }}
                  </span>
                </button>
              </div>
            </ui-swiper-slide>
            <template #navigation>
              <ui-swiper-navigation position="horizontal" />
            </template>
          </ui-swiper>
          <div v-if="!allWorkingHours">
            <div class="dataDropdown__content__time">
              <button
                v-for="item in time1"
                :key="item.id"
                class="dataDropdown__content__time__item"
              >
                <span class="dataDropdown__content__time__item__text">
                  {{ item.label }}
                </span>
              </button>
              <button @click="allWorkingHours = !allWorkingHours">more</button>
            </div>
          </div>
          <div v-else>
            <div class="dataDropdown__content__time">
              <button
                v-for="item in time2"
                :key="item.id"
                class="dataDropdown__content__time__item"
              >
                <span class="dataDropdown__content__time__item__text">
                  {{ item.label }}
                </span>
              </button>
              <button @click="allWorkingHours = !allWorkingHours">less</button>
            </div>
          </div>
        </div>
      </template>
    </ui-dropdown>
  </div>
</template>

<script>
export default {
  name: 'DateAndTimeOption',
  data() {
    return {
      options: {
        slidesPerView: 7,
        slidesPerGroup: 3,
        navigation: {
          el: '.swiper-navigation',
          type: 'bullets',
          clickable: true,
        },
      },
      value: true,
      allWorkingHours: false,
    }
  },
  computed: {
    days() {
      return this.$store.getters[`date-and-time/date`]
    },
    time1() {
      return this.$store.getters[`date-and-time/time1`]
    },
    time2() {
      return this.$store.getters[`date-and-time/time2`]
    },
  },
  methods: {
    setActive(el) {
      const elem = el.target.closest('.dataDropdown__content__btns')
      const parentElems = document.querySelectorAll(
        '.dataDropdown__content__btns'
      )
      parentElems.forEach(function (elem) {
        elem.classList.remove('active-dropdown-btn')
      })
      elem.classList.contains('active-dropdown-btn')
        ? elem.classList.remove('active-dropdown-btn')
        : elem.classList.add('active-dropdown-btn')
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
.text-style-days {
  color: #999;
  text-align: center;
  font-family: $base-font-family;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
}
.params {
  width: 797px;
  height: 230px;
  border-radius: 10px;
  background-image: url('@/assets/images/search-doctor-bg-2.png');
  background-size: cover;
  padding-left: 26px;
  padding-right: 26px;
  position: relative;

  &__block {
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
}

.dataDropdown {
  &__content {
    padding: 10px;
    width: 307px;
    height: 253px;
    transition: all 1s;

    &__title {
      @extend .text-style-black;
      font-size: 12px;
      font-weight: 600;
      line-height: 16px;
      margin-bottom: 13px;
    }

    &__days {
      margin-top: 13px;
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
      justify-content: center;
      align-items: center;
      border-radius: 6px;
      border: 2px solid #b4e2c7;
      background: #fff;
      cursor: pointer;
      transition: all 0.3s;

      &__text {
        color: #469c79;
        text-align: center;
        font-family: $head-font-family;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
      }

      &:hover {
        transition: all 0.3s;
        background: #ff9901a3;
        box-shadow: 0px 2px 8px 0px rgba(51, 51, 51, 0.15);
        border: none;
      }
      &:hover > &__text {
        color: #fff;
      }
    }

    &__right-btn {
      margin-top: 5px;
      width: 21px;
      height: 21px;
      transition: all 0.5s;

      &:hover {
        transition: all 0.5s;
        cursor: pointer;
        border-radius: 15px;
        transform: scale(1.1);
        box-shadow: 0px 2px 8px 0px rgba(51, 51, 51, 0.15);
      }
    }

    &__time {
      padding: 29px 0px 31px 12px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      &__item {
        width: 60px;
        height: 30px;
        border-radius: 6px;
        border: 2px solid #b4e2c7;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &__text {
          @extend .text-style-black;
          font-size: 14px;
          font-weight: 600;
          line-height: 20px;
        }
      }
    }
  }
}

.date-slider {
  transition: all 1s;
  & ::v-deep {
    .ui-swiper__inner {
      margin-left: 22px;
      width: 240px;
    }
    .ui-swiper-navigation--horizontal .ui-swiper-navigation__left {
      top: 25px;
      border: 2px solid #469c79;
      transition: all 0.7s;
    }
    .ui-swiper-navigation--horizontal .ui-swiper-navigation__right {
      top: 25px;
      border: 2px solid #469c79;
      transition: all 0.7s;
    }
    .ui-button--static-sm {
      width: 21px;
      height: 21px;
      min-width: 21px;
    }
    .ui-button--disabled {
      opacity: 0;
      transition: all 0.7s;
    }
  }
}
.date-slider:has(.ui-swiper-navigation__left:disabled) {
  transition: all 1s;
  transform: translateX(-10px);
}

.date-slider:has(.ui-swiper-navigation__right:disabled) {
  transition: all 1s;
  transform: translateX(10px);
}

.active-dropdown-btn {
  background: #ff9901;
  border: none;
}
.active-dropdown-btn > .dataDropdown__content__btns__text {
  color: #fff;
}

.add-height {
  transition: all 1s;
  height: 330px;
}
</style>
