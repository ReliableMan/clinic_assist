<template>
  <div>
    <!-- поиск, сортировка и список врачей -->
    <ui-transition-slide>
      <div v-if="!payment" class="search-doctor">
        <div class="search-doctor__params">
          <div class="d-flex flex-column items-center">
            <div class="search-doctor__params__block-1">
              <span class="title">
                {{ $t('common.choose_parametrs_search') }}
              </span>
              <div class="d-flex">
                <p class="title-balance" @click="payment = true">
                  {{ $t('common.your_balance') }}
                  <span class="title-balance-num">100</span>
                  <span class="ru-icon"></span>
                </p>
              </div>
            </div>
            <div class="search-doctor__params__block-2">
              <div>
                <ui-input-label>
                  <span class="ui-label">
                    {{ $t('common.specialization') }}
                  </span>
                  <multiselect
                    v-model="specialization"
                    class="search-doctor__params__block-2__input"
                    :placeholder="$t('placeholder.3_doctors')"
                    label="name"
                    track-by="code"
                    :options="suggestionsSpecialization"
                    :multiple="true"
                    select-label="✔"
                    selected-label="✔"
                    deselect-label="✔"
                  >
                    <span slot="noResult" class="noResult-text">
                      Совпадений
                      <span class="text-bold"> не найдено:</span>
                      попробуйте изменить свой<br />запрос
                    </span>
                  </multiselect>
                </ui-input-label>
              </div>
              <div>
                <ui-input-label>
                  <span class="ui-label">ФИО</span>
                  <ui-input
                    class="search-doctor__params__block-2__input"
                    :placeholder="$t('placeholder.example_doctor')"
                  />
                </ui-input-label>
              </div>
            </div>
            <div class="search-doctor__params__block-3">
              <!-- elem 1 -->
              <img
                width="92"
                height="46"
                src="@/assets/images/svg/gender-icon.svg"
                alt="gender-icon"
              />
              <!-- elem 2 -->
              <div class="search-doctor__params__block-3__checkbox">
                <ui-checkbox v-model="value" class="checkbox" />
                <span class="search-doctor__params__block-3__checkbox__name">
                  {{ $t('common.available_today') }}
                </span>
              </div>
              <!-- elem 3 -->
              <date-and-time-option />
              <!-- elem 4 -->
              <ui-button color="warning">
                {{ $t('common.find') }}
              </ui-button>
              <!-- elem 5 -->
              <div class="d-flex flex-column">
                <img
                  width="130"
                  height="60"
                  src="@/assets/images/svg/group_doctors.svg"
                  alt="group_doctors"
                />
                <div class="block-label">
                  <span class="block-label__text">
                    Дежурный <br />
                    терапевт
                  </span>
                  <span class="block-label__text">
                    Дежурный <br />
                    педиатор
                  </span>
                </div>
              </div>
            </div>
            <div class="search-doctor__params__block-4">
              <span class="search-doctor__params__block-4__text">
                {{ $t('common.reset_filters') }}
              </span>
            </div>
          </div>
        </div>
        <!-- sorting -->
        <sorting-option />
        <!-- cards doctor -->
        <cards-doctors />
        <!-- pagination -->
        <ui-container class="mt-20 mb-40" size="sm">
          <div>
            <ui-pagination
              v-model="valuePagination"
              class="pagination"
              :count="count"
            />
          </div>
        </ui-container>
      </div>
    </ui-transition-slide>

    <!-- привязка банковской карты -->
    <ui-transition-slide>
      <div v-if="payment">
        <ui-form
          ref="form"
          v-slot="{ failed }"
          class="d-flex flex-column"
          @submit="submit"
        >
          <div class="payment">
            <p class="payment__title">
              {{ $t('payment.card_details') }}
            </p>
            <div @click="payment = false">
              <ui-icon class="payment__close" name="close" />
            </div>

            <!-- payment content -->
            <div class="payment__content">
              <!-- logos -->
              <img
                class="payment__content__img"
                src="@/assets/images/payment-card-logos.png"
                alt="image-payment"
              />
              <!-- payment fields -->
              <div class="payment__content__fields">
                <div class="payment__content__fields__block-1">
                  <!-- number card -->
                  <ui-validator
                    v-slot="{ error }"
                    rules="required"
                    :custom-messages="{
                      required: $t('validation.required_number_card'),
                    }"
                    class="custom-errors"
                  >
                    <ui-input-label
                      class="ui-inp-label"
                      :label="$t('payment.number_card')"
                      black
                      bold
                    >
                      <ui-input
                        v-model="paymentFields.numberCard"
                        :error="error"
                        :placeholder="$t('placeholder.default_number_card')"
                      />
                    </ui-input-label>
                  </ui-validator>
                  <!-- Name owner's card -->
                  <ui-validator
                    v-slot="{ error }"
                    rules="required"
                    :custom-messages="{
                      required: $t('validation.required_name'),
                    }"
                    class="custom-errors"
                  >
                    <ui-input-label
                      class="ui-inp-label"
                      :label="$t('payment.owner_name')"
                      black
                      bold
                    >
                      <ui-input
                        v-model="paymentFields.ownerNameCard"
                        :error="error"
                        :placeholder="$t('placeholder.default_owner_card_name')"
                      />
                    </ui-input-label>
                  </ui-validator>
                </div>
                <div class="payment__content__fields__block-2">
                  <!-- card expire date -->
                  <ui-input-label
                    class="ui-inp-label"
                    :label="$t('payment.card_expiry_date')"
                    black
                    bold
                  >
                    <ui-input
                      v-model="paymentFields.cardExpiryDate"
                      class="payment__content__fields__block-2__inp"
                      :placeholder="$t('placeholder.card_expires_date')"
                    />
                  </ui-input-label>
                  <!-- cvc cvv code -->
                  <ui-input-label
                    class="ui-inp-label"
                    :label="$t('payment.cvc/cvv_code')"
                    black
                    bold
                  >
                    <ui-input
                      v-model="paymentFields.cvcCvvCode"
                      class="payment__content__fields__block-2__inp"
                      :placeholder="$t('placeholder.card_cvc_cvv')"
                    />
                  </ui-input-label>
                </div>
              </div>
              <!-- bottom right text -->
              <div class="payment__content__right-text">
                <div class="payment__content__right-text__text">
                  {{ $t('payment.3_numbers_other_side_card') }}
                </div>
              </div>
            </div>

            <!-- text under card -->
            <span class="payment__text-under-card">
              {{ $t('payment.save_card_text') }}
            </span>
            <div>
              <ui-checkbox
                v-model="paymentFields.saveCard"
                class="custom-checkbox"
                :label="$t('payment.save_card')"
              />
            </div>

            <!-- кнопка -->
            <ui-button
              width="294px"
              color="warning"
              fluid
              :disabled="failed"
              :loading="loading"
              type="submit"
            >
              {{ $t('payment.pay') }}
            </ui-button>
          </div>
        </ui-form>
      </div>
    </ui-transition-slide>
  </div>
