<template>
  <nav>
    <ul class="sidebar-menu">
      <li v-for="(link, index) in menu" :key="index" class="sidebar-menu__item">
        <ui-button
          :icon="link.icon"
          :fluid="expanded"
          :color="isCurrent(link) ? 'success' : ''"
          :to="localePath(link.route)"
          :label-class="expanded ? 'd-flex items-center' : ''"
          :static="expanded ? '' : 'md'"
          :align="expanded ? 'start' : 'center'"
          :aria-label="!expanded ? $t(link.locale) : undefined"
          light-hover-shadow
          @click.native="$emit('collapse')"
        >
          <ui-rect size="xs">
            <ui-icon :name="link.icon" no-transition />
          </ui-rect>
          <span v-if="expanded" class="ml-16">{{ $t(link.locale) }}</span>
        </ui-button>

        <transition name="fade-scale">
          <div
            v-if="$scopedSlots[link.key] && expanded"
            class="sidebar-menu__notify"
          >
            <slot :name="link.key" />
          </div>
        </transition>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    expanded: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    menu() {
      // const role = this.$store.getters['user/role']

      // return this.$store.getters[`profile-menu/${role}`]
      // временный костыль под пациента
      // с сервака приходит ключ-роль и в зависимости от него отрисовывается пункты меню
      // пункты меню настроить в сторе profile-menu.js
      return this.$store.getters[`profile-menu/patient`]
    },
  },
  methods: {
    isCurrent(link) {
      const children = link.children || []
      const base_route = this.getRouteBaseName()

      return (
        this.$helpers.isEqualsRoute(link.route, base_route) ||
        children.includes(base_route)
      )
    },
  },
}
</script>

<style lang="sass" scoped>
.sidebar-menu
  &__item
    position: relative
    margin-bottom: 8px

    &:last-child
      margin-bottom: 0

  &__notify
    width: 20px
    height: 20px
    margin: auto
    position: absolute
    top: 0
    bottom: 0
    right: -30px
</style>
