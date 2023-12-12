<template>
  <section>
    <div class="med-card">
      <div class="med-card__main-info">
        <div class="d-flex content-space-between">
          <div class="d-flex">
            <!-- avatar -->
            <img
              class="med-card__main-info__img-patient"
              src="@/assets/images/avatar-patient.png"
              alt="avatar-patient-logo"
            />
            <!-- bio -->
            <div class="med-card__main-info__bio">
              <span class="med-card__main-info__bio__text">
                {{ name }} {{ patronymic }}
                <br />
                {{ surname }}
              </span>
              <div class="d-flex items-center">
                <ui-icon
                  class="med-card__main-info__bio__location-icon"
                  name="location"
                  :size="[9, 12]"
                />
                <span class="med-card__main-info__bio__location-text">
                  {{ country }}, {{ city }}
                </span>
              </div>
            </div>
          </div>
          <!-- balance  -->
          <!-- <div class="d-flex flex-column items-center">
            <ui-button class="med-card__main-info__balance-btn">
              <span class="med-card__main-info__balance-text">2420</span>
              <img
                src="@/assets/images/svg/vector-rub-dark.svg"
                alt="ru-icon-dark"
              />
            </ui-button>
            <div class="d-flex items-center mt-10">
              <span class="med-card__main-info__balance-add">Пополнить</span>
              <img src="@/assets/images/svg/plus-icon-sm.svg" alt="plus-icon" />
            </div>
          </div> -->
        </div>
        <div class="med-card__main-info__personal-info">
          <!-- gender -->
          <img
            v-if="$auth.user.user.gender === 2"
            width="35px"
            height="35px"
            src="@/assets/images/svg/regAndAuth/vector-woman.svg"
            alt="vector-woman-icon"
          />
          <img
            v-if="$auth.user.user.gender === 1"
            width="35px"
            height="35px"
            src="@/assets/images/svg/regAndAuth/vector-man.svg"
            alt="vector-man-icon"
          />
          <!-- age -->
          <div class="d-flex flex-column items-center">
            <span class="med-card__main-info__personal-info__num">26</span>
            <span class="med-card__main-info__personal-info__label">лет</span>
          </div>
          <!-- height -->
          <div class="d-flex flex-column items-center">
            <span class="med-card__main-info__personal-info__num">
              {{ height }}
            </span>
            <span class="med-card__main-info__personal-info__label">см</span>
          </div>
          <!-- weigth -->
          <div class="d-flex flex-column items-center">
            <span class="med-card__main-info__personal-info__num">
              {{ weight }}
            </span>
            <span class="med-card__main-info__personal-info__label">кг</span>
          </div>
          <!-- rh factor -->
          <div class="d-flex flex-column items-center">
            <span class="med-card__main-info__personal-info__num">
              {{ bloodType }}
            </span>
            <span class="med-card__main-info__personal-info__label">
              {{ rhType }}
            </span>
          </div>
          <!-- edit-pensil -->
          <div class="cursor" @click="$emit('editUser')">
            <img src="@/assets/images/edit-icon.png" alt="edit-icon" />
          </div>
        </div>
      </div>
      <div class="med-card__main">
        <div class="d-flex items-center content-space-between">
          <span class="med-card__main__title">Основное</span>
          <div class="cursor" @click="$emit('editUser')">
            <img
              class="med-card__main__edit-icon"
              src="@/assets/images/edit-icon.png"
              alt="edit-icon"
            />
          </div>
        </div>
        <div class="med-card__main__container">
          <!-- block allergy -->
          <div class="med-card__main__block">
            <span class="med-card__main__block__subtitle">Аллергии</span>
            <div class="med-card__main__block__list">
              <div
                v-for="allergy in allergies"
                :key="allergy.code"
                class="med-card__main__item"
              >
                <span class="small-green-square"></span>
                {{ allergy.name }}
              </div>
            </div>
          </div>
          <div class="d-flex content-space-between">
            <!-- block taken medications -->
            <div class="med-card__main__block mt-24">
              <span class="med-card__main__block__subtitle">
                Постоянно принимаемые лекарства
              </span>
              <div class="med-card__main__block__list-flex">
                <div
                  v-for="drug in drugs"
                  :key="drug.code"
                  class="med-card__main__item-2"
                >
                  <span class="small-green-square"></span>
                  {{ drug.name }}
                </div>
              </div>
            </div>
            <!-- block chronic diseases -->
            <div class="med-card__main__block mt-24">
              <span class="med-card__main__block__subtitle">
                Хронические заболевания
              </span>
              <div class="med-card__main__block__list-flex">
                <div
                  v-for="disease in chronicDiseases"
                  :key="disease.code"
                  class="med-card__main__item-2"
                >
                  <span class="small-green-square"></span>
                  {{ disease.name }}
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex content-space-between">
            <!-- block heredity-->
            <div class="med-card__main__block mt-24">
              <span class="med-card__main__block__subtitle">
                Семейная наследственность
              </span>
              <div class="med-card__main__block__list-flex">
                <div
                  v-for="item in heredity"
                  :key="item.code"
                  class="med-card__main__item-2"
                >
                  <span class="small-green-square"></span>
                  {{ item.name }}
                </div>
              </div>
            </div>
            <!-- block bad habits -->
            <div class="med-card__main__block mt-24">
              <span class="med-card__main__block__subtitle">
                Вредные привычки
              </span>
              <div class="med-card__main__block__list-flex">
                <div
                  v-for="item in badHabits"
                  :key="item.code"
                  class="med-card__main__item-2"
                >
                  <span class="small-green-square"></span>
                  {{ item.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column">
          <span class="med-card__main__title">Мед. карта</span>
          <div class="med-card__main__container">
            <span class="med-card__main__container__text">
              Под рукой все свои протоколы приемов в одном месте. Это удобно!
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionUser',
  data() {
    return {
      surname: this.$auth.user.user.surname,
      name: this.$auth.user.user.name,
      patronymic: this.$auth.user.user.patronymic,
      country: this.$auth.user.user.country,
      city: this.$auth.user.user.city,
      height: this.$auth.user.patient.height || '',
      weight: this.$auth.user.patient.weight || '',
      blood: this.$auth.user.patient.blood || '',
      rh: this.$auth.user.patient.rh || '',
      allergies: this.$auth.user.patient.allergies || [],
      drugs: this.$auth.user.patient.drugs || [],
      chronicDiseases: this.$auth.user.patient.chronicDiseases || [],
      heredity: this.$auth.user.patient.heredity || [],
      badHabits: this.$auth.user.patient.badHabits || [],
    }
  },
  computed: {
    bloodType() {
      let type
      switch (this.blood) {
        case 1:
          type = 'I'
          break
        case 2:
          type = 'II'
          break
        case 3:
          type = 'III'
          break
        case 4:
          type = 'IV'
          break

        default:
          break
      }
      return type
    },
    rhType() {
      let type
      if (this.rh) {
        type = 'Rh +'
      } else {
        type = 'Rh -'
      }
      return type
    },
  },
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
.cursor {
  cursor: pointer;
}
.med-card {
  padding: 36px;
  overflow: hidden;

  &__main-info {
    max-width: 792px;
    height: 239px;
    background-image: url('@/assets/images/background-img-2.png');
    background-size: contain;
    background-repeat: no-repeat;
    padding: 24px;
    display: flex;
    flex-direction: column;

    &__img-patient {
      width: 92px;
      height: 92px;
      border-radius: 16px;
    }

    &__bio {
      margin-left: 24px;
      width: 275px;
      display: flex;
      flex-direction: column;
      gap: 11px;

      &__text {
        color: #fff;
        font-family: $base-font-family;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
      }

      &__location-icon {
        color: #ff9901;
      }

      &__location-text {
        color: #fff;
        font-family: $base-font-family;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        margin-left: 8px;
      }
    }

    &__balance-btn {
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
        @extend .text-style-label;
      }
    }
  }

  &__main {
    margin-top: 32px;
    max-width: 792px;
    display: flex;
    flex-direction: column;

    &__title {
      color: #333;
      font-family: $base-font-family;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }

    &__edit-icon {
      width: 14px;
      height: 14px;
    }

    &__container {
      padding: 24px 200px 24px 24px;

      &__text {
        color: #333;
        font-family: $base-font-family;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
      }
    }

    &__block {
      display: flex;
      flex-direction: column;

      &__subtitle {
        @extend .text-style-label;
      }

      &__list {
        margin-top: 12px;
        display: flex;
        gap: 21px;
      }

      &__list-flex {
        margin-top: 12px;
        display: flex;
        flex-direction: column;
        gap: 22px;
      }
    }

    &__item {
      width: 106px;
      height: 46px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      background-color: #e7f4f1;
      font-family: $base-font-family;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      color: #333;
    }

    &__item-2 {
      width: 160px;
      height: 46px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      background-color: #e7f4f1;
      font-family: $base-font-family;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      color: #333;
    }
  }
}
.small-green-square {
  width: 4px;
  height: 4px;
  background-image: url('@/assets/images/green-sm-point.png');
}
</style>