</template>

<script>
import DateAndTimeOption from '@/components/app/searchDoctorPage/DateAndTimeOption.vue'
import SortingOption from '@/components/app/searchDoctorPage/SortingOption.vue'
import CardsDoctors from '@/components/app/searchDoctorPage/CardsDoctors.vue'
export default {
  name: 'AllDoctors',
  components: {
    DateAndTimeOption,
    SortingOption,
    CardsDoctors,
  },
  data() {
    return {
      value: false,
      specialization: '',
      suggestionsSpecialization: [
        { name: 'Травматолог', code: 'travmatolog' },
        { name: 'Ортопед', code: 'ortoped' },
        { name: 'Нефролог', code: 'nefrolog' },
        { name: 'Неонатолог', code: 'neonatolog' },
        { name: 'Акушер-гинеколог', code: 'akusher-ginekolog' },
        { name: 'Реаниматолог', code: 'reanimatolog' },
        { name: 'Дерматовенеролог', code: 'dermatovenerolog' },
        { name: 'Гинеколог', code: 'ginekolog' },
      ],
      valuePagination: 1,
      count: 6790,
      payment: true,
      paymentFields: {
        numberCard: '',
        ownerNameCard: '',
        cardExpiryDate: '',
        cvcCvvCode: '',
        saveCard: false,
      },
      loading: false,
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
  methods: {
    submit() {
      console.log('clicked')
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
.search-doctor {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 33px;

  &__params {
    width: 797px;
    height: 230px;
    border-radius: 10px;
    background-image: url('@/assets/images/search-doctor-bg-2.png');
    background-size: cover;
    padding-left: 26px;
    padding-right: 26px;
    position: relative;

    &__block-1 {
      display: flex;
      align-items: baseline;
      margin-top: 24px;
    }

    &__block-2 {
      display: flex;
      gap: 24px;

      &__input {
        width: 360px;
        height: 47px;
        border-radius: 10px;
        background-color: #fff !important;
        box-shadow: 0px 4px 54px 0px rgba(68, 241, 166, 0.45);
        & ::v-deep {
          .multiselect__placeholder {
            background-color: #fff;
            @extend .text-style-black;
            color: #999;
            font-size: 16px;
          }
          .multiselect__tags {
            min-height: 50px;
            border-radius: 10px;
            padding: 8px 40px 0 8px;
            position: relative;
            z-index: 2;
          }
          .multiselect__select {
            top: 5px;
          }
          .multiselect__content-wrapper {
            top: 75px;
            position: absolute;
            border-radius: 10px;
            display: block;
            background: #fff;
            width: 100%;
            max-height: 240px;
            z-index: 50;
          }
          .multiselect__input::placeholder {
            color: #999;
          }
        }
      }
    }

    &__block-3 {
      width: 100%;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__checkbox {
        display: flex;
        align-items: center;
        gap: 10px;

        &__name {
          @extend .text-style;
          font-size: 18px;
          font-weight: 400;
          line-height: 22px;
        }
      }
    }

    &__block-4 {
      position: relative;
      width: 100px;

      &__text {
        @extend .text-style;
        font-size: 10px;
        font-weight: 600;
        line-height: 16px;
        text-decoration-line: underline;
        position: absolute;
        top: -7px;
        right: 0;
      }
    }
  }
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
.title {
  @extend .text-style;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
}
.title-balance {
  @extend .text-style;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  position: absolute;
  top: 24px;
  right: 27px;
  cursor: pointer;
}
.title-balance-num {
  @extend .text-style;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
}
.ru-icon {
  display: inline-block;
  width: 8px;
  height: 10px;
  background-image: url('@/assets/images/svg/vector-rub.svg');
  background-repeat: no-repeat;
}
.ui-label {
  padding-left: 20px;
  @extend .text-style;
  color: #f2f2f2;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
}
.block-label {
  display: flex;
  justify-content: center;
  gap: 5px;

  &__text {
    @extend .text-style;
    text-align: center;
    font-size: 8px;
    font-weight: 600;
    line-height: 8px;
  }
}
.divider {
  color: #b4e2c7;
}
.checkbox {
  & ::v-deep {
    .ui-checkbox__input:checked + .ui-checkbox__box {
      background-color: #ff9901;
      border: none;
    }
    .ui-checkbox__box {
      border: none;
    }
  }
}
.noResult-text {
  @extend .text-style-black;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}
.pagination {
  & ::v-deep {
    .ui-pagination__button {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    .ui-button--primary:not(.ui-button--outlined) {
      background-color: #469c79;
    }
    .ui-pagination__button:hover::after {
      border-radius: 50%;
      border-color: #469c79;
    }
  }
}
.payment {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 36px;
  position: relative;

  &__title {
    @extend .text-style-black;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
  }

  &__close {
    position: absolute;
    top: 30px;
    right: 30px;
    color: #469c79;
    transition: all 1s;

    &:hover {
      cursor: pointer;
      transition: all 1s;
      transform: rotate(0.5turn);
    }
  }

  &__content {
    width: 466px;
    height: 294px;
    border-radius: 16px;
    background: var(
      --,
      linear-gradient(
        149deg,
        #d9edde 8.02%,
        #cde8d5 46.56%,
        rgba(94, 210, 183, 0.6) 81.3%
      )
    );
    box-shadow: 0px 2px 8px 0px rgba(51, 51, 51, 0.15);
    position: relative;

    &__img {
      position: absolute;
      top: 24px;
      right: 24px;
    }

    &__fields {
      position: absolute;
      top: 112px;
      padding: 0 24px 24px 24px;

      &__block-1 {
        display: flex;
        gap: 18px;
      }

      &__block-2 {
        display: flex;
        gap: 127px;

        &__inp {
          width: 91px;
        }
      }
    }

    &__right-text {
      position: absolute;
      bottom: 30px;
      right: 23px;
      width: 100px;
      height: 34px;

      &__text {
        @extend .text-style-days;
        line-height: 14px;
        text-align: inherit;
      }
    }
  }

  &__text-under-card {
    margin-top: 36px;
    margin-bottom: 14px;
    @extend .text-style-days;
    font-size: 14px;
    line-height: 20px;
  }
}
.ui-inp-label {
  & ::v-deep {
    .ui-input-label__wrapper {
      padding-left: 0;
    }
  }
}
.custom-checkbox {
  margin-bottom: 36px;
  & ::v-deep {
    .ui-checkbox__box {
      border-color: #469c79;
    }
    .ui-checkbox:not(.ui-checkbox--disabled):not(.ui-checkbox--error):hover
      .ui-checkbox__box {
      border-color: #469c79;
    }
    .ui-checkbox__input:checked + .ui-checkbox__box {
      background-color: #469c79;
      border-color: #469c79;
    }
  }
}
.custom-errors {
  & ::v-deep {
    .ui-error-message:not(.ui-error-message--no-y-padding) {
      padding-top: 5px;
      padding-bottom: 5px;
    }
    .ui-error-message:not(.ui-error-message--no-x-padding) {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
}
</style>

<router>
  {
    path: '/search/all-doctors',
    name: 'all-doctors',
  }
</router>
