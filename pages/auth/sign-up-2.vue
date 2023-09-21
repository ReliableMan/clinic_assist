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
          <!-- <multiselect
            v-model="fields.allergy"
            :options="options"
            :multiple="true"
            :close-on-select="false"
            :clear-on-select="false"
            :preserve-search="true"
            
            label="name"
            track-by="name"
            :preselect-first="false"
          >
            <template slot="selection" slot-scope="{ values, isOpen }">
              <span
                v-for="item in values"
                v-show="!isOpen"
                :key="item.id"
                class="multiselect__single"
              >
                {{ item.name }}
              </span></template
            >
          </multiselect> -->
          <multiselect
            v-model="fields.allergy"
            :placeholder="$t('common.placeholder_allergy')"
            label="name"
            track-by="code"
            :options="suggestionsAllergy"
            :multiple="true"
            :taggable="true"
            select-label=""
            deselect-label=""
            tag-placeholder="добавить"
            @tag="addTag"
          ></multiselect>
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
import Multiselect from 'vue-multiselect'
export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      value: [],
      loading: false,
      fields: {
        country: '', // страна
        town: '', // населённый пункт
        allergy: [], // аллергии
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
    }
  },
  methods: {
    submit() {
      console.log('yes')
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      }
      this.suggestionsAllergy.push(tag)
      this.fields.allergy.push(tag)
    },
  },
}
</script>

<style>
.ui-select-item:hover {
  background-color: #469c79 !important;
}
.multiselect__tags {
  background: #f3f3f3;
  border: none;
  padding-left: 18px;
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
  background: none;
  color: #469c79;
}
</style>

<router>
  {
    path: '/sign-up-2',
    name: 'sign-up-2',
  }
</router>
