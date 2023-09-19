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
        </div>

        <div class="mb-36">
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
        </div>

        <div class="mb-36">
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
        </div>

        <div>
          <div>
            value: {{ value }}
            <ui-custom-checkbox v-slot="{ checked }" v-model="value">
              <div :class="{ 'text-primary': checked }">XXX</div>
            </ui-custom-checkbox>
          </div>
        </div>

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
        promoCode: '',
        agree: true,
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
.d-flex-row {
  display: flex;
  justify-content: center;
}
</style>

<router>
  {
    path: '/sign-up',
    name: 'sign-up',
  }
</router>
