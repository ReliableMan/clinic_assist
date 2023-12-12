<template>
  <div class="flex-1 d-flex flex-column">
    <div class="flex-1">
      <div class="d-flex content-center">
        <logo-stamp :large="expanded" />
      </div>

      <ui-divider class="green-line mv-36" horizontal />

      <div class="d-flex content-center mb-50">
        <ui-doctor-avatar :avatar="$store.getters['user/avatar']" />
        <div
          v-if="expanded"
          class="pt-4 ml-12 fs-14 lh-20"
          style="min-width: 1px"
        >
          <div class="text-ellipsis">{{ $auth.user.user.name }}</div>
          <div class="text-ellipsis">{{ $auth.user.user.surname }}</div>
        </div>
      </div>

      <the-sidebar-menu :expanded="expanded" @collapse="$emit('collapse')">
        <template v-if="dialogues_notify_count" #dialogues>
          <ui-circle-notify bg="primary">
            {{ dialogues_notify_count }}
          </ui-circle-notify>
        </template>
        <template v-if="councils_notify_count" #councils>
          <ui-circle-notify bg="primary">
            {{ councils_notify_count }}
          </ui-circle-notify>
        </template>
        <template v-if="consultations_notify_count" #consultations>
          <ui-circle-notify bg="primary">
            {{ consultations_notify_count }}
          </ui-circle-notify>
        </template>
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
