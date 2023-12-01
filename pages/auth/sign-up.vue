<template>
  <div>
    <ui-form ref="form" v-slot="{ failed }" @submit="submit">
      <ui-container v-if="!nextPartReg" size="xxs" class="mb-8">
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
              v-model="fields.patronymic"
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
                v-model="fields.birthday"
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
                    :id="gender.man"
                    v-model="fields.gender"
                    :error="error"
                    type="radio"
                    :value="gender.man"
                  />
                  <label class="man-svg-icon" name="radio" :for="gender.man">
                    {{ $t('common.male') }}
                  </label>
                </div>
                <div class="checkbox-radio-btn mt-5">
                  <input
                    :id="gender.woman"
                    v-model="fields.gender"
                    type="radio"
                    :value="gender.woman"
                  />
                  <label
                    class="woman-svg-icon"
                    name="radio"
                    :for="gender.woman"
                  >
                    {{ $t('common.female') }}
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

          <!-- <ui-validator
            v-slot="{ error }"
            class="mb-20"
            rules="required|phone"
            :custom-messages="{ required: $t('validation.required_phone') }"
          >
            <ui-input-local-phone
              v-model.trim="fields.phone"
              :error="error"
              placeholder="Телефон"
            />
          </ui-validator> -->
        </div>
      </ui-container>

      <!-- Ожидайте СМС, чтобы подтвердить ваш номер телефона -->
      <!-- <div v-if="!nextPartReg" class="d-flex-row">
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
      </div> -->
      <!-- next container -->
      <ui-container v-if="!nextPartReg" size="xxs">
        <!-- Код из смс -->
        <!-- <div class="mt-10 mb-20">
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
        </div> -->

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
          :disabled="buttonNextPartReg"
          :loading="loading"
          @click="nextPartRegistr"
        >
          {{ $t('common.next_step') }}
        </ui-button>
        <!-- <ui-button
          color="warning"
          fluid
          :loading="loading"
          @click="nextPartRegistr"
        >
          {{ $t('common.next_step') }}
        </ui-button> -->
      </ui-container>

      <div v-if="nextPartReg">
        <ui-container size="xxs" class="mb-8">
          <div class="mb-30">
            <!-- Страна -->
            <ui-validator
              v-slot="{ error }"
              rules="required"
              :custom-messages="{
                required: $t('validation.required_country'),
              }"
              class="mb-18"
            >
              <ui-input-label
                :label="$t('common.country')"
                black
                bold
              ></ui-input-label>
              <ui-input-country
                v-model.trim="fields.country"
                :placeholder="$t('common.select_country')"
                :error="error"
              />
            </ui-validator>

            <!-- Населённый пункт -->
            <ui-validator
              v-slot="{ error }"
              rules="required"
              :custom-messages="{
                required: $t('validation.required_locality'),
              }"
              class="mb-18"
            >
              <ui-input-label
                :label="$t('common.locality')"
                black
                bold
              ></ui-input-label>
              <ui-input-autocomplete
                v-model.trim="fields.city"
                :placeholder="$t('common.placeholder_locality')"
                :suggestions="suggestionsCity"
                :error="error"
              />
            </ui-validator>

            <!-- Аллергии -->
            <ui-input-label :label="$t('common.allergy')" black bold>
              <multiselect
                v-model="fields.allergies"
                class="multiselect-custom"
                :placeholder="$t('common.placeholder_allergies')"
                label="name"
                track-by="code"
                :options="suggestionsAllergy"
                :multiple="true"
                :taggable="true"
                select-label="✔"
                selected-label="✔"
                deselect-label="✔"
                tag-placeholder="добавить"
                @tag="addTag"
              ></multiselect>
            </ui-input-label>

            <!--  Рост и вес -->
            <div class="biological">
              <!-- height -->
              <ui-input-label :label="$t('common.bio_height')" black bold>
                <ui-input-select
                  v-model="fields.height"
                  :select="1"
                  :options="optionsHeight"
                  placeholder="205"
                />
              </ui-input-label>
              <!-- weight -->
              <ui-input-label :label="$t('common.bio_weight')" black bold>
                <ui-input-select
                  v-model="fields.weight"
                  :select="1"
                  :options="optionsWeight"
                  placeholder="90"
                />
              </ui-input-label>
            </div>

            <!-- Постоянно принимаемые лекарства -->
            <ui-input-label
              :label="$t('common.regularly_medications')"
              black
              bold
            >
              <multiselect
                v-model="fields.drugs"
                class="multiselect-custom"
                :placeholder="$t('common.placeholder_medications')"
                label="name"
                track-by="code"
                :options="suggestionsMedications"
                :multiple="true"
                :taggable="true"
                select-label="✔"
                selected-label="✔"
                deselect-label="✔"
                tag-placeholder="добавить"
                @tag="addTagMedications"
              ></multiselect>
            </ui-input-label>

            <!-- Хронические заболевания -->
            <div class="mt-18">
              <ui-input-label :label="$t('common.chronic_diseases')" black bold>
                <multiselect
                  v-model="fields.chronicDiseases"
                  class="multiselect-custom"
                  :placeholder="$t('common.placeholder_chronic_diseases')"
                  label="name"
                  track-by="code"
                  :options="suggestionsChronicDiseases"
                  :multiple="true"
                  :taggable="true"
                  select-label="✔"
                  selected-label="✔"
                  deselect-label="✔"
                  tag-placeholder="добавить"
                  @tag="addTagChronicDiseases"
                ></multiselect>
              </ui-input-label>
            </div>

            <!-- Группа крови -->
            <div class="mt-18">
              <ui-input-label :label="$t('common.blood_type')" black bold>
                <div class="checkbox-bloodType">
                  <div class="checkbox-radio-btn2 mt-5">
                    <input
                      :id="bloodTypes.first"
                      v-model="fields.blood"
                      type="radio"
                      :value="bloodTypes.first"
                    />
                    <label
                      class="blood-icon"
                      name="radio"
                      :for="bloodTypes.first"
                    >
                      I
                    </label>
                  </div>
                  <div class="checkbox-radio-btn2 mt-5">
                    <input
                      :id="bloodTypes.second"
                      v-model="fields.blood"
                      type="radio"
                      :value="bloodTypes.second"
                    />
                    <label
                      class="blood-icon"
                      name="radio"
                      :for="bloodTypes.second"
                    >
                      II
                    </label>
                  </div>
                  <div class="checkbox-radio-btn2 mt-5">
                    <input
                      :id="bloodTypes.third"
                      v-model="fields.blood"
                      type="radio"
                      :value="bloodTypes.third"
                    />
                    <label
                      class="blood-icon"
                      name="radio"
                      :for="bloodTypes.third"
                    >
                      III
                    </label>
                  </div>
                  <div class="checkbox-radio-btn2 mt-5">
                    <input
                      :id="bloodTypes.fourth"
                      v-model="fields.blood"
                      type="radio"
                      :value="bloodTypes.fourth"
                    />
                    <label
                      class="blood-icon"
                      name="radio"
                      :for="bloodTypes.fourth"
                    >
                      IV
                    </label>
                  </div>
                </div>
              </ui-input-label>
            </div>

            <!-- Резус-фактор -->
            <div class="mt-18">
              <ui-input-label :label="$t('common.Rh_factor')" black bold>
                <div class="checkbox-RhFactor">
                  <div class="checkbox-radio-btn2 mt-5">
                    <input
                      :id="RhFactorTypes.positive"
                      v-model="fields.rh"
                      type="radio"
                      :value="true"
                    />
                    <label
                      class="blood-icon"
                      name="radio"
                      :for="RhFactorTypes.positive"
                    >
                      Rh+
                    </label>
                  </div>
                  <div class="checkbox-radio-btn2 mt-5">
                    <input
                      :id="RhFactorTypes.negative"
                      v-model="fields.rh"
                      type="radio"
                      :value="false"
                    />
                    <label
                      class="blood-icon"
                      name="radio"
                      :for="RhFactorTypes.negative"
                    >
                      Rh-
                    </label>
                  </div>
                </div>
              </ui-input-label>
            </div>

            <!-- Семейная наследственность -->
            <div class="mt-18">
              <ui-input-label
                :label="$t('common.family_inheritance')"
                black
                bold
              >
                <multiselect
                  v-model="fields.heredity"
                  class="multiselect-custom"
                  :placeholder="$t('common.placeholder_family_inheritance')"
                  label="name"
                  track-by="code"
                  :options="suggestionsFamilyInheritance"
                  :multiple="true"
                  :taggable="true"
                  select-label="✔"
                  selected-label="✔"
                  deselect-label="✔"
                  tag-placeholder="добавить"
                  @tag="addTagFamilyInheritance"
                ></multiselect>
              </ui-input-label>
            </div>

            <!-- Вредные привычки -->
            <div class="mt-18">
              <ui-input-label :label="$t('common.bad_habits')" black bold>
                <multiselect
                  v-model="fields.badHabits"
                  class="multiselect-custom"
                  :placeholder="$t('common.placeholder_bad_habits')"
                  label="name"
                  track-by="code"
                  :options="suggestionsBadHabits"
                  :multiple="true"
                  :taggable="true"
                  select-label="✔"
                  selected-label="✔"
                  deselect-label="✔"
                  tag-placeholder="добавить"
                  @tag="addTagBadHabits"
                ></multiselect>
              </ui-input-label>
            </div>
          </div>

          <!-- кнопка -->
          <ui-button
            color="warning"
            fluid
            :disabled="failed"
            :loading="loading"
            type="submit"
          >
            {{ $t('common.register') }}
          </ui-button>
        </ui-container>
        <ui-container class="mt-40" size="sm">
          <auth-registration-agree />
        </ui-container>
      </div>
    </ui-form>
  </div>
