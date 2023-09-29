<template>
  <section>
    <div class="med-card">
      <div class="med-card__main">
        <div class="d-flex content-space-between">
          <div class="d-flex">
            <div class="med-card__main__bg-avatar">
              <!-- avatar -->
              <img
                class="med-card__main__avatar-patient"
                src="@/assets/images/edit-avatar-patient.png"
                alt="avatar-patient-logo"
              />
            </div>
            <div class="med-card__main__bio">
              <span class="med-card__main__bio__text"> Заполнить профиль </span>
            </div>
          </div>
          <!-- balance -->
          <div class="d-flex flex-column items-center">
            <ui-button class="med-card__main__balance-btn">
              <span class="med-card__main__balance-text">0</span>
              <img
                src="@/assets/images/svg/vector-rub-dark.svg"
                alt="ru-icon-dark"
              />
            </ui-button>
            <div class="d-flex items-center mt-10">
              <span class="med-card__main__balance-add">Пополнить</span>
              <img src="@/assets/images/svg/plus-icon-sm.svg" alt="plus-icon" />
            </div>
          </div>
        </div>

        <div class="med-card__main__personal-info">
          <!-- gender -->
          <img src="@/assets/images/svg/gender.svg" alt="gender-icon" />
          <!-- age -->
          <div class="d-flex flex-column items-center">
            <span class="med-card__main__personal-info__sign">–</span>
            <span class="med-card__main__personal-info__label">лет</span>
          </div>
          <!-- height -->
          <div class="d-flex flex-column items-center">
            <span class="med-card__main__personal-info__sign">–</span>
            <span class="med-card__main__personal-info__label">см</span>
          </div>
          <!-- weigth -->
          <div class="d-flex flex-column items-center">
            <span class="med-card__main__personal-info__sign">–</span>
            <span class="med-card__main__personal-info__label">кг</span>
          </div>
          <!-- rh factor -->
          <div class="d-flex flex-column items-center">
            <span class="med-card__main__personal-info__sign">–</span>
            <span class="med-card__main__personal-info__label">-</span>
          </div>
          <!-- edit-pensil -->
          <div>
            <img src="@/assets/images/edit-icon.png" alt="edit-icon" />
          </div>
        </div>
      </div>

      <div class="d-flex flex-column mt-40">
        <span class="med-card__title">Мед. карта</span>
        <div class="med-card__container">
          <span class="med-card__container__text">
            У вас пока нет протоколов приемов!
          </span>
          <ui-button width="300px" class="mt-30" color="warning">
            Заполнить профиль
          </ui-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionNoUser',
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.sass';

.text-style-label {
  color: #999;
  font-family: $base-font-family;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
}

.med-card {
  padding: 36px;
  overflow: hidden;

  &__main {
    max-width: 792px;
    height: 239px;
    background-image: url('@/assets/images/background-img-2.png');
    background-size: contain;
    background-repeat: no-repeat;
    padding: 24px;
    display: flex;
    flex-direction: column;

    &__bg-avatar {
      position: relative;
      width: 92px;
      height: 92px;
      border-radius: 16px;
      background-color: #e7f4f1;
    }

    &__avatar-patient {
      position: absolute;
      top: -14px;
      left: -10px;
      width: 116px;
      height: 116px;
    }

    &__bio {
      margin-left: 24px;
      width: 140px;
      margin-top: 15px;

      &__text {
        color: #e7f4f1;
        font-family: $base-font-family;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 30px;
        text-decoration-line: underline;
      }
    }

    &__balance-btn {
      width: 97px;
      border: 2px solid #b4e2c7;
    }

    &__balance-text {
      font-family: $head-font-family;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px;
      color: #333;
    }

    &__balance-icon {
      color: #333;
      width: 8px;
      height: 11px;
    }

    &__balance-add {
      color: #fff;
      font-family: $base-font-family;
      font-size: 10px;
      font-style: normal;
      font-weight: 600;
      line-height: 12px;
      margin-right: 8px;
    }

    &__personal-info {
      margin-top: 24px;
      width: 100%;
      height: 75px;
      border-radius: 16px;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-around;

      &__sign {
        margin-top: 5px;
        color: #999;
        font-family: $head-font-family;
        font-size: 30px;
        font-style: normal;
        font-weight: 300;
        line-height: 26px;
      }

      &__label {
        @extend .text-style-label;
      }
    }
  }

  &__title {
    color: #333;
    font-family: $base-font-family;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  &__container {
    padding: 24px 0 24px 24px;
    display: flex;
    flex-direction: column;

    &__text {
      color: #333;
      font-family: $base-font-family;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
  }
}
</style>
