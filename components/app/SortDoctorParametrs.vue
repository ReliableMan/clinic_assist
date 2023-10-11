<template>
  <div class="mt-20">
    <ui-sorting
      v-model="value"
      class="sorting"
      :items="items"
      label="Сортировать:"
    >
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

<style lang="scss" scoped>
.sorting {
  & ::v-deep {
    .ui-sorting__button {
      border: none;
      padding-left: 0;
      margin-right: 0;
      padding-right: 17px;
    }
    .ui-sorting__label-text {
      display: block;
    }
  }
}
</style>

<style>
.ui-sorting__icon,
.ui-sorting__button:hover,
.ui-sorting__button--asc,
.ui-sorting__button--desc {
  color: #469c79 !important;
}
</style>
