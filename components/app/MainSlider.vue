<template>
  <section>
    <ui-swiper :swiper-options="swiperOptions" class="main-slider">
      <ui-swiper-slide
        v-for="item in items"
        :key="item.id"
        class="main-slider__slide"
      >
        <div class="main-slider__textarea">
          <p v-if="item.id === 1" class="main-slider__text">
            Наши дежурные врачи всегда рядом
          </p>
          <p v-if="item.id === 2" class="main-slider__text">
            Узкие специалисты по записи<br />в удобное для Вас время
          </p>
          <p v-if="item.id === 3" class="main-slider__text">
            Быстрее и безопаснее поиска<br />ответа в интернете
          </p>
        </div>
        <div class="main-slider__container">
          <img
            :src="item.image"
            :alt="item.title"
            width="66"
            height="66"
            class="main-slider__image"
          />
          <div class="main-slider__title">{{ item.title }}</div>
        </div>
      </ui-swiper-slide>

      <template v-if="items.length > 1" #pagination>
        <ui-swiper-pagination class="mt-10 pagination" />
      </template>
    </ui-swiper>
  </section>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        slidesPerView: 1,
        slidesPerColumn: 3,
        slidesPerGroup: 1,
      },
    }
  },
  computed: {
    items() {
      return [
        {
          id: 1,
          image: require('@/assets/images/svg/main-slaider/question-icon.svg'),
          title:
            'Могут решить до 80% вопросов в момент обращения, без ожидания',
        },
        {
          id: 2,
          image: require('@/assets/images/svg/main-slaider/star-icon.svg'),
          title: 'Опытные и специально обученные телемедицине специалисты',
        },
        {
          id: 3,
          image: require('@/assets/images/svg/main-slaider/target-icon.svg'),
          title: 'Только 1 из 100 кандидатов врачей попадает на наш сервис',
        },
        {
          id: 4,
          image: require('@/assets/images/svg/main-slaider/doctor-icon.svg'),
          title: 'Дежурные терапевты и педиатры доступны 24/7',
        },
        {
          id: 5,
          image: require('@/assets/images/svg/main-slaider/hat_emergency-icon.svg'),
          title: '25+ медицинских специальностей',
        },
        {
          id: 6,
          image: require('@/assets/images/svg/main-slaider/microskop-icon.svg'),
          title: 'Многоуровневый контроль медицинского качества и сервиса',
        },
        {
          id: 7,
          image: require('@/assets/images/svg/main-slaider/clock-icon.svg'),
          title: 'Время ответа доктора – до 5 минут',
        },
        {
          id: 8,
          image: require('@/assets/images/svg/main-slaider/medical_record-icon.svg'),
          title:
            'Медицинская преемственность: история обращений, 1 пациент – 1 доктор',
        },
        {
          id: 9,
          image: require('@/assets/images/svg/main-slaider/emergency_call-icon.svg'),
          title:
            'Быстрая связь с доктором в любом формате: видео, аудио или чат',
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.sass';

.main-slider {
  width: 545px;

  @media (max-width: 600px) {
    width: 95vw;
  }

  &__slide {
    display: flex;
    flex-direction: column;
    width: 100px;
  }

  &__textarea {
    width: 100%;
  }

  &__text {
    text-align: center;
    font-family: $head-font-family;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
    height: 95px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1s;

    @media (max-width: 600px) {
      transition: all 1s;
      font-size: 12px;
      line-height: 18px;
      height: 70px;
    }
  }

  &__container {
    margin-left: 18px;
    margin-bottom: 15px;
    padding-left: 20px;
    gap: 49px;
    width: 509px;
    height: 108px;
    border-radius: 16px;
    background-color: $color-white;
    box-shadow: 0px 4px 23px 0px rgba(5, 142, 110, 0.14);
    display: flex;
    align-items: center;
    transition: all 1s;

    @media (max-width: 600px) {
      width: 90%;
      height: 90px;
      gap: 26px;
      transition: all 1s;
    }
  }

  &__image {
    display: block;
    background-image: url('../../assets/images/svg/main-slaider/Ellipse-green-fill.svg');
    background-repeat: no-repeat;
  }

  &__title {
    width: 350px;
    font-family: $base-font-family;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    transition: all 1s;

    @media (max-width: 600px) {
      width: 230px;
      font-size: 12px;
      line-height: 16px;
      transition: all 1s;
    }
    @media (max-width: 400px) {
      width: 180px;
      font-size: 12px;
      line-height: 16px;
      transition: all 1s;
    }
  }

  & ::v-deep {
    .ui-swiper-pagination {
      justify-content: flex-start !important;
    }

    .swiper-pagination-bullet {
      opacity: 1 !important;
      position: relative;
      transition: all $transition-timing;
      background-color: $color-grey-lighten-4 !important;
    }

    &.swiper-pagination-bullet-active {
      background-color: $color-orange !important;
    }

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border: 2px solid $color-orange;
      visibility: hidden;
      opacity: 0;
      border-radius: 100%;
      transition: all $transition-timing;
      box-sizing: border-box;
    }

    &:not(.swiper-pagination-bullet-active):hover &::before {
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>

<style>
.swiper-container-multirow-column > .swiper-wrapper {
  display: flex;
  flex-wrap: unset;
  flex-direction: unset;
}
.swiper-container-multirow > .swiper-wrapper {
  flex-wrap: wrap;
}
.pagination {
  width: 509px;
  display: flex;
  justify-content: center;
}
@media (max-width: 600px) {
  .pagination {
    width: 100%;
  }
}
.ui-swiper-pagination__right,
.ui-swiper-pagination__left {
  color: grey !important;
}
</style>
