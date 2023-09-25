<template>
  <div class="mt-20">
    <ui-sorting v-model="value" :items="items" label="Сортировать:">
      <span>Сортировать</span>
    </ui-sorting>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: [null, null],
      items: [
        {
          key: 'rating',
          label: 'рейтинг',
        },
        {
          key: 'experience',
          label: 'стаж',
        },
        {
          key: 'price',
          label: 'стоимость',
        },
        {
          key: 'nearest_entry',
          label: 'ближайшая запись',
        },
      ],
    }
  },
}
</script>

<style>
button.ui-sorting__button {
  border: none !important;
  padding-left: 0 !important;
  margin-right: 0 !important;
  padding-right: 17px !important;
}
div.ui-sorting__label-text {
  display: block !important;
}
</style>
