<template>
  <div>
    <div v-for="(n, i) in 3" :key="i">
      <div class="container-4">
        <div class="block-1">
          <!-- avatar -->
          <img
            class="container-4__img-avatar"
            src="@/assets/images/avatar-doctor.png"
            alt="avatar-doctor"
          />
          <div class="online-doctor-i container-4__online-icon"></div>
          <!-- bio -->
          <div class="container-4__bio">
            <p class="container-4__bio__name">Коваль Ольга Валентиновна</p>
            <p class="container-4__bio__specialist">Травматолог</p>
            <div class="container-4__bio__degree">
              <span class="green-hat-icon mr-10"></span>
              Высшая категория, кандидат медицинских наук
            </div>
            <div class="container-4__bio__experience">
              <span class="green-plus-icon mr-10"></span>
              Стаж: 5 лет
            </div>
          </div>
        </div>
        <!-- schedule -->
        <div class="container-4__schedule">
          <p class="container-4__schedule__text">Доступные даты</p>
          <div class="container-4__schedule__days">
            <div
              v-for="day in days"
              :key="day.id"
              class="container-4__schedule__cont"
            >
              <span class="text-style-days">{{ day.name }}</span>
              <button class="container-4__schedule__btns" @click="setActive">
                <span class="container-4__schedule__btns__text">
                  {{ day.date }}
                </span>
              </button>
            </div>
            <img
              width="25px"
              height="25px"
              src="@/assets/images/svg/right-vector-icon-2.svg"
              alt="vector-right-vector"
            />
          </div>
          <div class="container-4__schedule__price">
            <ui-button class="container-4__schedule__price__btn" light-shadow>
              <span class="rub-number-2">2400</span>
              <img
                src="@/assets/images/svg/vector-rub-dark.svg"
                alt="ru-icon-dark"
              />
            </ui-button>
            <ui-button class="container-4__schedule__to-sign" color="warning">
              Записаться
            </ui-button>
          </div>
        </div>
      </div>
      <button type="button" class="rating-btn">
        <img
          width="15px"
          height="15px"
          src="@/assets/images/svg/mini-star-icon.svg"
          alt="mini-star-icon"
        />
        <span class="rating-btn__number">5</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
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
  methods: {
    setActive(el) {
      const elem = el.target.closest('.container-4__schedule__btns')
      const parentElems = document.querySelectorAll(
        '.container-4__schedule__btns'
      )
      parentElems.forEach(function (elem) {
        elem.classList.remove('active-dropdown-btn')
      })
      elem.classList.contains('active-dropdown-btn')
        ? elem.classList.remove('active-dropdown-btn')
        : elem.classList.add('active-dropdown-btn')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.sass';

.text-style-days {
  color: #999;
  text-align: center;
  font-family: $base-font-family;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
}
.container-4 {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 56px;

  &__img-avatar {
    width: 165px;
    height: 165px;
    border-radius: 15px;
  }

  &__online-icon {
    position: absolute;
    bottom: 20px;
    left: 140px;
    z-index: 2;
  }

  &__bio {
    margin-left: 45px;
    display: flex;
    flex-direction: column;

    &__name {
      width: 379px;
      height: 20px;
      color: #333;
      font-family: $base-font-family;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      margin-bottom: 11px;
    }

    &__specialist {
      width: 123px;
      height: 20px;
      color: #333;
      font-family: $base-font-family;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px;
      margin-bottom: 25px;
    }

    &__degree,
    &__experience {
      color: #333;
      font-family: $base-font-family;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      height: 30px;
    }
  }

  &__schedule {
    display: flex;
    flex-direction: column;
    transition: all 1s;

    &__text {
      color: #333;
      font-family: $base-font-family;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 16px;
    }

    &__days {
      margin-top: 5px;
      width: auto;
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
      margin-left: 2px;
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px;
      border: 2px solid #b4e2c7;
      background: #fff;
      cursor: pointer;

      &__text {
        color: #469c79;
        text-align: center;
        font-family: $head-font-family;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
      }

      &:hover {
        transition: all 0.3s;
        background: #ff9901a3;
        box-shadow: 0px 2px 8px 0px rgba(51, 51, 51, 0.15);
        border: none;
      }
      &:hover > &__text {
        color: #fff;
      }
    }

    &__price {
      margin-top: 15px;

      &__btn {
        width: 136px;
        text-align: center;
        margin-right: 20px;

        @media (max-width: 1200px) {
          width: 100px;
        }
      }
    }

    &__to-sign {
      width: 185px;

      @media (max-width: 1200px) {
        width: 120px;
      }
    }
  }
}

.active-dropdown-btn {
  box-shadow: 0px 2px 8px 0px rgba(51, 51, 51, 0.15);
  background: #ff9901;
  border: none;
}
.active-dropdown-btn > .container-4__schedule__btns__text {
  color: #fff;
}

.block-1 {
  display: flex;
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
.rub-number-2 {
  color: #333;
  font-family: $head-font-family;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
}
.rating-btn {
  width: 104px;
  height: 31px;
  margin-top: 5px;
  margin-left: 30px;
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
.green-plus-icon {
  display: inline-block;
  width: 17px;
  height: 15px;
  background-image: url('@/assets/images/svg/vector-green-plus.svg');
  background-repeat: no-repeat;
}
</style>
