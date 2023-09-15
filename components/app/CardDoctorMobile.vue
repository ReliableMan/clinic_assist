<template>
  <div>
    <div v-for="(n, i) in 1" :key="i">
      <div class="container-4-mob">
        <!-- avatar and rating -->
        <div>
          <img
            class="container-4-mob__img-avatar"
            src="@/assets/images/avatar-doctor.png"
            alt="avatar-doctor"
          />
          <button type="button" class="rating-btn">
            <img
              width="10px"
              height="10px"
              src="@/assets/images/svg/mini-star-icon.svg"
              alt="mini-star-icon"
            />
            <span class="rating-btn__number">5</span>
          </button>
        </div>
        <!-- online icon -->
        <div class="online-doctor-i container-4-mob__online-icon"></div>
        <!-- info doctor -->
        <div class="container-4-mob__bio">
          <span class="container-4-mob__bio__name"
            >Коваль Ольга Валентиновна
          </span>
          <span class="container-4-mob__bio__specialist">
            Травматолог, педиатр, терапевт
          </span>
          <span
            v-if="!visibleExtraBio"
            class="container-4-mob__bio__link"
            @click="visibleExtraBio = true"
            >еще 3
          </span>
          <span v-if="visibleExtraBio" class="container-4-mob__bio__specialist">
            травматолог, педиатр, терапевт
          </span>
          <div class="container-4-mob__bio__degree">
            <span class="green-hat-icon mr-8"></span>
            Высшая категория, кандидат медицинских наук
          </div>
          <div class="container-4-mob__bio__experience">
            <span class="green-plus-icon mr-8"></span>
            Стаж: 5 лет
          </div>
        </div>
        <!-- schedule -->
        <div class="container-4-mob__schedule">
          <span class="container-4-mob__schedule__text">Доступные даты</span>
          <div class="container-4-mob__schedule__days">
            <div v-for="day in days" :key="day.id">
              <ui-button
                color="success"
                outlined
                class="container-4-mob__schedule__btns"
              >
                <span class="container-4-mob__schedule__btns__day">
                  {{ day.name }}
                </span>
                <span class="container-4-mob__schedule__btns__date">
                  {{ day.date }}
                </span>
              </ui-button>
            </div>
            <img
              class="container-4-mob__schedule__vector-right"
              src="@/assets/images/svg/right-vector-icon-2.svg"
              alt="vector-right-vector"
            />
          </div>
          <div class="container-4-mob__schedule__price">
            <ui-button
              class="container-4-mob__schedule__price__btn"
              light-shadow
            >
              <span class="rub-number-1">от</span>
              <span class="rub-number-2">2400</span>
              <img
                src="@/assets/images/svg/vector-rub-dark.svg"
                alt="ru-icon-dark"
              />
            </ui-button>
            <ui-button
              class="container-4-mob__schedule__to-sign"
              color="warning"
            >
              Записаться
            </ui-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visibleExtraBio: false,
    }
  },
  computed: {
    days() {
      return [
        { id: 1, name: 'пт', date: 12 },
        { id: 2, name: 'пн', date: 15 },
        { id: 3, name: 'чт', date: 18 },
        { id: 4, name: 'пт', date: 19 },
        { id: 5, name: 'сб', date: 20 },
        { id: 6, name: 'вс', date: 21 },
        { id: 7, name: 'пн', date: 22 },
        { id: 8, name: 'чт', date: 25 },
        { id: 9, name: 'сб', date: 27 },
        { id: 10, name: 'вт', date: 30 },
        { id: 11, name: 'ср', date: 31 },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.sass';

.text-style-days {
  color: #999;
  text-align: center;
  font-family: Segoe UI;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
}

.container-4-mob {
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 32px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 2px 20px 0px rgba(51, 51, 51, 0.1);
  padding: 22px 20px 24px 18px;

  &__img-avatar {
    width: 100px;
    height: 100px;
    border-radius: 15px;
  }

  &__online-icon {
    position: absolute;
    left: 95px;
    top: 95px;
    z-index: 2;
  }

  &__bio {
    width: 35%;
    margin-left: 18px;
    display: flex;
    flex-direction: column;

    &__name {
      color: #333;
      font-family: $base-font-family;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      margin-top: 4px;
    }

    &__specialist {
      font-family: $base-font-family;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: 16px;
    }

    &__link {
      color: #999;
      font-family: $base-font-family;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
    }

    &__degree {
      margin-top: 10px;
    }
    &__experience {
      margin-top: 4px;
      margin-left: 1px;
    }

    &__degree,
    &__experience {
      color: #333;
      font-family: $base-font-family;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: 12px;
      word-break: normal;
    }
  }

  &__schedule {
    display: flex;
    flex-direction: column;

    @media (max-width: 650px) {
      margin-top: 10px;
    }

    &__text {
      color: #333;
      font-family: $base-font-family;
      font-size: 10px;
      font-style: normal;
      font-weight: 600;
      line-height: 12px;
      text-align: center;
      margin-bottom: 10px;
    }

    &__days {
      margin-top: 5px;
      display: grid;
      grid: repeat(2, 45px) / auto-flow 50px;
      justify-items: center;
    }

    &__btns {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: #fff;

      &__day {
        color: #999;
        font-family: $base-font-family;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 12px;
      }

      &__date {
        color: #469c79;
        font-family: $head-font-family;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }

    &__vector-right {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      box-shadow: 1px 1px 10px 0px #b4e2c7;

      &:active {
        box-shadow: none;
      }
    }

    &__price {
      margin-top: 12px;
      display: flex;
      gap: 18px;

      &__btn {
        width: 111px;
      }
    }

    &__to-sign {
      width: 168px;
    }
  }
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
  width: 12px;
  height: 10px;
  background-image: url('@/assets/images/mobile/svg/green-hat.svg');
  background-repeat: no-repeat;
}
.green-plus-icon {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-image: url('@/assets/images/mobile/svg/green-plus.svg');
  background-repeat: no-repeat;
}
.rub-number-1 {
  color: #333;
  font-family: $base-font-family;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px;
}
.rub-number-2 {
  color: #333;
  font-family: $head-font-family;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
}
.rating-btn {
  width: 81px;
  height: 24px;
  margin-top: 5px;
  margin-left: 10px;
  border-radius: 50px;
  border: 1px solid #fcb016;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 7px;

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