</template>

<script>
import AuthLabel from '@/components/app/AuthLabel.vue'
import Multiselect from 'vue-multiselect'
import AuthRegistrationAgree from '@/components/app/AuthRegistrationAgree.vue'

export default {
  components: {
    AuthLabel,
    Multiselect,
    AuthRegistrationAgree,
  },
  data() {
    return {
      optionsHeight: [
        {
          label: 'см',
          id: 1,
        },
      ],
      optionsWeight: [
        {
          label: 'кг',
          id: 1,
        },
      ],
      // buttonNextPartReg: false,
      nextPartReg: false,
      loading: false,
      confirmed: false,
      // value: '',
      value: [],
      selectHeight: '',
      selectWeight: '',
      gender: {
        man: 1,
        woman: 2,
      },
      RhFactorTypes: {
        positive: 'Rh+',
        negative: 'Rh-',
      },
      bloodTypes: {
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
      },
      fields: {
        email: '', // почта
        password: '', // пароль
        name: '', // имя
        surname: '', // фамилия
        patronymic: '', // отчество
        birthday: '', // дата
        gender: null,
        phone: '', // телефон
        country: '', // страна
        city: '', // населённый пункт
        allergies: [], // аллергии
        drugs: [], // лекарства
        chronicDiseases: [], // хронические заболевания
        heredity: [], // семейная наследственность
        badHabits: [], // вредные привычки
        height: '', // рост
        heightUnit: 'cm',
        weight: '', // вес
        weightUnit: 'kg',
        blood: null, // группа крови
        rh: null, // резус-фактор
      },
      // !! списки должны тянуться с бэка
      suggestionsCity: [
        'Абакан',
        'Адлер',
        'Анапа',
        'Ангарск',
        'Анжеро-Судженск',
        'Апатиты',
        'Арзамас',
        'Архангельск',
        'Астрахань',
        'Ачинск',
      ],
      suggestionsAllergy: [
        { name: 'Пыль', code: 'dust' },
        { name: 'Пыльца', code: 'pollen' },
        { name: 'Растения', code: 'plants' },
      ],
      suggestionsMedications: [
        { name: 'Анальгин', code: 'analgin' },
        { name: 'Парацетамол', code: 'paracetamol' },
        { name: 'Цетрин', code: 'cetrin' },
        { name: 'Супрастин', code: 'suprastin' },
      ],
      suggestionsChronicDiseases: [
        { name: 'Артроз', code: 'arthrosis' },
        { name: 'Артрит', code: 'arthritis' },
        { name: 'Диабет', code: 'diabetes' },
        { name: 'Мигрень', code: 'migraine' },
        { name: 'Другое', code: 'other' },
      ],
      suggestionsFamilyInheritance: [
        { name: 'Пример 1', code: 'example 1' },
        { name: 'Пример 2', code: 'example 2' },
        { name: 'Пример 3', code: 'example 3' },
        { name: 'Пример 4', code: 'example 4' },
        { name: 'Пример 5', code: 'example 5' },
        { name: 'Другое', code: 'other' },
      ],
      suggestionsBadHabits: [
        { name: 'Курение', code: '1' },
        { name: 'Алкоголизм', code: '2' },
        { name: 'Фаст-фуд', code: '3' },
        { name: 'Игромания', code: '4' },
        { name: 'Сквернословие', code: '5' },
        { name: 'Нет', code: 'no' },
      ],
    }
  },
  computed: {
    buttonNextPartReg() {
      if (
        this.fields.surname &&
        this.fields.name &&
        this.fields.patronymic &&
        this.fields.birthday &&
        this.fields.gender &&
        this.fields.email &&
        this.fields.password
      ) {
        return false
      }
      return true
    },
    server_error() {
      return this.invalid_credentials || this.not_confirmed_or_block
    },
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
    // eslint-disable-next-line require-await
    async submit() {
      // submit() {
      this.loading = true

      const { ...payload } = this.fields

      await this.$axios
        .post('/registration', payload)
        .then(this.onSuccess)
        .catch(this.onError)
      // console.log('payload', payload)
      this.loading = false

      // redirect on next page registration
      // this.$router.push('/sign-up-2')
    },

    nextPartRegistr() {
      this.nextPartReg = true
    },

    // confirm(sms) {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       if (+sms % 2) {blood
    //         reject(new Error('error'))
    //       } else {
    //         resolve()
    //       }
    //     }, 1000)
    //   })
    // },

    // submit() {
    //   this.$router.push('/')
    // },
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      }
      this.suggestionsAllergy.push(tag)
      this.fields.allergies.push(tag)
    },
    addTagMedications(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      }
      this.suggestionsMedications.push(tag)
      this.fields.drugs.push(tag)
    },
    addTagChronicDiseases(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      }
      this.suggestionsChronicDiseases.push(tag)
      this.fields.chronicDiseases.push(tag)
    },
    addTagFamilyInheritance(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      }
      this.suggestionsFamilyInheritance.push(tag)
      this.fields.heredity.push(tag)
    },
    addTagBadHabits(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      }
      this.suggestionsBadHabits.push(tag)
      this.fields.badHabits.push(tag)
    },
  },
}
</script>

