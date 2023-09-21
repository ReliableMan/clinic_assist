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
          <ui-input-label
            :label="$t('common.allergy')"
            black
            bold
          ></ui-input-label>
          <ui-input-autocomplete
            v-model.trim="fields.town"
            :placeholder="$t('common.placeholder_allergy')"
            :suggestions="suggestionsAllergy"
          />
        </div>

        <!-- кнопка -->
        <ui-button
          color="success"
          fluid
          :disabled="failed"
          :loading="loading"
          type="submit"
        >
          {{ $t('common.confirm') }}
        </ui-button>
      </ui-container>
    </ui-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      fields: {
        country: '', // страна
        town: '', // населённый пункт
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
      suggestionsAllergy: ['Пыль', 'Пыльца', 'Растения'],
    }
  },
  methods: {
    submit() {
      console.log('yes')
    },
  },
}
</script>

<style>
.ui-select-item:hover {
  background-color: #469c79 !important;
}
</style>

<router>
  {
    path: '/sign-up-2',
    name: 'sign-up-2',
  }
</router>
