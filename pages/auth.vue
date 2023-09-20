<template>
  <div class="auth-layout">
    <ui-container size="sm">
      <ui-container class="mb-40" size="xxs">
        <div class="d-flex items-center content-space-between">
          <ui-button
            width="97px"
            :to="$helpers.combineRoute('sign-in')"
            :outlined="is_signin"
            :light-hover-shadow="!is_signin"
            text-color="primary"
            class="auth-layout__button"
          >
            {{ $t('common.signin') }}
          </ui-button>

          <ui-button
            width="177px"
            :to="$helpers.combineRoute('sign-up')"
            :outlined="is_signup"
            :light-hover-shadow="!is_signup"
            text-color="primary"
            class="auth-layout__button"
          >
            {{ $t('common.signup') }}
          </ui-button>
        </div>
      </ui-container>

      <nuxt-child />
    </ui-container>
  </div>
</template>

<script>
export default {
  layout: 'public',
  middleware: 'guest',
  computed: {
    is_signin() {
      return this.$helpers.isEqualsRoute('sign-in', this.getRouteBaseName())
    },
    is_signup() {
      return this.$helpers.isEqualsRoute('sign-up', this.getRouteBaseName())
    },
  },
}
</script>

<style lang="sass" scoped>
.auth-layout
  padding: 40px 0 40px 0

  &__button
    font-family: $head-font-family !important
    font-size: 20px !important
    line-height: 11px !important
    font-weight: 700 !important
</style>
