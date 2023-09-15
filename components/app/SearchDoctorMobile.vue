<template>
  <div class="container-3-mob">
    <div class="container-3-mob__block-1">
      <span class="container-3-mob__block-1__text">
        Выберите параметры поиска
      </span>
    </div>
    <div class="container-3-mob__block-2">
      <ui-input-label>
        <span class="ui-label">Специализация</span>
        <ui-input
          class="container-3-mob__block-2__input"
          placeholder="Педиатр, терпевт, невролог"
        />
      </ui-input-label>

      <ui-input-label>
        <span class="ui-label">ФИО</span>
        <ui-input
          class="container-3-mob__block-2__input"
          placeholder="Сидоров Иван Петрович"
        />
      </ui-input-label>
    </div>
    <div class="container-3-mob__block-3">
      <ui-button class="container-3-mob__block-3__filter-btn">
        <span class="container-3-mob__block-3__filter-btn__text">
          Фильтры
        </span>
        <img
          src="@/assets/images/mobile/svg/filter-icon.svg"
          alt="filter-icon"
        />
      </ui-button>
      <ui-button class="container-3-mob__block-3__search-btn" color="warning">
        Найти
      </ui-button>
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

// .container-3-mob {

//   @media (max-width: 1000px){

//   }
// }
.container-3-mob {
  display: none;

  @media (max-width: 1000px) {
    position: relative;
    margin-top: 51px;
    max-width: 1225px;
    height: 268px;
    border-radius: 10px;
    background-image: url('@/assets/images/background-img-1.png');
    display: flex;
    flex-direction: column;

    @media (max-width: 600px) {
      margin-top: 12px;
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
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 6px;
      }
    }

    &__block-2 {
      margin-top: -30px;
      display: flex;
      flex-direction: column;
      padding-right: 18px;
      padding-left: 18px;
    }

    &__block-3 {
      display: flex;
      margin-top: 24px;
      padding-right: 18px;
      padding-left: 18px;
      gap: 26px;

      &__filter-btn {
        width: 148px;

        &__text {
          color: #469c79;
          font-family: $base-font-family;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 20px;
          margin-right: 20px;
        }
      }

      &__search-btn {
        width: 133px;
      }
    }
  }
  .ui-label {
    padding-left: 20px;
    color: #fff !important;
    font-family: $base-font-family;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 12px;
  }
}
</style>
