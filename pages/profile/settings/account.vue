<template>
  <div class="account_page">
    <div class="d-flex flex-column">
      <span class="account_page__title">{{ $t('settings.account') }}</span>
      <p class="account_page__subtitle">
        {{ $t('settings.personal_settings') }}
      </p>
    </div>

    <ui-divider class="divider" horizontal />

    <!-- Contacts info -->
    <span class="account_page__title-2">
      {{ $t('settings.contacts_info') }}
    </span>
    <!-- phone number -->
    <div class="account_page__block">
      <div class="input-size mb-24">
        <ui-input-editable
          v-model="preview"
          width="300px"
          :label="$t('settings.phone_number')"
          :label-cancel="$t('settings.cancel')"
        >
          <template #preview>
            <ui-pseudo-input
              class="inp-custom-style"
              :value="phoneNumber ? phoneNumber : '+7 900 000 00 00'"
            >
              <template #append>
                <ui-button
                  static="sm"
                  class="color-btn-bg mr-14"
                  rounded
                  @click="preview = false"
                >
                  <ui-icon class="color-icon" name="pencil" />
                </ui-button>
              </template>
            </ui-pseudo-input>
          </template>
          <template #edit>
            <div class="mb-18">
              <ui-input-phone
                v-model="phoneNumber"
                class="inp-custom-style"
                placeholder="+7 900 000 00 00"
              />
            </div>
            <ui-button
              v-if="confirmNumberBtn"
              color="warning"
              width="300px"
              @click="confirmNumber"
            >
              <span class="confirm-btn">{{
                $t('settings.confirm_phone')
              }}</span>
              <template #append-icon>
                <ui-icon name="check" />
              </template>
            </ui-button>
            <ui-transition-slide v-if="confirmSms">
              <ui-input-sms
                :confirmed.sync="confirmed"
                :confirm-sms-method="confirm"
                placeholder="Введите код из СМС"
              >
                <template #text-sms-incorrectly> Код введён неверно </template>
                <template #text-sms-message="{ length }">
                  На указанный номер телефона был выслан
                  {{ length }}-значный код, введите его в это поле.
                </template>
                <template #text-sms-resend="{ resend, countdown, timeover }">
                  <a
                    href="#"
                    :class="{ 'text-green': !timeover }"
                    class="text-bold"
                    @click.prevent="resend"
                  >
                    Выслать повторно
                  </a>
                  можно через {{ countdown }} секунд...
                </template>
              </ui-input-sms>
            </ui-transition-slide>
          </template>
        </ui-input-editable>
        <div
          v-if="phoneStatus"
          class="d-flex items-center content-center mt-18"
        >
          <span class="status-text">
            {{ $t('settings.confirmed_phone') }}
          </span>
          <ui-icon class="color-icon ml-10" name="check" />
        </div>
      </div>

      <!-- password -->
      <div class="input-size mb-24">
        <ui-form ref="form" v-slot="{ failed }" @submit="submit">
          <ui-input-editable
            v-model="preview2"
            :label="$t('settings.password')"
            :label-cancel="$t('settings.cancel')"
          >
            <template #preview>
              <ui-pseudo-input
                class="inp-custom-style"
                :value="dataChange ? dataChange : 'Обновлён 2 месяца назад'"
              >
                <template #append>
                  <ui-button
                    static="sm"
                    rounded
                    text-color="blue-light-2"
                    text-hover-color="primary"
                    class="color-btn-bg mr-14"
                    @click="preview2 = false"
                  >
                    <ui-icon
                      class="color-icon"
                      name="pencil"
                      :size="[16, 16]"
                    />
                  </ui-button>
                </template>
              </ui-pseudo-input>
            </template>
            <template #edit>
              <ui-validator
                v-slot="{ error }"
                class="mb-18"
                rules="required"
                :custom-messages="{
                  required: $t('validation.required_password'),
                }"
              >
                <ui-input-password
                  v-model="fields.oldPassword"
                  :error="error"
                  :placeholder="$t('settings.current_password')"
                />
              </ui-validator>

              <ui-validator
                v-slot="{ error }"
                class="mb-18"
                rules="required"
                :custom-messages="{
                  required: $t('validation.required_new_password'),
                }"
              >
                <ui-input-password
                  v-model="fields.newPassword"
                  :error="error"
                  :placeholder="$t('settings.new_password')"
                />
              </ui-validator>

              <ui-button
                color="warning"
                :disabled="failed"
                :loading="loading2"
                fluid
                type="submit"
              >
                {{ $t('settings.change_password') }}
              </ui-button>
            </template>
          </ui-input-editable>
          <div
            v-if="passwordStatus"
            class="d-flex items-center content-center mt-18"
          >
            <span class="status-text">
              {{ $t('settings.confirmed_password') }}
            </span>
            <ui-icon class="color-icon ml-10" name="check" />
          </div>
        </ui-form>
      </div>
    </div>

    <ui-divider class="divider" horizontal />

    <span class="account_page__title-2">
      {{ $t('settings.timezone') }}
    </span>

    <div class="account_page__block">
      <!-- timezone -->
      <ui-input-label :label="$t('settings.timezone')">
        <ui-select
          class="input-size mb-24"
          :value="$auth.user.profile.timezone"
          :options="optionsTimezone"
          option-label="timezone"
          option-value="timezone"
          :placeholder="$t('settings.timezone')"
        />
      </ui-input-label>
    </div>

    <ui-divider class="divider" horizontal />

    <span class="account_page__title-2">
      {{ $t('settings.remove_account') }}
    </span>

    <div class="account_page__block2">
      <!-- remove account -->
      <span class="account_page__subtitle2">
        {{ $t('settings.remove_account_text') }}
      </span>
      <div class="mt-24">
        <ui-button color="error" @click="remove">
          {{ $t('settings.delete_account') }}
        </ui-button>
      </div>

      <div class="account_page__saveStatus">
        <div class="d-flex flex-column">
          <div class="mr-20">
            <ui-button v-if="btnActive" light-shadow @click="save">
              <ui-icon class="color-save-icon" name="save"
            /></ui-button>
          </div>
          <div v-if="loading" class="loading-elem">
            <span class="loading-elem__text">Сохраняем...</span>
            <ui-icon class="loading-elem__icon" name="save" />
          </div>
          <div v-if="saveStatus" class="loading-elem">
            <span class="loading-elem__text">
              Изменения <br />
              сохранены!
            </span>
            <ui-icon class="loading-elem__icon" name="save" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Account',
  components: {},
  data() {
    return {
      // внизу справа значок сохранения
      loading: false,
      btnActive: true, // скрывается кнопка после нажатия
      saveStatus: false, // статус сохранения - сохранено
      // номер телефона
      preview: true, // для проверки номера телефона
      phoneNumber: '', // номер телефона
      confirmSms: false, // видимость для блока для смс проверки
      confirmed: false, // подтверждено для смс проверки
      confirmNumberBtn: true, // видимость оранжевой кнопки для подтверждения номера
      phoneStatus: false, // номер телефона подтвержден
      // пароль
      loading2: false,
      preview2: true,
      dataChange: '',
      passwordStatus: false, // пароль успешно изменен
      fields: {
        oldPassword: '',
        newPassword: '',
      },
      optionsTimezone: [
        {
          label: 'Europe/Kaliningrad',
          timezone: 'Калининградский (UTC + 02:00)',
        },
        { label: 'Europe/Moscow', timezone: 'Московский (UTC + 03:00)' },
        { label: 'Europe/Samara', timezone: 'Самарский (UTC + 04:00)' },
        {
          label: 'Asia/Yekaterinburg',
          timezone: 'Екатеринбургский (UTC + 05:00)',
        },
        { label: 'Asia/Omsk', timezone: 'Омский (UTC + 06:00)' },
        { label: 'Asia/Krasnoyarsk', timezone: 'Красноярский (UTC + 07:00)' },
        { label: 'Asia/Irkutsk', timezone: 'Иркутский (UTC + 08:00)' },
        { label: 'Asia/Yakutsk', timezone: 'Якутский (UTC + 09:00)' },
        {
          label: 'Asia/Vladivostok',
          timezone: 'Владивостокский (UTC + 10:00)',
        },
        { label: 'Asia/Magadan', timezone: 'Магаданский (UTC + 11:00)' },
        { label: 'Asia/Kamchatka', timezone: 'Камчатский (UTC + 12:00)' },
      ],
    }
  },
  computed: {},
  methods: {
    // вызываем функцию по проверке номера телефона по смс
    confirm(sms) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (+sms % 2) {
            reject(new Error('error'))
          } else {
            resolve(this.defaultState())
          }
        }, 1000)
      })
    },
    // вызываем функцию по проверке пароля
    checkPassword() {
      // console.log(this.password)
    },
    confirmNumber() {
      this.confirmNumberBtn = false
      this.confirmSms = true
    },
    save() {
      this.loading = true
      this.btnActive = false
      setTimeout(() => {
        this.loading = false
        this.saveStatus = true
      }, 1500)
    },
    defaultState() {
      this.confirmSms = false
      this.preview = true
      this.phoneStatus = true
    },
    onError(error) {
      if (error.oldPassword) {
        this.$refs.form.setErrors({
          oldPassword: this.$t('common.wrong_password'),
        })
      } else {
        this.$toast.error(this.$t('common.an_unexpected_error_occurred'))
      }
    },
    onSuccess() {
      this.$toast.once(this.$t('settings.password_changed_successfully'))

      this.preview2 = true
      this.fields.oldPassword = ''
      this.fields.newPassword = ''
    },
    async submit() {
      this.loading2 = true

      await this.$store
        .dispatch('user/changeField', this.fields)
        .then(this.onSuccess)
        .catch(this.onError)

      this.loading2 = false
      this.dataChange = 'Обновлён только что'
      this.passwordStatus = true
    },
    // btn for remove account
    remove() {
      this.showModal()
    },
    onSuccess2() {
      this.$modal.close('ConfirmAccountRemove')

      this.$toast.show('success delete')
    },
    onError2() {
      this.$toast.error('error')
    },
    confirm2() {
      this.onSuccess2()
    },
    showModal() {
      const props = {
        loading: false,
      }

      const listeners = {
        confirm: async () => {
          props.loading = true

          await this.confirm2()

          props.loading = false
        },
      }

      this.$modal.open('ConfirmAccountRemove', props, listeners)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.sass';

.text-style-1 {
  color: #333;
  font-family: $base-font-family;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
}
.account_page {
  padding: 28px 36px 0 36px;
  position: relative;

  &__title {
    @extend .text-style-1;
  }

  &__title-2 {
    @extend .text-style-1;
    line-height: 24px;
  }

  &__subtitle {
    @extend .text-style-1;
    color: #999;
    font-size: 14px;
    line-height: 20px;
  }

  &__subtitle2 {
    @extend .text-style-1;
    font-size: 14px;
    line-height: 20px;
  }

  &__block {
    padding: 24px 0 0 24px;
  }

  &__block2 {
    padding: 24px 0 0 24px;
    width: 600px;
  }

  &__saveStatus {
    position: absolute;
    bottom: 22px;
    right: 0;
  }
}
.divider {
  color: #b4e2c7;
  margin: 32px 0 24px 0;
}
.input-size {
  width: 300px;
}
.color-icon {
  color: #87c5a0;
  cursor: pointer;
}
.color-btn-bg {
  background-color: #e7f4f1;
}
.color-save-icon {
  color: #d6d6d6;
}
.inp-custom-style {
  border: none !important;
  background-color: #e7f4f1 !important;
  border-radius: 10px;
}
.loading-elem {
  display: flex;
  width: 133px;
  height: 46px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(51, 51, 51, 0.15);

  &__text {
    @extend .text-style-1;
    font-size: 12px;
    line-height: 16px;
  }

  &__icon {
    width: 18px;
    height: 18px;
    color: #87c5a0;
    padding-left: 8px;
  }
}
.confirm-btn {
  color: #fff;
  font-family: $base-font-family;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.4px;
}
.text-green {
  color: #469c79;
}
.status-text {
  color: #333;
  font-family: $base-font-family;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
}
</style>

<style>
.ui-input,
.ui-input__field {
  background: #e7f4f1 !important;
}
.ui-input--focus {
  border-color: #87c5a0 !important;
  background-color: #e7f4f1 !important;
}
.ui-link-button__label {
  color: #469c79;
}
.ui-button--text-blue-light-2 {
  color: #469c79 !important;
}
.ui-select-item:checked,
.ui-select-item:hover {
  background-color: #469c79 !important;
}
.ui-select--filled {
  border-color: #87c5a0 !important;
  background-color: #e7f4f1 !important;
}
</style>

<router>
  {
    path: '/settings/account',
    name: 'account',
  }
</router>
