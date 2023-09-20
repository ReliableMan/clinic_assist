<template>
  <div>
    <ui-container size="xxs" class="mb-8">
      <ui-form ref="form" v-slot="{ failed }" @submit="submit">
        <div class="mb-36">
          <!-- секция личные данные -->
          <div class="d-flex-row">
            <auth-label
              icon="user"
              :label="$t('common.personal_data')"
              class="mb-20"
              :icon-size="[17, 20]"
            />
            <auth-label
              icon=""
              :label="$t('common.small_star_text')"
              class="mb-20"
              style="color: red"
              :icon-size="[17, 20]"
            />
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
              icon="user"
              :label="$t('common.login_details')"
              class="mb-20"
              :icon-size="[17, 20]"
            />
            <auth-label
              icon=""
              :label="$t('common.small_star_text')"
              class="mb-20"
              style="color: red"
              :icon-size="[17, 20]"
            />
          </div>
        </div>

        <!-- <div class="mb-36">
          <auth-label
            icon="phone"
            :label="$t('common.phone')"
            class="mb-20"
            :icon-size="[16, 16]"
          />

          <ui-validator
            v-slot="{ error }"
            rules="required|phone"
            :custom-messages="{ required: $t('validation.required_phone') }"
          >
            <ui-input-local-phone v-model="fields.phone" :error="error" />
          </ui-validator>
        </div> -->

        <!-- <div class="mb-36">
          <auth-label
            icon="door"
            :label="$t('common.login_details')"
            class="mb-20"
            :icon-size="[15, 20]"
          />

          <ui-validator
            v-slot="{ error }"
            rules="required|email"
            vid="email"
            :custom-messages="{ required: $t('validation.required_email') }"
            class="mb-18"
          >
            <ui-input
              v-model.trim="fields.email"
              :error="error"
              :placeholder="$t('common.email')"
            />
          </ui-validator>

          <ui-validator-password
            v-slot="{ error }"
            :custom-messages="{
              required: $t('validation.required_new_password'),
            }"
            class="mb-18"
          >
            <ui-input-password
              v-model.trim="fields.password"
              autocomplete="new-password"
              :error="error"
              :placeholder="$t('common.pick_a_password')"
            />
          </ui-validator-password>

          <ui-validator v-slot="{ error }" vid="promoCode" class="mb-24">
            <ui-input
              v-model="fields.promoCode"
              :error="error"
              :placeholder="$t('common.promo_if_available')"
            />
          </ui-validator>
        </div> -->
        <ui-button
          color="primary"
          fluid
          :disabled="failed"
          :loading="loading"
          type="submit"
        >
          {{ $t('common.to_register') }}
        </ui-button>
      </ui-form>
    </ui-container>
    <ui-container size="sm">
      <!-- <auth-registration-agree /> -->
    </ui-container>
  </div>
</template>

<script>
// import AuthRegistrationAgree from '@/components/app/AuthRegistrationAgree.vue'
import AuthLabel from '@/components/app/AuthLabel.vue'

export default {
  components: {
    // AuthRegistrationAgree,
    AuthLabel,
  },
  data() {
    return {
      loading: false,
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
        promoCode: '',
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
      // this.$router.push({
      //   path: this.localePath({ name: 'signup-check-email' }),
      //   query: {
      //     email: this.fields.email,
      //   },
      // })

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
      } else if (error.response.data.promoCode) {
        this.$refs.form.setErrors({
          promoCode: this.$t('validation.promo_code'),
        })
      } else {
        this.$toast.error(this.$t('common.an_unexpected_error_occurred'))
      }
    },
    async submit() {
      this.loading = true

      const { agree, ...payload } = this.fields

      await this.$axios
        .post('/registration', payload)
        .then(this.onSuccess)
        .catch(this.onError)

      this.loading = false
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
</style>

<router>
  {
    path: '/sign-up',
    name: 'sign-up',
  }
</router>
