<template>
  <div class="container-3">
    <div class="container-3__block-1">
      <p class="container-3__block-1__text">Выберите параметры поиска</p>
      <div class="container-3__block-1__rub-text">
        ваш баланс:
        <p class="rub-number">100</p>
        <p class="ru-icon"></p>
      </div>
    </div>
    <div class="container-3__block-2">
      <div>
        <ui-input-label>
          <span class="ui-label">Специализация</span>
          <ui-input
            class="container-3__block-2__input"
            placeholder="Педиатр, терпевт, невролог"
          />
        </ui-input-label>
      </div>
      <div>
        <ui-input-label>
          <span class="ui-label">ФИО</span>
          <ui-input
            class="container-3__block-2__input"
            placeholder="Сидоров Иван Петрович"
          />
        </ui-input-label>
      </div>
    </div>
    <ui-container class="container-3__block-3">
      <div class="block-3">
        <!-- item 1 -->
        <div class="container-3__block-3__img-gender-i">
          <img
            width="92"
            height="46"
            src="@/assets/images/svg/gender-icon.svg"
            alt="gender-icon"
          />
        </div>
        <!-- item 2 -->
        <div class="container-3__block-3__checkbox">
          <ui-checkbox v-model="value" />
          <span class="container-3__block-3__checkbox__name">
            Доступен сегодня
          </span>
        </div>
      </div>
      <div class="block-3-1">
        <!-- item 3 -->
        <div class="container-3__block-3__checkbox">
          <ui-checkbox v-model="value2" />
          <span class="container-3__block-3__checkbox__name"> Дата/Время </span>
        </div>
        <!-- item 4 -->
        <ui-button color="warning"> Найти </ui-button>
        <!-- item 5 -->
        <div>
          <img
            width="130"
            height="60"
            src="@/assets/images/svg/group_doctors.svg"
            alt="group_doctors"
          />
        </div>
      </div>
    </ui-container>
    <div class="container-3__block-4">
      <span class="container-3__block-4__text"> Дежурный терапевт </span>
      <span class="container-3__block-4__text"> Дежурный педиатр </span>
    </div>
    <div class="container-3__block-5">
      <span class="container-3__block-5__text"> Сбросить фильтры </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: false,
      value2: false,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.sass';

.container-3 {
  position: relative;
  margin-top: 51px;
  max-width: 1225px;
  height: 268px;
  border-radius: 10px;
  background-image: url('@/assets/images/background-img-1.png');
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    display: none;
  }

  &__block-1 {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &__text {
      font-family: $base-font-family;
      color: #fff;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;
    }

    &__rub-text {
      width: 120px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      transform: translateX(340px);
      font-family: $base-font-family;
      font-family: Segoe UI;
      color: #fff;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;

      @media (max-width: 1350px) {
        transform: translateX(20vw);
      }
      @media (max-width: 1000px) {
        transform: translateX(10vw);
      }
    }
  }

  &__block-2 {
    max-width: 1225px;
    display: flex;
    justify-content: center;
    gap: 10vw;

    &__input {
      width: 33vw;

      @media (min-width: 1500px) {
        width: 32vw;
      }
      @media (min-width: 1600px) {
        width: 450px;
      }
    }
  }

  &__block-3 {
    margin-top: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px 0 44px;

    &__img-gender-i {
      margin-right: 120px;

      @media (max-width: 1300px) {
        margin-right: 40px;
      }
    }

    &__checkbox {
      display: flex;
      align-items: center;
      gap: 10px;

      &__name {
        color: #fff;
        font-family: $base-font-family;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
      }
    }
  }

  &__block-4 {
    position: absolute;
    bottom: 40px;
    right: 50px;
    display: flex;
    gap: 5px;

    &__text {
      display: block;
      width: 43px;
      color: #fff;
      text-align: center;
      font-family: $base-font-family;
      font-size: 8px;
      font-style: normal;
      font-weight: 600;
      line-height: 8px;
    }
  }

  &__block-5 {
    text-align: center;

    &__text {
      color: #fff;
      font-family: $base-font-family;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: 16px;
      text-decoration-line: underline;
    }
  }
}
.ui-label {
  padding-left: 20px;
  color: #fff !important;
  font-family: $base-font-family;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
}

.block-3 {
  width: 33vw;
  display: flex;
  justify-content: space-between;
  margin-left: 25px;
  padding-right: 40px;
}
.block-3-1 {
  width: 33vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
}
.ru-icon {
  width: 8px;
  height: 10px;
  background-image: url('@/assets/images/svg/vector-rub.svg');
  background-repeat: no-repeat;
}
</style>
