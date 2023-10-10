<template>
  <div class="sorting">
    <div class="sorting__block">
      <span class="sorting__block__text">
        На сервисе <span class="text-bold">более 10 000 врачей</span>
      </span>
      <div class="ml-30">
        <ui-sorting
          v-model="valueforSorting"
          :items="items"
          label="Сортировка"
        />
      </div>
    </div>
    <ui-divider class="divider mt-20" horizontal />
  </div>
</template>

<script>
export default {
  name: 'SortingOption',
  data() {
    return {
      valueforSorting: [null, null, null, null],
      items: [
        {
          key: 'rating',
          label: 'рейтинг',
        },
        {
          key: 'skill',
          label: 'стаж',
        },
        {
          key: 'price',
          label: 'стоимость',
        },
        {
          key: 'dating',
          label: 'ближайшая запись',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.sass';

.text-style-black {
  color: #333;
  font-family: $base-font-family;
  font-style: normal;
}

.sorting {
  margin-top: 24px;
  width: 797px;

  &__block {
    display: flex;
    align-items: center;
    justify-content: space-around;

    &__text {
      @extend .text-style-black;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
    }
  }
}
.divider {
  color: #b4e2c7;
}
</style>
