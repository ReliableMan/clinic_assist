<template>
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
</template>

<script>
export default {
  name: 'DaysSwiper',
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
    }
  },
  computed: {
    days() {
      return this.$store.getters[`date-and-time/date`]
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
      margin-left: 22px;
      width: 240px;
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
  transform: translateX(-10px);
}

.date-slider:has(.ui-swiper-navigation__right:disabled) {
  transition: all 0.7s;
  transform: translateX(10px);
}

.dataDropdown {
  &__content {
    padding: 10px;
    width: 307px;
    height: 253px;
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
        background: #ff9901a3;
        box-shadow: 0px 2px 8px 0px rgba(51, 51, 51, 0.15);
        border: none;
      }
      &:hover > &__text {
        color: #fff;
      }
    }
  }
}
.active-dropdown-btn {
  box-shadow: 0px 2px 8px 0px rgba(51, 51, 51, 0.15);
  background: #ff9901;
  border: none;
}
.active-dropdown-btn > .dataDropdown__content__btns__text {
  color: #fff;
}
</style>
