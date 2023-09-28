<template>
  <div class="flex-1 d-flex flex-column">
    <div class="flex-1">
      <div class="d-flex content-center">
        <logo-stamp
          :large="expanded"
          :label="expanded ? $t('system.stamp_logo_large') : ''"
        />
      </div>

      <ui-divider class="green-line mv-36" horizontal />

      <div class="d-flex content-center mb-100">
        <ui-doctor-avatar :avatar="$store.getters['user/avatar']" />
        <div
          v-if="expanded"
          class="pt-4 ml-12 fs-14 lh-20"
          style="min-width: 1px"
        >
          <div class="text-ellipsis">{{ $auth.user.profile.name }}</div>
          <div class="text-ellipsis">{{ $auth.user.profile.surname }}</div>
        </div>
      </div>

      <the-sidebar-menu :expanded="expanded" @collapse="$emit('collapse')">
      </the-sidebar-menu>
    </div>
  </div>
</template>

<script>
import LogoStamp from '@/components/app/LogoStamp.vue'
import TheSidebarMenu from '@/components/app/TheSidebarMenu'

export default {
  components: {
    LogoStamp,
    TheSidebarMenu,
  },
  props: {
    expanded: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    consultations_notify_count() {
      return this.$store.getters['notifications/count']
    },
    dialogues_notify_count() {
      return this.$store.getters['chat-unread-messages/dialogues_count']
    },
    councils_notify_count() {
      return this.$store.getters['chat-unread-messages/councils_count']
    },
  },
}
</script>

<style scoped>
.green-line {
  color: #b4e2c7;
}
</style>
