<template>
  <div>
    <section-user v-if="sectionUser" />
    <section-no-user v-if="sectionNoUser" />
    <section-edit-user v-if="sectionEditUser" />
  </div>
</template>

<script>
import SectionUser from '@/components/app/ProfilePatientPage/SectionUser.vue'
import SectionNoUser from '@/components/app/ProfilePatientPage/SectionNoUser.vue'
import SectionEditUser from '@/components/app/ProfilePatientPage/SectionEditUser.vue'
export default {
  name: 'MedCard',
  components: {
    SectionUser,
    SectionNoUser,
    SectionEditUser,
  },
  data() {
    return {
      sectionUser: false,
      sectionNoUser: false,
      sectionEditUser: true,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.sass';
.text-style-label {
  color: #999;
  font-family: $base-font-family;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
}
.med-card {
  padding: 36px;
  overflow: hidden;

  &__main-info {
    max-width: 792px;
    height: 239px;
    background-image: url('@/assets/images/background-img-2.png');
    background-size: contain;
    background-repeat: no-repeat;
    padding: 24px;
    display: flex;
    flex-direction: column;

    &__img-patient {
      width: 92px;
      height: 92px;
      border-radius: 16px;
    }

    &__bio {
      margin-left: 24px;
      width: 275px;
      display: flex;
      flex-direction: column;
      gap: 11px;

      &__text {
        color: #fff;
        font-family: $base-font-family;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
      }

      &__location-icon {
        color: #ff9901;
      }

      &__location-text {
        color: #fff;
        font-family: $base-font-family;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        margin-left: 8px;
      }
    }

    &__balance-btn {
      border: 2px solid #b4e2c7;
    }

    &__balance-text {
      font-family: $head-font-family;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px;
      color: #333;
    }

    &__balance-icon {
      color: #333;
      width: 8px;
      height: 11px;
    }

    &__balance-add {
      color: #fff;
      font-family: $base-font-family;
      font-size: 10px;
      font-style: normal;
      font-weight: 600;
      line-height: 12px;
      margin-right: 8px;
    }

    &__personal-info {
      margin-top: 24px;
      width: 100%;
      height: 75px;
      border-radius: 16px;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-around;

      &__num {
        margin-top: 5px;
        color: #333;
        font-family: $head-font-family;
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 28px;
      }

      &__label {
        @extend .text-style-label;
      }
    }
  }

  &__main {
    margin-top: 32px;
    max-width: 792px;
    display: flex;
    flex-direction: column;

    &__title {
      color: #333;
      font-family: $base-font-family;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }

    &__edit-icon {
      width: 14px;
      height: 14px;
    }

    &__container {
      padding: 24px 200px 24px 24px;

      &__text {
        color: #333;
        font-family: $base-font-family;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
      }
    }

    &__block {
      display: flex;
      flex-direction: column;

      &__subtitle {
        @extend .text-style-label;
      }

      &__list {
        margin-top: 12px;
        display: flex;
        gap: 21px;
      }

      &__list-flex {
        margin-top: 12px;
        display: flex;
        flex-direction: column;
        gap: 22px;
      }
    }

    &__item {
      width: 106px;
      height: 46px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      background-color: #e7f4f1;
      font-family: $base-font-family;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      color: #333;
    }

    &__item-2 {
      width: 160px;
      height: 46px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      background-color: #e7f4f1;
      font-family: $base-font-family;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      color: #333;
    }
  }
}
.small-green-square {
  width: 4px;
  height: 4px;
  background-image: url('@/assets/images/green-sm-point.png');
}
</style>

<router>
  {
    path: '/profile/med-card',
    name: 'med-card',
  }
</router>
