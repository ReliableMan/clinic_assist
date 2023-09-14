<template>
  <div class="choose-doctor">
    <div class="choose-doctor__content">
      <p class="choose-doctor__content__text">Обратиться к дежурному доктору</p>
      <div class="choose-doctor__content__img">
        <img
          class="choose-doctor__content__img__doctor-1"
          src="@/assets/images/mobile/svg/doctor-1.svg"
          alt="doctor-1"
        />
        <img
          class="choose-doctor__content__img__doctor-2"
          src="@/assets/images/mobile/svg/doctor-2.svg"
          alt="doctor-2"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.sass';

.choose-doctor {
  margin-top: 18px;
  max-width: 1225px;
  height: 83px;
  border-radius: 10px;
  background-image: url('@/assets/images/background-img-1.png');

  @media (max-width: 600px) {
    margin-left: 16px;
  }

  &__content {
    width: 100%;
    height: 83px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    &__text {
      color: #fff;
      font-family: $base-font-family;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
    }

    &__img {
      position: relative;
      display: flex;
      width: 93px;
      height: 46px;
      background-image: url('@/assets/images/mobile/svg/background-img-2.svg');
      background-repeat: no-repeat;

      &__doctor-1 {
        position: absolute;
        right: 40px;
        top: -7px;
        width: 61px;
        height: 56px;
      }
      &__doctor-2 {
        position: absolute;
        right: -8px;
        top: -7px;
        width: 61px;
        height: 56px;
      }
    }
  }
}
</style>
