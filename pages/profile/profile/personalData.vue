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
        <!-- age -->
        <div class="d-flex flex-column items-center">
          <span class="personal-data__card__info__num">26</span>
          <span class="personal-data__card__info__label">лет</span>
        </div>
        <!-- height -->
        <div class="d-flex flex-column items-center">
          <span class="personal-data__card__info__num">165</span>
          <span class="personal-data__card__info__label">см</span>
        </div>
        <!-- weigth -->
        <div class="d-flex flex-column items-center">
          <span class="personal-data__card__info__num">56</span>
          <span class="personal-data__card__info__label">кг</span>
        </div>
        <!-- rh factor -->
        <div class="d-flex flex-column items-center">
          <span class="personal-data__card__info__num">II</span>
          <span class="personal-data__card__info__label">поделиться</span>
        </div>
        <!-- edit-pensil -->
        <div class="cursor" @click="$emit('editUser')">
          <img src="@/assets/images/edit-icon.png" alt="edit-icon" />
        </div>
      </div>
    </div>
  </div>
</template>

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
}
</style>

<router>
  {
    path: '/profile/personal',
    name: 'personal',
  }
</router>
