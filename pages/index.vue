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
        <main-slider />
      </div>
      <div class="main-page__container__block-2"></div>
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
.main-page {
  padding: 79px 130px 27px 238px;

  &__container {
    display: flex;

    &__block-1 {
      &__title {
        font-family: $head-font-family;
        font-size: 48px;
        font-style: normal;
        font-weight: 500;
        line-height: 50px;

        &__green {
          color: $color-green;
          font-weight: 700;
        }
      }
      &__group-btns {
        display: flex;
        margin-top: 21px;
        gap: 13px;
      }
    }

    &__block-2 {
    }
  }
}
</style>
