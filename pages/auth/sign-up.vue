<template>
  <div>
    <ui-form ref="form" v-slot="{ failed }" @submit="submit">
      <ui-container size="xxs" class="mb-8">
        <div class="mb-30">
          <!-- секция личные данные -->
          <div class="d-flex-row">
            <auth-label
              icon="user"
              :label="$t('common.personal_data')"
              class="mb-20"
              :icon-size="[17, 20]"
            />
            <i18n
              path="common.small_star_text"
              tag="span"
              class="small_star_after_text"
            ></i18n>
          </div>
          <!-- Фамилия -->
          <ui-validator
            v-slot="{ error }"
            rules="required"
            :custom-messages="{ required: $t('validation.required_last_name') }"
            class="mb-18"
          >
            <ui-input
              v-model="fields.surname"
              :error="error"
              :placeholder="$t('common.last_name')"
            />
          </ui-validator>

          <!-- Имя -->
          <ui-validator
            v-slot="{ error }"
            rules="required"
            :custom-messages="{ required: $t('validation.required_name') }"
            class="mb-18"
          >
            <ui-input
              v-model="fields.name"
              :error="error"
              :placeholder="$t('common.name')"
            />
          </ui-validator>

          <!-- Отчество -->
          <ui-validator
            v-slot="{ error }"
            rules="required"
            :custom-messages="{
              required: $t('validation.required_middle_name'),
            }"
            class="mb-18"
          >
            <ui-input
              v-model="fields.lastName"
              :error="error"
              :placeholder="$t('common.middle_name')"
            />
          </ui-validator>

          <!-- Дата рождения -->
          <ui-validator
            v-slot="{ error }"
            rules="required"
            :custom-messages="{
              required: $t('validation.date'),
            }"
            class="mb-18"
          >
            <ui-input-label label="Дата рождения" black bold>
              <ui-input-date
                v-model="fields.date"
                :error="error"
                :placeholder="$t('common.date')"
                aria-required="true"
              />
            </ui-input-label>
          </ui-validator>
          <!-- Гендер -->
          <div class="checkbox-gender">
            <ui-validator
              v-slot="{ error }"
              rules="required"
              :custom-messages="{
                required: $t('validation.required_radio'),
              }"
              class="mb-18"
            >
              <ui-input-label label="Пол" black bold>
                <div class="checkbox-radio-btn mt-5">
                  <input
                    :id="fields.gender.man"
                    v-model="fields.valueGender"
                    :error="error"
                    type="radio"
                    :value="fields.gender.man"
                  />
                  <label
                    class="man-svg-icon"
                    name="radio"
                    :for="fields.gender.man"
                  >
                    {{ fields.gender.man }}
                  </label>
                </div>
                <div class="checkbox-radio-btn mt-5">
                  <input
                    :id="fields.gender.woman"
                    v-model="fields.valueGender"
                    type="radio"
                    :value="fields.gender.woman"
                  />
                  <label
                    class="woman-svg-icon"
                    name="radio"
                    :for="fields.gender.woman"
                  >
                    {{ fields.gender.woman }}
                  </label>
                </div>
              </ui-input-label>
            </ui-validator>
          </div>
          <!-- Данные для входа -->
          <div class="d-flex-row">
            <auth-label
              icon="door"
              :label="$t('common.login_details')"
              class="mb-20"
              :icon-size="[17, 20]"
            />
            <i18n
              path="common.small_star_text"
              tag="span"
              class="small_star_after_text"
            ></i18n>
          </div>

          <ui-validator
            v-slot="{ error }"
            class="mb-20"
            rules="required|phone"
            :custom-messages="{ required: $t('validation.required_phone') }"
          >
            <ui-input-local-phone
              v-model="fields.phone"
              :error="error"
              placeholder="Телефон"
            />
          </ui-validator>
          <!-- check mobile phone -->
          <ui-button
            color="success"
            fluid
            :disabled="failed"
            :loading="loading"
            type="button"
          >
            {{ $t('common.confirm') }}
          </ui-button>
        </div>
      </ui-container>

      <!-- Ожидайте СМС, чтобы подтвердить ваш номер телефона -->
      <div class="d-flex-row">
        <i18n
          path="common.wait_sms_to_confirm_number_phone"
          tag="div"
          class="text-center fs-14 text-style"
        ></i18n>
        <i18n
          path="common.small_star_text"
          tag="span"
          class="small_star_after_text"
        ></i18n>
      </div>
      <!-- next container -->
      <ui-container size="xxs">
        <!-- Код из смс -->
        <div class="mt-10 mb-20">
          <ui-input-sms
            append-icon="time"
            :confirmed.sync="confirmed"
            :confirm-sms-method="confirm"
            :placeholder="$t('common.code_from_sms')"
          >
            <template #text-sms-incorrectly> Код введён неверно </template>

            <template #append>
              <ui-icon class="vector_ok" name="check" />
            </template>
          </ui-input-sms>
        </div>

        <!-- Пароль -->
        <ui-validator
          v-slot="{ error }"
          rules="required"
          :custom-messages="{ required: $t('validation.required_password') }"
          class="mb-24"
        >
          <ui-input-password
            v-model.trim="fields.password"
            :placeholder="$t('common.password')"
            :error="error"
          />
        </ui-validator>

        <ui-button
          color="warning"
          fluid
          :disabled="failed"
          :loading="loading"
          type="submit"
        >
          {{ $t('common.next_step') }}
        </ui-button>
      </ui-container>

      <!--  -->

      <!--  -->
    </ui-form>
  </div>
