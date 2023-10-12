<template>
  <div>
    <div class="card">
      <!-- avatar -->
      <div class="card__block">
        <div class="card__block__image">
          <span class="card__block__image__green-square">
            <img
              class="card__block__image__img-avatar"
              src="@/assets/images/new-doctor-avatar.png"
              alt="new-avatar-doctor"
            />
          </span>
        </div>
        <!-- green icon -->
        <div class="online-doctor-i card__block__icon"></div>
        <div class="card__block__is-online">
          <span class="card__block__is-online__text">
            {{ $t('common.online_now') }}
          </span>
        </div>
      </div>
      <!-- bio -->
      <div class="card__block-2">
        <span class="card__block-2__name">
          {{ $t('placeholder.example_doctor_2') }}
        </span>
        <span class="card__block-2__specialist">
          {{ $t('placeholder.2_doctors') }}
        </span>
        <div class="card__block-2__experience">
          <span class="green-plus-icon mr-10"></span>
          {{ $t('common.experience') }}: 5 лет
        </div>
      </div>
      <!-- schedule -->
      <div class="card__block-3">
        <p class="card__block-3__text">{{ $t('common.available_dates') }}</p>

        <span class="text-style-days-2">
          {{ $t('common.doctor_not_download_bio') }}<br />
          {{ $t('common.doctor_not_download_bio2') }}
        </span>
      </div>
    </div>
    <div class="rating">
      <p class="rating__text text-style-days-2">
        {{ $t('common.have_not_rating') }}
      </p>
      <ui-divider class="divider mt-34" horizontal />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardDoctorOnline',
  data() {
    return {
      default: false,
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
.text-style-days {
  color: #999;
  text-align: center;
  font-family: $base-font-family;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
}
.text-style-days-2 {
  color: #999;
  font-family: $base-font-family;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
}
.card {
  width: 797px;
  margin-top: 24px;
  display: flex;

  &__block {
    position: relative;

    &__image {
      width: 139px;
      height: 139px;
      border-radius: 20px;
      box-shadow: 0px 2px 20px 0px rgba(51, 51, 51, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;

      &__green-square {
        width: 60px;
        height: 60px;
        border-radius: 10px;
        background-color: #469c79;
      }

      &__img-avatar {
        position: absolute;
        top: 30px;
        left: 32px;
      }
    }

    &__icon {
      position: absolute;
      bottom: 5px;
      right: 4px;
      z-index: 1;
    }

    &__is-online {
      opacity: 0;
      cursor: pointer;
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 139px;
      height: 26px;
      border-radius: 15px;
      filter: drop-shadow(0px 2px 8px rgba(51, 51, 51, 0.15));
      background-color: #fff;
      transition: all 0.5s;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        transition: all 0.5s;
        opacity: 1;
      }

      &__text {
        @extend .text-style-black;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
      }
    }
  }

  &__block-2 {
    margin-left: 24px;
    display: flex;
    flex-direction: column;

    &__name {
      margin: 18px 0 8px 0;
      @extend .text-style-black;
      font-size: 20px;
      font-weight: 400;
      line-height: 24px;
      transition: all 0.5s;

      &:hover {
        transition: all 0.5s;
        cursor: pointer;
        color: #469c79;
      }
    }

    &__specialist {
      @extend .text-style-black;
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      margin-bottom: 14px;
    }

    &__experience {
      @extend .text-style-black;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      height: 30px;
    }
  }

  &__block-3 {
    margin-left: 40px;
    display: flex;
    flex-direction: column;

    &__text {
      @extend .text-style-black;
      font-size: 12px;
      font-weight: 600;
      line-height: 16px;
    }

    &__days {
      margin-left: -5px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    &__cont {
      display: flex;
      flex-direction: column;
    }

    &__btns {
      margin-top: 5px;
      width: 30px;
      height: 30px;
      display: flex;
    }

    &__price {
      margin-top: 15px;

      &__btn {
        width: 103px;
        text-align: center;
        margin-right: 18px;
      }
    }

    &__to-sign {
      width: 168px;
    }
  }
}
.rating {
  width: 797px;
  &__text {
    margin-left: 8px;
    width: 123px;
    height: 48px;
    text-align: center;
  }
}

.divider {
  color: #b4e2c7;
}

.online-doctor-i {
  display: inline-block;
  border-radius: 50%;
  width: 21px;
  height: 18px;
  background-image: url('@/assets/images/online-doctor-icon.png');
  background-repeat: no-repeat;

  &:hover {
    cursor: pointer;
  }
}
.green-plus-icon {
  display: inline-block;
  width: 17px;
  height: 15px;
  background-image: url('@/assets/images/svg/vector-green-plus.svg');
  background-repeat: no-repeat;
}
</style>
