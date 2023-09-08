<template>
  <section>
    <ui-swiper :swiper-options="swiperOptions" class="main-slider">
      <ui-swiper-slide
        v-for="(item, index) in items"
        :key="item.id"
        class="main-slider__slide"
      >
        <h3>{{ index }}</h3>

        <div class="main-slider__container">
          <img
            :src="item.image"
            :alt="item.title"
            class="main-slider__image"
            width="65"
            height="65"
          />
          <div class="main-slider__name">{{ item.title }}</div>
        </div>
      </ui-swiper-slide>

      <template v-if="items.length > 1" #pagination>
        <ui-swiper-pagination class="mt-40" />
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
          image: require('@/assets/images/svg/main-slaider/doctor-icon.svg'),
          title: 'some text',
        },
        {
          id: 2,
          image: require('@/assets/images/svg/main-slaider/doctor-icon.svg'),
          title: 'some text',
        },
        {
          id: 3,
          image: require('@/assets/images/svg/main-slaider/doctor-icon.svg'),
          title: 'some text',
        },
        {
          id: 4,
          image: require('@/assets/images/svg/main-slaider/doctor-icon.svg'),
          title: 'some text',
        },
        {
          id: 5,
          image: require('@/assets/images/svg/main-slaider/doctor-icon.svg'),
          title: 'some text',
        },
        {
          id: 6,
          image: require('@/assets/images/svg/main-slaider/doctor-icon.svg'),
          title: 'some text',
        },
        {
          id: 7,
          image: require('@/assets/images/svg/main-slaider/doctor-icon.svg'),
          title: 'some text',
        },
        {
          id: 8,
          image: require('@/assets/images/svg/main-slaider/doctor-icon.svg'),
          title: 'some text',
        },
        {
          id: 9,
          image: require('@/assets/images/svg/main-slaider/doctor-icon.svg'),
          title: 'some text',
        },
      ]
    },
  },
}
</script>

<style lang="sass" scoped>
.main-slider
  width: 100%

  &__slide
    display: flex
    flex-direction: column
    width: 100px
    height: 150px


  &__container
    width: 300px
    height: 108px
    border-radius: 16px
    background-color: $color-white
    box-shadow: 0px 4px 30px 0px rgba(5, 142, 110, 0.14)
    display: flex

  &__image
    display: block

  &__name
    margin-bottom: 20px
    font-weight: 600
    font-size: 16px
    line-height: 22px

  & ::v-deep
    .ui-swiper-pagination
      justify-content: flex-start !important

    .swiper-pagination-bullet
      opacity: 1 !important
      background-color: $color-blue-lighten-1 !important
      position: relative
      transition: all $transition-timing

      &.swiper-pagination-bullet-active
        background-color: $color-primary !important

      &::before
        content: ""
        width: 100%
        height: 100%
        position: absolute
        top: 0
        left: 0
        border: 2px solid $color-primary
        visibility: hidden
        opacity: 0
        border-radius: 100%
        transition: all $transition-timing
        box-sizing: border-box

      &:not(.swiper-pagination-bullet-active):hover
        &::before
          visibility: visible
          opacity: 1
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
</style>
