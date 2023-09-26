<template>
  <ui-dropdown
    class="user-widget"
    no-padding
    :offset="[0, 13]"
    placement="bottom-end"
  >
    <template #default="{ shown }">
      <div
        class="user-widget__inner"
        :class="{ 'user-widget__inner--open': shown }"
      >
        <div class="user-widget__name">
          <div>{{ $auth.user.profile.name }}</div>
          <div>{{ $auth.user.profile.surname }}</div>
        </div>
        <div class="user-widget__indicator">
          <ui-icon name="chevron-down" class="user-widget__chevron" />
        </div>

        <ui-doctor-avatar :avatar="$store.getters['user/avatar']" />
      </div>
    </template>

    <template #portal="{ hide }">
      <ul class="pv-12">
        <li
          v-for="(link, index) in menu"
          :key="index"
          class="mb-5"
          :class="{ 'mt-10': link.exit }"
          @click="hide"
        >
          <ui-menu-link
            v-if="link.exit"
            class="user-widget__link c-pointer"
            hovered
            :icon="link.icon"
            :label="$t(link.locale)"
            @click="$auth.logout()"
          />
          <ui-menu-link
            v-else
            class="user-widget__link"
            hovered
            :to="localePath(link.route)"
            :icon="link.icon"
            :label="$t(link.locale)"
          />
        </li>
      </ul>
    </template>
  </ui-dropdown>
</template>

<script>
export default {
  computed: {
    menu() {
      // const role = this.$store.getters['user/role']
      // console.log('role-----------', role)
      // для пациента список в выпадающей менюшке
      return this.$store.getters[`profile-menu/patient`]
    },
  },
}
</script>

<style lang="sass" scoped>
.user-widget
  $parent: &

  &__inner
    display: flex
    align-items: center

    &--open
      #{$parent}__chevron
        transform: rotate(180deg)

  &__name
    text-align: right
    font-weight: 600
    font-size: 14px
    line-height: 20px

  &__indicator
    margin-left: 12px
    margin-right: 12px

  &__chevron
    color: $color-primary
    transition: transform $transition-timing

  &__link
    padding-top: 9px !important
    padding-bottom: 9px !important
</style>
