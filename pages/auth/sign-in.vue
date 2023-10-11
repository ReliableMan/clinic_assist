<template>
  <ui-container size="xxs">
    <ui-form v-slot="{ failed }" class="mb-18" @submit="submit">
      <ui-validator
        v-slot="{ error }"
        rules="required|email"
        :custom-messages="{ required: $t('validation.required_email') }"
        class="mb-18"
      >
        <ui-input
          v-model.trim="fields.email"
          :placeholder="$t('common.email')"
          :error="error || server_error"
        />
      </ui-validator>

      <!-- вместо почты там телефон, раскомментить и закомментить почту -->
      <!-- <ui-validator
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
      </ui-validator> -->

      <ui-validator
        v-slot="{ error }"
        rules="required"
        :custom-messages="{ required: $t('validation.required_password') }"
        class="mb-24"
      >
        <ui-input-password
          v-model.trim="fields.password"
          :placeholder="$t('common.password')"
          :error="error || server_error"
        />

        <ui-transition-collapse>
          <div v-if="invalid_credentials">
            <ui-error-message>
              {{ $t('validation.login_or_password') }}
            </ui-error-message>
          </div>
          <div v-else-if="not_confirmed_or_block">
            <ui-error-message>
              {{ $t('validation.not_confirmed_or_block') }}
            </ui-error-message>
          </div>
        </ui-transition-collapse>
      </ui-validator>

      <ui-button
        color="success"
        fluid
        type="submit"
        :disabled="failed"
        :loading="loading"
      >
        {{ $t('common.login') }}
      </ui-button>
    </ui-form>

    <i18n
      path="system.auth.forgot_password.text1"
      tag="div"
      class="text-grey text-center fs-14 text-style"
    ></i18n>

    <i18n
      path="system.auth.forgot_password.text2"
      tag="div"
      class="text-grey text-center fs-14 text-style"
    >
      <template #link>
        <nuxt-link
          :to="localePath('password-recovery-by-email')"
          class="sign-link"
        >
          {{ $t('system.auth.forgot_password.links.0') }}
        </nuxt-link>
      </template>
    </i18n>
  </ui-container>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      invalid_credentials: false,
      not_confirmed_or_block: false,
      fields: {
        email: '',
        password: '',
      },
    }
  },
  computed: {
    server_error() {
      return this.invalid_credentials || this.not_confirmed_or_block
    },
  },
  methods: {
    onError(error) {
      if (error.response.status === 401) {
        this.invalid_credentials = true
      } else {
        this.not_confirmed_or_block = true
      }
    },
    async submit() {
      this.invalid_credentials = false
      this.not_confirmed_or_block = false
      this.loading = true

      const options = {
        auth: {
          username: this.fields.email,
          password: this.fields.password,
        },
      }

      await this.$auth.login(options).catch(this.onError)

      this.loading = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.sass';
.sign-link {
  color: #469c79;
  text-decoration: none;
}
.text-style {
  color: rgba(51, 51, 51, 0.5);
  font-family: $base-font-family;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
</style>

<style>
.ui-button--text-blue-light-2 {
  color: #469c79 !important;
}
.ui-input--focus {
  border-color: #469c79 !important;
}
.ui-input {
  background-color: #e7f4f1 !important;
}
.ui-input--error {
  border: 1px solid !important;
  background-color: #fdf2f2 !important;
  border-color: #eca5a5 !important;
}
.ui-input--filled {
  border-color: #18924b !important;
}
</style>

<router>
    {
      path: '/sign-in',
      name: 'sign-in',
    }
  </router>
