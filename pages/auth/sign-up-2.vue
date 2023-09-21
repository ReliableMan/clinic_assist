<template>
  <div>
    <ui-form ref="form" v-slot="{ failed }" @submit="submit">
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
              v-model.trim="fields.town"
              :placeholder="$t('common.placeholder_locality')"
              :suggestions="suggestionsTown"
              :error="error"
            />
          </ui-validator>

          <!-- Аллергии -->
          <ui-input-label :label="$t('common.allergy')" black bold>
            <multiselect
              v-model="fields.allergy"
              :placeholder="$t('common.placeholder_allergy')"
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

          <!-- Постоянно принимаемые лекартсва -->
          <ui-input-label
            :label="$t('common.regularly_medications')"
            black
            bold
          >
            <multiselect
              v-model="fields.medications"
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
          <div class="mt-18">
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

          <!-- Семейная наследственность -->
          <div class="mt-18">
            <ui-input-label :label="$t('common.family_inheritance')" black bold>
              <multiselect
                v-model="fields.familyInheritance"
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
    </ui-form>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import AuthRegistrationAgree from '@/components/app/AuthRegistrationAgree.vue'

export default {
  components: {
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
      value: [],
      loading: false,
      selectHeight: '',
      selectWeight: '',
      fields: {
        country: '', // страна
        town: '', // населённый пункт
        allergy: [], // аллергии
        height: '', // рост
        weight: '', // вес
        medications: [], // лекарства
        chronicDiseases: [], // хронические заболевания
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
        familyInheritance: [], // семейная наследственность
        badHabits: [], // вредные привычки
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
  methods: {
    submit() {
      this.$router.push('/')
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      }
      this.suggestionsAllergy.push(tag)
      this.fields.allergy.push(tag)
    },
    addTagMedications(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      }
      this.suggestionsMedications.push(tag)
      this.fields.medications.push(tag)
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
      this.fields.familyInheritance.push(tag)
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
.ui-select-item:checked,
.ui-select-item:hover {
  background-color: #469c79 !important;
}
.multiselect__tags {
  background: #f3f3f3;
  border: none;
  padding-left: 18px;
  padding-right: 16px;
  font-size: 16px;
  border-radius: 10px;
}
.multiselect__input {
  background: #f3f3f3;
}
.multiselect__placeholder {
  color: #999 !important;
}
.multiselect__select {
  display: none;
}
.multiselect__content-wrapper {
  margin-top: 10px;
  border-radius: 10px;
  filter: drop-shadow(0px 2px 8px rgba(51, 51, 51, 0.15));
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

<router>
  {
    path: '/sign-up-2',
    name: 'sign-up-2',
  }
</router>
