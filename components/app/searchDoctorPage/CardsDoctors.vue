<template>
  <div>
    <div v-for="(n, i) in 3" :key="i">
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
        </div>
        <!-- bio -->
        <div class="card__block-2">
          <span class="card__block-2__name"> Коваль Ольга Валентиновна </span>
          <span class="card__block-2__specialist"> Травматолог </span>
          <div class="card__block-2__degree">
            <span class="green-hat-icon mr-10"></span>
            Высшая категория, кандидат медицинских наук
          </div>
          <div class="card__block-2__experience">
            <span class="green-plus-icon mr-10"></span>
            Стаж: 5 лет
          </div>
        </div>
        <!-- schedule -->
        <div class="card__block-3">
          <p class="card__block-3__text">Доступные даты</p>
          <div class="card__block-3__days">
            <div v-for="day in days" :key="day.id" class="card__block-3__cont">
              <span class="text-style-days">{{ day.name }}</span>
              <ui-button class="card__block-3__btns" color="success" outlined>
                {{ day.date }}
              </ui-button>
            </div>
            <div class="mt-10">
              <img
                width="25px"
                height="25px"
                src="@/assets/images/svg/right-vector-icon-2.svg"
                alt="vector-right-vector"
              />
            </div>
          </div>
          <div class="card__block-3__price">
            <ui-button class="card__block-3__price__btn" light-shadow>
              <span class="rub-number-2">2400</span>
              <img
                src="@/assets/images/svg/vector-rub-dark.svg"
                alt="ru-icon-dark"
              />
            </ui-button>
            <ui-button class="card__block-3__to-sign" color="warning">
              Записаться
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
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardsDoctors',
  data() {
    return {
      default: false,
    }
  },
  computed: {
    days() {
      return [
        { id: 1, name: 'ср', date: 12 },
        { id: 2, name: 'чт', date: 15 },
        { id: 3, name: 'пт', date: 19 },
        { id: 4, name: 'сб', date: 20 },
        { id: 5, name: 'вс', date: 21 },
        { id: 6, name: 'пн', date: 22 },
        { id: 7, name: 'вт', date: 25 },
      ]
    },
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
      bottom: 30px;
      right: 2px;
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
  margin-top: 30px;
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
</style>
