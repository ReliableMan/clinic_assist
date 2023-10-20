<template>
  <div class="personal-data">
    <div class="personal-data__card">
      <div class="d-flex">
        <!-- avatar -->
        <img
          class="personal-data__card__img-doctor"
          src="@/assets/images/avatar-doctor.png"
          alt="avatar-doctor-image"
        />
        <!-- bio -->
        <div class="personal-data__card__bio">
          <span class="personal-data__card__bio__text">
            {{ $t('placeholder.example_doctor_3') }}
          </span>
          <div class="d-flex items-center">
            <span class="personal-data__card__bio__text-2">
              Педиатор, терапевт, травматолог,&nbsp;
            </span>
            <ui-tooltip trigger-class="d-inline-flex">
              <span class="personal-data__card__bio__text-3">еще 2</span>
              <template #tooltip>
                <div class="personal-data__card__bio__hover">
                  <span class="personal-data__card__bio__hover__text">
                    {{ $t('common.traumatology_and_orthopedics') }}
                  </span>
                  <span class="personal-data__card__bio__hover__text">
                    {{ $t('common.clinical_surgery') }}
                  </span>
                  <span class="personal-data__card__bio__hover__text">
                    {{ $t('common.anesthesiology') }}
                  </span>
                </div>
              </template>
            </ui-tooltip>
          </div>
          <!-- location -->
          <div class="d-flex items-center">
            <ui-icon
              class="personal-data__card__bio__location-icon"
              name="location"
              :size="[9, 12]"
            />
            <span class="personal-data__card__bio__location-text">
              Россия, Москва
            </span>
          </div>
        </div>
      </div>
      <div class="personal-data__card__info">
        <!-- gender -->
        <img
          width="35px"
          height="35px"
          src="@/assets/images/svg/regAndAuth/vector-woman.svg"
          alt="vector-woman-icon"
        />
        <!--  -->
        <div class="d-flex flex-column items-center">
          <span class="personal-data__card__info__num">6</span>
          <span class="personal-data__card__info__label">лет стаж</span>
        </div>
        <!--  -->
        <div class="d-flex flex-column items-center">
          <span class="personal-data__card__info__num">5</span>
          <span class="personal-data__card__info__label">рейтинг</span>
        </div>
        <!--  -->
        <!-- <div class="d-flex flex-column items-center">
          <span class="personal-data__card__info__num"></span>
          <span class="personal-data__card__info__label">поделиться</span>
        </div> -->
        <!-- edit-pensil -->
        <!-- <div class="cursor">
          <img src="@/assets/images/edit-icon.png" alt="edit-icon" />
        </div> -->
      </div>
    </div>

    <!-- divider -->
    <div class="divider">
      <ui-divider class="green-line" horizontal />
    </div>

    <!-- about me -->
    <div class="personal-data__about-block">
      <span class="personal-data__about-block__title">Обо мне</span>
      <p v-if="!moreText" class="personal-data__about-block__text">
        Веду приём в медицинском центре по всем вопросам
        акушерско-гинекологического профиля: подготовка пары к зачатию, ведение
        беременности, психопрофилактическая подготовка к родам, лактации,
        обследование по бесплодию, подготовка к ЭКО, в том числе по ОМС,
        индивидуальный подбор метода контрацепции по стандартам ВОЗ с
        дополнительными благоприятными эффектами на внешность и либидо,
        консервативное лечение миомы, эндометриоза, кист яичников, гиперплазии
        эндометрия, нарушения менструального цикла, в...
      </p>
      <p v-if="moreText" class="personal-data__about-block__text">
        Веду приём в медицинском центре по всем вопросам
        акушерско-гинекологического профиля: подготовка пары к зачатию, ведение
        беременности, психопрофилактическая подготовка к родам, лактации,
        обследование по бесплодию, подготовка к ЭКО, в том числе по ОМС,
        индивидуальный подбор метода контрацепции по стандартам ВОЗ с
        дополнительными благоприятными эффектами на внешность и либидо,
        консервативное лечение миомы, эндометриоза, кист яичников, гиперплазии
        эндометрия, нарушения менструального цикла, восстановление мужской
        репродуктивной функции, прием медикаментов и назначение особой диеты.
      </p>
      <span
        v-if="!moreText"
        class="personal-data__about-block__more-text"
        @click="moreText = true"
      >
        Показать полностью
      </span>
    </div>

    <!-- divider -->
    <div class="divider-block">
      <ui-divider class="green-line" horizontal />
    </div>

    <!-- medical experience -->
    <div class="personal-data__medical">
      <span class="personal-data__medical__title">Врачебный стаж</span>
      <div class="personal-data__medical__list">
        <div class="d-flex flex-column">
          <span class="personal-data__medical__list__subtitle">
            Врач-травматолог
          </span>
          <div class="personal-data__medical__list__item">
            <span class="small-green-square"></span>
            2018 - н.в. Медицинский холдинг «СМ-Клиника»
          </div>
          <div v-if="moreList">
            <span class="personal-data__medical__list__subtitle">
              Врач-травматолог
            </span>
            <div class="personal-data__medical__list__item">
              <span class="small-green-square"></span>
              2018 - н.в. Медицинский холдинг «СМ-Клиника»
            </div>
            <span class="personal-data__medical__list__subtitle">
              Врач-травматолог
            </span>
            <div class="personal-data__medical__list__item">
              <span class="small-green-square"></span>
              2018 - н.в. Медицинский холдинг «СМ-Клиника»
            </div>
          </div>
          <span
            v-if="!moreList"
            class="personal-data__medical__list__more-list"
            @click="moreList = true"
          >
            Показать больше
          </span>
        </div>
      </div>
    </div>

    <!-- divider -->
    <div class="divider-block">
      <ui-divider class="green-line" horizontal />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalData',
  data() {
    return {
      moreText: false,
      moreList: false,
    }
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
.text-style-grey {
  color: #999;
  font-family: $base-font-family;
  font-style: normal;
}
.personal-data {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 33px;

  &__card {
    width: 797px;
    height: 230px;
    border-radius: 10px;
    background-image: url('@/assets/images/search-doctor-bg-2.png');
    background-size: cover;
    padding: 24px 24px 21px 24px;
    position: relative;

    &__img-doctor {
      width: 92px;
      height: 92px;
      border-radius: 16px;
    }

    &__bio {
      margin-left: 24px;
      display: flex;
      flex-direction: column;
      gap: 8px;

      &__text {
        @extend .text-style;
        font-size: 24px;
        font-weight: 400;
        line-height: 30px;
      }

      &__text-2 {
        @extend .text-style;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
      }

      &__text-3 {
        @extend .text-style;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      }

      &__hover {
        width: 235px;
        height: 85px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex-shrink: 0;
        fill: #fff;
        filter: drop-shadow(0px 1px 20px rgba(51, 51, 51, 0.2));

        &__text {
          @extend .text-style-black;
          font-size: 14px;
          font-weight: 600;
          line-height: 20px;
        }
      }

      &__location-icon {
        color: #ff9901;
      }

      &__location-text {
        @extend .text-style;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        margin-left: 8px;
      }
    }

    &__info {
      margin-top: 24px;
      width: 100%;
      height: 75px;
      border-radius: 16px;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-around;

      &__num {
        margin-top: 5px;
        color: #333;
        font-family: $head-font-family;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 28px;
      }

      &__label {
        @extend .text-style-grey;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
      }
    }
  }

  &__about-block {
    width: 797px;
    position: relative;

    &__title {
      @extend .text-style-black;
      font-size: 20px;
      font-weight: 400;
      line-height: 24px;
    }

    &__text {
      padding: 10px 24px 10px 24px;
      @extend .text-style-black;
      font-size: 14px;
      font-weight: 400;
      line-height: 23px;
    }

    &__more-text {
      position: absolute;
      bottom: 25px;
      right: 8px;
      @extend .text-style;
      color: #469c79;
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      text-decoration-line: underline;
      text-underline-offset: 3px;
      text-decoration-color: #469c79;
      cursor: pointer;

      &:hover {
        text-decoration: none;
      }

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        border-radius: 4px;
        background-color: #469c79;
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform 0.7s ease-in-out;
        text-decoration: none;
      }
      &:hover:before {
        text-decoration: none;
        transform-origin: left;
        transform: scaleX(1);
      }
    }
  }

  &__medical {
    width: 797px;
    position: relative;

    &__title {
      @extend .text-style-black;
      font-size: 20px;
      font-weight: 400;
      line-height: 24px;
    }

    &__list {
      padding: 10px 24px 10px 24px;
      margin-bottom: 20px;

      &__subtitle {
        @extend .text-style-grey;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        padding-left: 17px;
      }

      &__item {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      &__more-list {
        @extend .text-style;
        color: #469c79;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        padding-top: 8px;
        padding-left: 17px;
        cursor: pointer;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          margin-left: 17px;
          width: 115px;
          height: 2px;
          border-radius: 4px;
          background-color: #469c79;
          bottom: 0;
          left: 0;
          transform-origin: right;
          transform: scaleX(0);
          transition: transform 0.7s ease-in-out;
          text-decoration: none;
        }
        &:hover:before {
          text-decoration: none;
          transform-origin: left;
          transform: scaleX(1);
        }
      }
    }
  }
}
.divider {
  margin-top: 40px;
  margin-bottom: 40px;
  width: 797px;
  height: 2px;
}
.divider-block {
  @extend .divider;
  margin-top: 0;
  margin-bottom: 27px;
}
.green-line {
  color: #b4e2c7;
}
.small-green-square {
  display: block;
  width: 4px;
  height: 4px;
  background-image: url('@/assets/images/green-sm-point.png');
}
</style>

<router>
  {
    path: '/profile/personal',
    name: 'personal',
  }
</router>
