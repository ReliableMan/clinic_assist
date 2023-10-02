<template>
  <section>
    <div class="edit-page">
      <div class="edit-page__close-svg" @click="close">
        <ui-icon name="close" />
      </div>
      <div class="d-flex">
        <!-- avatar -->
        <ui-input-hidden-file v-model="image">
          <img
            width="92px"
            height="92px"
            src="@/assets/images/avatar.png"
            alt="avatar"
          />
        </ui-input-hidden-file>
        <!-- right text -->
        <div class="d-flex flex-column ml-20">
          <p class="edit-page__download-text">
            {{ $t('common.upload_photo') }}
          </p>
          <div class="text-style-2">
            <span class="edit-page__download-text-2">
              {{ $t('common.max_size') }}
            </span>
            {{ max_size / 1000 }} {{ $t('common.MB') }}
          </div>
          <div class="text-style-2">
            <span class="edit-page__download-text-2">
              {{ $t('common.acceptable_formats') }}
            </span>
            {{ $helpers.formatExt(ext, 'message') }}
          </div>
        </div>
      </div>

      <!-- Surname - фамилия -->
      <ui-validator
        v-slot="{ error }"
        rules="required"
        :custom-messages="{ required: $t('validation.required_last_name') }"
        class="mt-24 mb-18"
      >
        <ui-input-label
          :label="$t('common.last_name')"
          black
          bold
        ></ui-input-label>
        <ui-input
          v-model="fields.surname"
          class="size_input"
          :error="error"
          :placeholder="$t('placeholder.surname')"
        />
      </ui-validator>

      <!-- Name - имя -->
      <ui-validator
        v-slot="{ error }"
        rules="required"
        :custom-messages="{ required: $t('validation.required_name') }"
        class="mb-18"
      >
        <ui-input-label :label="$t('common.name')" black bold></ui-input-label>
        <ui-input
          v-model="fields.name"
          class="size_input"
          :error="error"
          :placeholder="$t('placeholder.name')"
        />
      </ui-validator>

      <!-- Lastname - отчество -->
      <ui-validator
        v-slot="{ error }"
        rules="required"
        :custom-messages="{ required: $t('validation.required_middle_name') }"
        class="mb-18"
      >
        <ui-input-label
          :label="$t('common.middle_name')"
          black
          bold
        ></ui-input-label>
        <ui-input
          v-model="fields.lastName"
          class="size_input"
          :error="error"
          :placeholder="$t('placeholder.last_name')"
        />
      </ui-validator>

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
          class="size_input"
          :placeholder="$t('placeholder.country')"
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
          v-model.trim="fields.town"
          class="size_input"
          :placeholder="$t('common.placeholder_locality')"
          :suggestions="suggestionsTown"
          :error="error"
        />
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
            <div class="checkbox-radio-btn1 mt-5">
              <input
                :id="fields.gender.man"
                v-model="fields.valueGender"
                :error="error"
                type="radio"
                :value="fields.gender.man"
              />
              <label class="man-svg-icon" name="radio" :for="fields.gender.man">
                {{ fields.gender.man }}
              </label>
            </div>
            <div class="checkbox-radio-btn1 mt-5 ml-20">
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
            class="size_input"
            aria-required="true"
          />
        </ui-input-label>
      </ui-validator>

      <!-- Рост и вес -->
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

      <div class="group-checkbox">
        <!-- Группа крови -->
        <div>
          <ui-input-label :label="$t('common.blood_type')" black bold>
            <!-- bloodTypes I-->
            <div class="checkbox-bloodType">
              <div class="checkbox-radio-btn mt-5">
                <input
                  :id="fields.bloodTypes.first"
                  v-model="fields.bloodType"
                  type="radio"
                  :value="fields.bloodTypes.first"
                />
                <label
                  class="blood-icon"
                  name="radio"
                  :for="fields.bloodTypes.first"
                >
                  {{ fields.bloodTypes.first }}
                </label>
              </div>
              <!-- bloodTypes II-->
              <div class="checkbox-radio-btn mt-5">
                <input
                  :id="fields.bloodTypes.second"
                  v-model="fields.bloodType"
                  type="radio"
                  :value="fields.bloodTypes.second"
                />
                <label
                  class="blood-icon"
                  name="radio"
                  :for="fields.bloodTypes.second"
                >
                  {{ fields.bloodTypes.second }}
                </label>
              </div>
              <!-- bloodTypes III-->
              <div class="checkbox-radio-btn mt-5">
                <input
                  :id="fields.bloodTypes.third"
                  v-model="fields.bloodType"
                  type="radio"
                  :value="fields.bloodTypes.third"
                />
                <label
                  class="blood-icon"
                  name="radio"
                  :for="fields.bloodTypes.third"
                >
                  {{ fields.bloodTypes.third }}
                </label>
              </div>
              <!-- bloodTypes IV -->
              <div class="checkbox-radio-btn mt-5">
                <input
                  :id="fields.bloodTypes.fourth"
                  v-model="fields.bloodType"
                  type="radio"
                  :value="fields.bloodTypes.fourth"
                />
                <label
                  class="blood-icon"
                  name="radio"
                  :for="fields.bloodTypes.fourth"
                >
                  {{ fields.bloodTypes.fourth }}
                </label>
              </div>
            </div>
          </ui-input-label>
        </div>
        <!-- Резус-фактор -->
        <div>
          <ui-input-label :label="$t('common.Rh_factor')" black bold>
            <!-- bloodTypes I-->
            <div class="checkbox-RhFactor">
              <div class="checkbox-radio-btn mt-5">
                <input
                  :id="fields.RhFactorTypes.positive"
                  v-model="fields.RhFactorType"
                  type="radio"
                  :value="fields.RhFactorTypes.positive"
                />
                <label
                  class="blood-icon"
                  name="radio"
                  :for="fields.RhFactorTypes.positive"
                >
                  {{ fields.RhFactorTypes.positive }}
                </label>
              </div>
              <!-- bloodTypes II-->
              <div class="checkbox-radio-btn mt-5">
                <input
                  :id="fields.RhFactorTypes.negative"
                  v-model="fields.RhFactorType"
                  type="radio"
                  :value="fields.RhFactorTypes.negative"
                />
                <label
                  class="blood-icon"
                  name="radio"
                  :for="fields.RhFactorTypes.negative"
                >
                  {{ fields.RhFactorTypes.negative }}
                </label>
              </div>
            </div>
          </ui-input-label>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionEditUser',
  data() {
    return {
      loading: false,
      image: null,
      max_size: 5000,
      ext: ['jpg', 'jpeg', 'png', 'gif'],
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
      selectHeight: '',
      selectWeight: '',
      fields: {
        surname: '', // фамилия
        name: '', // имя
        lastName: '', // отчество
        country: '', // страна
        town: '', // населённый пункт
        gender: {
          man: 'Мужской',
          woman: 'Женский',
        },
        valueGender: '',
        date: '', // дата
        height: '', // рост
        weight: '', // вес
        bloodType: '', // группа крови
        bloodTypes: {
          first: 'I',
          second: 'II',
          third: 'III',
          fourth: 'IV',
        },
        RhFactorType: '', // резус-фактор
        RhFactorTypes: {
          positive: 'Rh+',
          negative: 'Rh-',
        },
      },
      // списки должны тянуться с бэка
      suggestionsTown: [
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
    }
  },
  methods: {
    close() {
      this.$emit('closeEdit')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.sass';
.text-style-1 {
  font-family: $base-font-family;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
}
.text-style-2 {
  font-family: $base-font-family;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
}
.size_input {
  width: 360px;
  // background-color: #e7f4f1 !important;
  border-radius: 10px !important;
}
.edit-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 36px;
  position: relative;

  &__close-svg {
    width: 17px;
    height: 17px;
    position: absolute;
    top: 30px;
    right: 30px;
    color: #469c79;
    cursor: pointer;
  }

  &__download-text {
    color: #469c79;
    font-family: $base-font-family;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    text-decoration-line: underline;
    cursor: pointer;
  }
  &__download-text-2 {
    color: #469c79;
    @extend .text-style-1;
  }
}
.checkbox-gender {
  width: 360px;
  display: flex;
}
.checkbox-radio-btn1 {
  display: inline-block;
}
.checkbox-radio-btn1 input[type='radio'] {
  display: none;
}
.checkbox-radio-btn1 label {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 167px;
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
.checkbox-radio-btn1 input[type='radio']:checked + label {
  box-shadow: 0px 0px 0px 2px #469c79;
}

.man-svg-icon {
  width: 18px;
  height: 20px;
  background-image: url('@/assets/images/svg/regAndAuth/vector-man.svg');
  background-repeat: no-repeat;
  background-position: left 30px top 10px;
}
.woman-svg-icon {
  width: 15px;
  height: 24px;
  background-image: url('@/assets/images/svg/regAndAuth/vector-woman.svg');
  background-repeat: no-repeat;
  background-position: left 30px top 10px;
}

.biological {
  width: 360px;
  display: flex;
  gap: 12px;
  margin: 18px 0 18px 0;
}
.group-checkbox {
  width: 360px;
  display: flex;
  gap: 10px;
}
.checkbox-bloodType,
.checkbox-RhFactor {
  display: flex;
  justify-content: flex-start;
  gap: 5px;
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
.checkbox-radio-btn input[type='radio']:checked + label {
  background: #469c79;
  color: #fff;
}
.checkbox-radio-btn input[type='radio']:hover + label {
  cursor: pointer;
  background: #469c79;
  color: #fff;
}
</style>

<style scoped>
/* .ui-input {
  background-color: #e7f4f1 !important;
} */
</style>
