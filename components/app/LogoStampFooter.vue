<template>
  <component :is="tag" :to="to" class="logo-stamp" :class="classes">
    <img
      class="logo-stamp__image"
      src="@/assets/images/svg/clinic-assist-logo-dark.svg"
      alt="clinic-assist-logo"
    />
  </component>
</template>

<script>
export default {
  props: {
    large: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Boolean,
      default: true,
    },
    alt: {
      type: String,
      default: 'stamp',
    },
  },
  computed: {
    classes() {
      return {
        'logo-stamp--large': this.large,
      }
    },
    is_main_route() {
      return (
        this.localePath('index') === this.localePath(this.getRouteBaseName())
      )
    },
    tag() {
      return this.is_main_route || !this.link ? 'div' : 'nuxt-link'
    },
    to() {
      return this.is_main_route || !this.link
        ? undefined
        : this.localePath('index')
    },
  },
}
</script>

<style lang="sass" scoped>
.logo-stamp
  $parent: &

  display: flex
  align-items: center
  color: currentColor
  text-decoration: none

  &__image
    display: block
    width: 165px
    height: 41px

  &__text
    width: 138px
    display: block
    margin-left: 12px
    font-size: 10px
    line-height: 13px

  &--large
    #{$parent}__text
      width: 111px
      font-size: 12px
      line-height: 16px
</style>
