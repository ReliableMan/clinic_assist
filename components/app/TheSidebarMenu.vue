<template>
  <nav>
    <ul class="sidebar-menu">
      <li v-for="(link, index) in menu" :key="index" class="sidebar-menu__item">
        <ui-button
          :icon="link.icon"
          :fluid="expanded"
          :class="{ styleBtn: path.includes(link.key) }"
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
          <span v-if="expanded" class="ml-16 text-style">
            {{ $t(link.locale) }}
          </span>
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

    <ui-divider class="green-line mv-36" horizontal />

    <ui-button hover-shadow>
      <div class="d-flex">
        <img
          src="@/assets/images/svg/notification.svg"
          alt="notifications-icon"
        />
        <span class="text-style ml-16">{{ $t('common.notifications') }}</span>
      </div>
    </ui-button>

    <p class="text-style-2">{{ $t('common.not_active_notifications') }}</p>
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
      return this.$store.getters[`profile-menu/patient_page`]
    },
    path() {
      let url = this.$route.path.replace(/\//, '')
      if (url.length > 13) {
        url = url.split('/')[0]
        return url
      }
      return url
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

.green-line
  color: #b4e2c7

.text-style
  font-family: $base-font-family
  font-size: 16px
  font-style: normal
  font-weight: 400
  line-height: 22px

.text-style-2
  font-family: $base-font-family
  font-size: 12px
  font-style: normal
  font-weight: 400
  line-height: 16px
  color: #999
</style>

<style scoped>
.styleBtn {
  background-image: url('@/assets/images/svg/button-gradient-menu.svg') !important;
  color: #fff !important;
}
</style>