</template>

<script>
import AuthLabel from '@/components/app/AuthLabel.vue'

export default {
  components: {
    AuthLabel,
  },
  data() {
    return {
      loading: false,
      confirmed: false,
      value: '',
      fields: {
        surname: '', // фамилия
        name: '', // имя
        lastName: '', // отчество
        date: '', // дата
        location: '', // местоположение
        placeOfWork: '',
        phone: '', // телефон
        email: '', // почта
        password: '', // пароль
        gender: {
          man: 'Мужской',
          woman: 'Женский',
        },
        valueGender: '',
      },
    }
  },
  methods: {
    onSuccess() {
      const options = {
        auth: {
          username: this.fields.email,
          password: this.fields.password,
        },
      }

      this.$auth.login(options).catch(this.onError)
    },
    onError(error) {
      if (error.response.data.email) {
        this.$refs.form.setErrors({
          email: this.$t('validation.email_already_exist'),
        })
      } else {
        this.$toast.error(this.$t('common.an_unexpected_error_occurred'))
      }
    },
    // async submit () {
    submit() {
      this.loading = true

      // const { ...payload } = this.fields

      // await this.$axios
      //   .post('/registration', payload)
      //   .then(this.onSuccess)
      //   .catch(this.onError)

      this.loading = false

      // redirect on next page registration
      this.$router.push('/sign-up-2')
    },

    confirm(sms) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (+sms % 2) {
            reject(new Error('error'))
          } else {
            resolve()
          }
        }, 1000)
      })
    },
  },
}
</script>

<style>
.text-primary {
  color: #469c79 !important;
}
</style>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.sass';

// .title {
//   color: var(--primary-2, #333);
//   margin-bottom: 20px;
//   font-family: $base-font-family;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 20px;
// }

.d-flex-row {
  display: flex;
  justify-content: center;
}
.checkbox-gender {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.checkbox-radio-btn {
  display: inline-block;
}
.checkbox-radio-btn input[type='radio'] {
  display: none;
}
.checkbox-radio-btn label {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 137px;
  height: 46px;
  padding: 0px 15px;
  line-height: 34px;
  border-radius: 10px;
  user-select: none;
  padding-left: 35px;
  font-family: $base-font-family;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}
.checkbox-radio-btn input[type='radio']:checked + label {
  box-shadow: 0px 0px 0px 2px #469c79;
}

.man-svg-icon {
  width: 18px;
  height: 20px;
  background-image: url('@/assets/images/svg/regAndAuth/vector-man.svg');
  background-repeat: no-repeat;
  background-position: left 15px top 10px;
}
.woman-svg-icon {
  width: 15px;
  height: 24px;
  background-image: url('@/assets/images/svg/regAndAuth/vector-woman.svg');
  background-repeat: no-repeat;
  background-position: left 15px top 10px;
}
.vector_ok {
  margin-right: 14px;
  color: #469c79;
}
.small_star_after_text {
  margin-top: -3px;
  margin-left: 3px;
  color: red;
}
</style>

<router>
  {
    path: '/sign-up',
    name: 'sign-up',
  }
</router>
