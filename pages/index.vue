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
  padding: 79px 130px 27px 226px;

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
          189px 23px 87px 15px rgba(5, 142, 110, 0.14);
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
}
</style>
