<template>
  <div class="params__block__checkbox">
    <ui-checkbox v-model="value" class="checkbox" />
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

          <!--* swiper days -->
          <days-swiper />

          <div v-if="!allWorkingHours">
            <div class="dataDropdown__content__time">
              <button
                v-for="item in time1"
                :key="item.id"
                class="dataDropdown__content__time__item"
                @click="setActive"
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
                @click="setActive"
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
</template>

<script>
import DaysSwiper from '@/components/ui/DaysSwiper.vue'
export default {
  name: 'DateAndTimeOption',
  components: {
    DaysSwiper,
  },
  data() {
    return {
      value: false,
      allWorkingHours: false,
    }
  },
  computed: {
    time1() {
      return this.$store.getters[`date-and-time/time1`]
    },
    time2() {
      return this.$store.getters[`date-and-time/time2`]
    },
  },
  methods: {
    setActive(el) {
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
    transition: all 0.7s;

    &__title {
      @extend .text-style-black;
      font-size: 12px;
      font-weight: 600;
      line-height: 16px;
      margin-bottom: 13px;
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
      padding: 20px 0px 31px 12px;
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
.active-dropdown-btn {
  box-shadow: 0px 2px 8px 0px rgba(51, 51, 51, 0.15);
  background: #ff9901;
  border: none;
}
.active-dropdown-btn > .dataDropdown__content__time__item__text {
  color: #fff;
}

.add-height {
  transition: all 0.7s;
  height: 330px;
}

.checkbox {
  & ::v-deep {
    .ui-checkbox__input:checked + .ui-checkbox__box {
      background-color: #ff9901;
      border: none;
    }
    .ui-checkbox__box {
      border: none;
    }
  }
}
</style>
