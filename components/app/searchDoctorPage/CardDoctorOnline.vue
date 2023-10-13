<template>
  <div>
    <ui-dropdown no-padding trigger="hover" hover-portal>
      <div class="card">
        <!-- avatar -->
        <div class="card__block">
          <img
            class="card__block__img-avatar"
            src="@/assets/images/avatar-doctor.png"
            alt="avatar-doctor"
          />
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
            {{ $t('placeholder.example_doctor_3') }}
          </span>
          <span class="card__block-2__specialist">
            {{ $t('placeholder.travmatolog') }}
          </span>
          <div class="card__block-2__degree d-flex">
            <span class="green-hat-icon mr-10"></span>
            {{ $t('common.highest_category_candidat_med_science') }}
          </div>
          <div class="card__block-2__experience d-flex">
            <span class="green-plus-icon mr-10"></span>
            {{ $t('common.experience') }}: 5 лет
          </div>
        </div>
        <!-- schedule -->
        <div class="card__block-3">
          <p class="card__block-3__text">{{ $t('common.available_dates') }}</p>
          <!-- * days swiper with time -->
          <days-swiper-with-time />
          <!-- </div> -->
          <div class="card__block-3__price">
            <ui-button class="card__block-3__price__btn" light-shadow>
              <span class="rub-number-2">2400</span>
              <img
                src="@/assets/images/svg/vector-rub-dark.svg"
                alt="ru-icon-dark"
              />
            </ui-button>
            <ui-button class="card__block-3__to-sign" color="warning">
              {{ $t('common.make_an_appointment') }}
            </ui-button>
          </div>
        </div>
      </div>
      <div class="rating">
        <button type="button" class="rating-btn">
          <img
            width="15px"
            height="15px"
            src="@/assets/images/svg/mini-star-icon.svg"
            alt="mini-star-icon"
          />
          <span class="rating-btn__number">5</span>
        </button>
        <ui-divider class="divider mt-34" horizontal />
      </div>
      <template #portal>
        <div class="hover-about-doctor">
          <ui-icon class="hover-about-doctor__close" name="close" />
          <span class="hover-about-doctor__text mt-20">О враче</span>
          <span class="hover-about-doctor__text pl-40 pr-20">
            Веду приём в медицинском центре по всем вопросам
            акушерско-гинекологического профиля: подготовка пары к зачатию,
            ведение беременности, психопрофилактическая подготовка к родам,
            лактации, обследование по бесплодию, подготовка к ЭКО, в том числе
            по ОМС, индивидуальный подбор метода контрацепции по стандартам ВОЗ
            с дополнительными благоприятными эффектами на внешность и либидо,
            консервативное лечение миомы, эндометриоза, кист яичников,
            гиперплазии эндометрия, нарушения...
          </span>
          <a class="hover-about-doctor__href" href="#">Подробнее</a>
        </div>
      </template>
    </ui-dropdown>
  </div>
</template>

<script>
import DaysSwiperWithTime from '@/components/ui/DaysSwiperWithTime.vue'
export default {
  name: 'CardDoctorOnline',
  components: {
    DaysSwiperWithTime,
  },
  data() {
    return {
      value: true,
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
.card {
  width: 797px;
  margin-top: 24px;
  display: flex;

  &__block {
    position: relative;

    &__img-avatar {
      width: 139px;
      height: 139px;
      border-radius: 20px;
      box-shadow: 0px 2px 20px 0px rgba(51, 51, 51, 0.1);
    }

    &__icon {
      position: absolute;
      bottom: 36px;
      right: 4px;
      z-index: 1;
    }

    &__is-online {
      opacity: 0;
      cursor: pointer;
      position: absolute;
      bottom: 30px;
      right: 2px;
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

    &__degree,
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

  &__rating {
    width: 797px;
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
.green-hat-icon {
  display: inline-block;
  width: 18px;
  height: 15px;
  background-image: url('@/assets/images/svg/vector-green-hat.svg');
  background-repeat: no-repeat;
}
.green-plus-icon {
  display: inline-block;
  width: 17px;
  height: 15px;
  background-image: url('@/assets/images/svg/vector-green-plus.svg');
  background-repeat: no-repeat;
}
.rating-btn {
  width: 81px;
  height: 24px;
  margin-left: 30px;
  border-radius: 50px;
  border: 2px solid #fcb016;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 6px;

  &__number {
    color: #6f7173;
    font-family: $head-font-family;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
  }
}
.hover-about-doctor {
  width: 792px;
  height: 202px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__close {
    position: absolute;
    top: 16px;
    right: 14px;
    color: #469c79;

    &:hover {
      cursor: pointer;
      transition: all 1s;
      transform: rotate(0.5turn);
    }
  }

  &__href {
    position: absolute;
    right: 35px;
    bottom: 20px;
    color: #469c79;
    text-decoration: none;
    font-size: 14px;
    transition: all 0.7s;

    &:hover {
      color: #2ea877;
      transition: all 0.7s;
      transform: translateX(10px);
    }
  }

  &__text {
    @extend .text-style-black;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
  }
}
</style>