<style>
.text-primary {
  color: #469c79 !important;
}
.ui-select-item:checked,
.ui-select-item:hover {
  background-color: #469c79 !important;
}

.ui-select--dense {
  height: 38px;
  width: 74px;
  margin-left: 15px;
}
.ui-select {
  padding: 0 15px !important;
}
.ui-input__field {
  padding: 8px 0 8px 18px !important;
}
</style>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.sass';

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

<style lang="scss" scoped>
@import '@/assets/styles/_variables.sass';

.biological {
  display: flex;
  gap: 12px;
  margin: 18px 0 18px 0;
}
.checkbox-bloodType,
.checkbox-RhFactor {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
}
.checkbox-radio-btn2 {
  display: inline-block;
}
.checkbox-radio-btn2 input[type='radio'] {
  display: none;
}
.checkbox-radio-btn2 label {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 50px;
  height: 46px;
  padding: 0px 20px;
  line-height: 34px;
  border-radius: 10px;
  user-select: none;
  padding-left: 22px;
  font-family: $base-font-family;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}
.checkbox-radio-btn2 input[type='radio']:checked + label {
  background: #469c79;
  color: #fff;
}
.checkbox-radio-btn2 input[type='radio']:hover + label {
  cursor: pointer;
  background: #469c79;
  color: #fff;
}
.multiselect-custom {
  & ::v-deep {
    .multiselect__tags,
    .multiselect__input {
      background: #e7f4f1;
    }
    .multiselect__input {
      border-bottom-left-radius: unset;
    }
    .multiselect__tags {
      border: none;
      padding-left: 18px;
      padding-right: 16px;
      font-size: 16px;
      border-radius: 10px;
    }
    .multiselect__select {
      display: none;
    }
    .multiselect__content-wrapper {
      margin-top: 12px;
      border-radius: 10px;
      filter: drop-shadow(0px 2px 8px rgba(51, 51, 51, 0.15));
    }
    .multiselect__placeholder {
      color: #999 !important;
    }
    .multiselect__option--selected.multiselect__option--highlight {
      background: #469c79;
      color: #fff;
    }
    .multiselect__option--selected {
      background: #fff;
      color: #469c79;
      font-weight: 700;
    }
    .multiselect__option--selected:after {
      background: #fff;
      color: #469c79;
    }
    .multiselect__option--selected.multiselect__option--highlight:after {
      color: #fff;
      background-color: #469c79;
    }
  }
}
</style>

<router>
  {
    path: '/sign-up',
    name: 'sign-up',
  }
</router>
