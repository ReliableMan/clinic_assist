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

    <div class="account_page__block">
      <!-- phone number -->
      <ui-input-label :label="$t('settings.phone_number')" black bold>
        <ui-input-phone
          v-model="phoneNumber"
          placeholder="+7 900 000 00 00"
          class="input-size mb-24"
          @change="checkNumber"
        >
          <template #append>
            <ui-icon class="color-icon" name="pencil" />
          </template>
        </ui-input-phone>
      </ui-input-label>

      <!-- password -->
      <ui-input-label :label="$t('settings.password')" black bold>
        <ui-input-password
          v-model="password"
          placeholder="Создан 3 недели назад"
          class="input-size mb-24"
          @change="checkPassword"
        >
          <template #append>
            <ui-icon class="color-icon" name="pencil" />
          </template>
        </ui-input-password>
      </ui-input-label>
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
        <ui-button color="error">
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
            <span class="loading-elem__text"
              >Изменения <br />
              сохранены!</span
            >
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
      btnActive: true,
      loading: false,
      saveStatus: false,
      phoneNumber: '',
      password: '',
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
  computed: {
    // options_map() {
    //   return {
    //     'Europe/Kaliningrad': 'Калининградский (UTC + 02:00)',
    //     'Europe/Moscow': 'Московский (UTC + 03:00)',
    //     'Europe/Samara': 'Самарский (UTC + 04:00)',
    //     'Asia/Yekaterinburg': 'Екатеринбургский (UTC + 05:00)',
    //     'Asia/Omsk': 'Омский (UTC + 06:00)',
    //     'Asia/Krasnoyarsk': 'Красноярский (UTC + 07:00)',
    //     'Asia/Irkutsk': 'Иркутский (UTC + 08:00)',
    //     'Asia/Yakutsk': 'Якутский (UTC + 09:00)',
    //     'Asia/Vladivostok': 'Владивостокский (UTC + 10:00)',
    //     'Asia/Magadan': 'Магаданский (UTC + 11:00)',
    //     'Asia/Kamchatka': 'Камчатский (UTC + 12:00)',
    //   }
    // },
    // options() {
    //   return this.$store.state.timezone.items
    //     .map((item) => ({
    //       ...item,
    //       label: this.options_map[item.timezone],
    //     }))
    //     .reverse()
    // },
  },
  methods: {
    // вызываем функцию по проверке номера телефона
    checkNumber() {
      console.log(this.phoneNumber)
    },
    // вызываем функцию по проверке пароля
    checkPassword() {
      console.log(this.password)
    },
    save() {
      this.loading = true
      this.btnActive = false
      setTimeout(() => {
        this.loading = false
        this.saveStatus = true
      }, 1500)
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
  padding-right: 24px;
  cursor: pointer;
}
.color-save-icon {
  color: #d6d6d6;
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
</style>

<router>
  {
    path: '/settings/account',
    name: 'account',
  }
</router>
