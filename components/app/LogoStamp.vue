<template>
  <component :is="tag" :to="to" class="logo-stamp" :class="classes">
    <div class="d-flex flex-column logo-img">
      <span class="logo-img__title">CLINIC ASSIST</span>
      <span class="logo-img__subtitle">Professional Medical Assistance</span>
    </div>
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

<style lang="scss" scoped>
@import '@/assets/styles/_variables.sass';
.logo-img {
  width: 140px;
  height: 40px;
  background-color: #fff7fa57;

  &__title {
    margin-left: 11px;
    margin-top: 3px;
    font-family: $head-font-family;
    font-weight: 500;
    font-size: 16px;
    color: #4975aa;
  }
  &__subtitle {
    margin-left: 9px;
    margin-top: -10px;
    font-family: $head-font-family;
    font-weight: 500;
    font-size: 8px;
    color: #999;
  }
}
</style>
