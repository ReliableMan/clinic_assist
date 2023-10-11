<template>
  <div>
    <ui-swiper :swiper-options="options" class="date-slider">
      <ui-swiper-slide
        v-for="day in days"
        :key="day.id"
        class="dataDropdown__content__days"
      >
        <div class="dataDropdown__content__cont">
          <span class="text-style-days">{{ day.name }}</span>
          <ui-dropdown
            :offset="[10, 8]"
            no-padding
            placement="bottom-end"
            class="dataDropdown"
            trigger="hover"
            hover-portal
          >
            <button class="dataDropdown__content__btns" @click="setActive">
              <span class="dataDropdown__content__btns__text">
                {{ day.date }}
              </span>
            </button>
            <template #portal>
              <div
                class="dataDropdown__content"
                :class="{ 'add-height': allWorkingHours }"
              >
                <div v-if="!allWorkingHours">
                  <div class="dataDropdown__content__time">
                    <button
                      v-for="item in time1"
                      :key="item.id"
                      class="dataDropdown__content__time__item"
                      @click="setActive2"
                    >
                      <span class="dataDropdown__content__time__item__text">
                        {{ item.label }}
                      </span>
                    </button>
                    <button
                      class="dataDropdown__content__time__moreBtn"
                      @click="allWorkingHours = !allWorkingHours"
                    >
                      <ui-icon
                        class="dataDropdown__content__time__green-i reverse"
                        name="ChevronUp"
                      />
                    </button>
                  </div>
                </div>
                <div v-else>
                  <div class="dataDropdown__content__time">
                    <button
                      v-for="item in time2"
                      :key="item.id"
                      class="dataDropdown__content__time__item"
                      @click="setActive2"
                    >
                      <span class="dataDropdown__content__time__item__text">
                        {{ item.label }}
                      </span>
                    </button>
                    <button
                      class="dataDropdown__content__time__moreBtn"
                      @click="allWorkingHours = !allWorkingHours"
                    >
                      <ui-icon
                        class="dataDropdown__content__time__green-i"
                        name="ChevronUp"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </template>
          </ui-dropdown>
        </div>
      </ui-swiper-slide>
      <template #navigation>
        <ui-swiper-navigation position="horizontal" />
      </template>
    </ui-swiper>
  </div>
</template>

<script>
export default {
  name: 'DaysSwiperWithTime',
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
      value: false,
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
      this.value = !this.value
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
    setActive2(el) {
      this.value = !this.value
      const elem = el.target.closest('.dataDropdown__content__time__item')
      const parentElems = document.querySelectorAll(
        '.dataDropdown__content__time__item'
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
.date-slider {
  transition: all 0.7s;
  & ::v-deep {
    .ui-swiper__inner {
      margin-left: 21px;
      width: 245px;
    }
    .ui-swiper-navigation--horizontal .ui-swiper-navigation__left {
      top: 20px;
      border: 2px solid #469c79;
      transition: all 0.7s;
    }
    .ui-swiper-navigation--horizontal .ui-swiper-navigation__right {
      top: 20px;
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
  transition: all 0.7s;
  transform: translateX(-25px);
}

.date-slider:has(.ui-swiper-navigation__right:disabled) {
  transition: all 0.7s;
  transform: translateX(10px);
}

.dataDropdown {
  &__content {
    padding: 10px;
    width: 289px;
    height: 122px;
    transition: all 0.7s;

    &__days {
      margin-top: 13px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    &__cont {
      display: flex;
      flex-direction: column;
      height: 55px;
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
        box-shadow: 0px 2px 8px 0px rgba(51, 51, 51, 0.15);
        border: none;
      }
    }

    &__time {
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

      &__moreBtn {
        width: 60px;
        height: 30px;
        border: none;
        border-radius: 6px;
        background: #e7f4f1;
        box-shadow: 0px 2px 8px 0px rgba(51, 51, 51, 0.15);
        cursor: pointer;
        transition: all 0.5s;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          box-shadow: none;
          transition: all 0.5s;
        }
      }

      &__green-i {
        color: #469c79;
      }
    }
  }
}
.reverse {
  transform: rotate(0.5turn);
}
.add-height {
  transition: all 0.7s;
  height: 205px;
}
.active-dropdown-btn {
  box-shadow: 0px 2px 8px 0px rgba(51, 51, 51, 0.15);
  background: #ff9901;
  border: none;
}
.active-dropdown-btn > .dataDropdown__content__btns__text {
  color: #fff;
}
.active-dropdown-btn > .dataDropdown__content__time__item__text {
  color: #fff;
}
</style>
